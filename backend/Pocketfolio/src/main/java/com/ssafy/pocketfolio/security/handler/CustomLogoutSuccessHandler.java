package com.ssafy.pocketfolio.security.handler;

import com.ssafy.pocketfolio.security.service.OAuthService;
import com.ssafy.pocketfolio.security.util.JWTUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Log4j2
public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {

//    private final String FRONT_URL = "https://k7e101.p.ssafy.io";
//    private final String FRONT_URL = "http://localhost:3000";

//    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    private JWTUtil jwtUtil;

    private OAuthService oAuthService;

    public CustomLogoutSuccessHandler(JWTUtil jwtUtil, OAuthService oAuthService){
        this.jwtUtil = jwtUtil;
        this.oAuthService = oAuthService;
    }


    @Override
    public void onLogoutSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        log.info("--------------------------------------");
        log.info("onLogoutSuccess");

        try {
            long userSeq = checkAuthHeaderAndExtractUserSeq(request);
            if (userSeq > 0) { // 검증 12345
                oAuthService.deleteRefreshToken(userSeq);
            }
        } catch (Exception e) {
            log.error("onLogoutSuccess Error: " + e.getMessage());
            e.printStackTrace();
        }

        if (authentication != null && authentication.getDetails() != null) {
            try {
                HttpSession session = request.getSession();
                if (session != null) {
                    session.invalidate();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        response.setStatus(HttpServletResponse.SC_CREATED);

        // 12345
//        response.sendRedirect(FRONT_URL + "/logout?result=success");
//        response.sendRedirect(FRONT_URL + "/main"); // 백에서 main으로 바로 이동
    }

    private long checkAuthHeaderAndExtractUserSeq(HttpServletRequest request) {

        long userSeq = 0L;

        String authHeader = request.getHeader("Authorization");

        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            log.info("Authorization(accessToken) exist: " + authHeader);

            try {
                userSeq = jwtUtil.validateAndExtractUserSeq(authHeader.substring(7));
                log.info("validate result: " + userSeq);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return userSeq;
    }

}
