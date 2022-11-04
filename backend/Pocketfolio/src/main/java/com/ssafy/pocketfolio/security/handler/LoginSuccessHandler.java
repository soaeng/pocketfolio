package com.ssafy.pocketfolio.security.handler;

import com.ssafy.pocketfolio.security.service.OAuthService;
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

    private final String FRONT_URL = "http://localhost:3000";

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

//    private PasswordEncoder passwordEncoder;

    private JWTUtil jwtUtil;

    private OAuthService oAuthService;

    public LoginSuccessHandler(JWTUtil jwtUtil){
//        passwordEncoder = new BCryptPasswordEncoder();
        this.jwtUtil = jwtUtil;
    }

    public LoginSuccessHandler(PasswordEncoder passwordEncoder, JWTUtil jwtUtil, OAuthService oAuthService){
//        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.oAuthService = oAuthService;
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
        boolean isSignUp = userAuthDto.isSignUp();

        try {
            String accessToken = jwtUtil.generateAccessToken(userSeqStr);
            String refreshToken = jwtUtil.generateRefreshToken(userSeqStr);

            log.info("accessToken: " + accessToken);
            log.info("refreshToken: " + refreshToken);

            oAuthService.updateRefreshToken(Long.parseLong(userSeqStr), refreshToken); // DB에 refreshToken 저장

            String url = makeRedirectUrl(accessToken, refreshToken, isSignUp);

            if (response.isCommitted()) {
                log.debug("응답이 이미 커밋된 상태입니다. " + url + "로 리다이렉트하도록 바꿀 수 없습니다.");
                return;
            }

            log.info("Redirect URL: " + url);

            redirectStrategy.sendRedirect(request, response, url);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String makeRedirectUrl(String accessToken, String refreshToken, boolean isSignUp) {
        return UriComponentsBuilder.fromUriString("/users/oauth" + (isSignUp ? "/signup" : "/login"))
                .queryParam("accessToken", accessToken)
                .queryParam("refreshToken", refreshToken)
                .build().toUriString();

//        return UriComponentsBuilder.fromUriString(FRONT_URL + (isSignUp ? "/signup" : "/login"))
//                .queryParam("accessToken", accessToken)
//                .queryParam("refreshToken", refreshToken)
//                .build().toUriString();
    }

}
