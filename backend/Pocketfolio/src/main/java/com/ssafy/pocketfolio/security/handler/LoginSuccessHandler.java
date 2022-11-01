package com.ssafy.pocketfolio.security.handler;

import com.ssafy.pocketfolio.security.dto.UserAuthDto;
import com.ssafy.pocketfolio.security.util.JWTUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

//    private PasswordEncoder passwordEncoder;

    private JWTUtil jwtUtil;

    public LoginSuccessHandler(JWTUtil jwtUtil){
//        passwordEncoder = new BCryptPasswordEncoder();
        this.jwtUtil = jwtUtil;
    }

    public LoginSuccessHandler(PasswordEncoder passwordEncoder, JWTUtil jwtUtil){
//        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        log.info("--------------------------------------");
        log.info("onAuthenticationSuccess");

        UserAuthDto userAuthDto = (UserAuthDto) authentication.getPrincipal();

        log.info(userAuthDto);

//        boolean passwordResult = passwordEncoder.matches("1111", userAuthDto.getPassword());

        // Long.toString(userSeq)
        String userSeqStr = userAuthDto.getUsername();

        String accessToken = null;
        String refreshToken = null;
        try {
            accessToken = jwtUtil.generateAccessToken(userSeqStr);
            refreshToken = jwtUtil.generateRefreshToken(userSeqStr);

            log.info("accessToken: " + accessToken);
            log.info("refreshToken: " + refreshToken);

            String url = makeRedirectUrl(accessToken, refreshToken, userAuthDto.getFrom());

            if (response.isCommitted()) {
                log.debug("응답이 이미 커밋된 상태입니다. " + url + "로 리다이렉트하도록 바꿀 수 없습니다.");
                return;
            }

            redirectStrategy.sendRedirect(request, response, url);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String makeRedirectUrl(String accessToken, String refreshToken, String from) {
        return UriComponentsBuilder.fromUriString("http://localhost:8081/api/login/oauth2/code/" + from)
                .queryParam("accessToken", accessToken)
                .queryParam("refreshToken", refreshToken)
                .build().toUriString();
    }

}
