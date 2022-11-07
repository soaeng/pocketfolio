package com.ssafy.pocketfolio.security.filter;

import com.ssafy.pocketfolio.security.util.JWTUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;


@Log4j2
public class ApiCheckFilter extends OncePerRequestFilter {

    private AntPathMatcher antPathMatcher;
    private String[] patterns;
    private String[] postForGuestPatterns;
    private JWTUtil jwtUtil;

    public ApiCheckFilter(String[] patterns, String[] postForGuestPatterns, JWTUtil jwtUtil){
        this.antPathMatcher = new AntPathMatcher();
        this.patterns = patterns;
        this.postForGuestPatterns = postForGuestPatterns;
        this.jwtUtil = jwtUtil;
    }

    public ApiCheckFilter(String[] postForGuestPatterns, JWTUtil jwtUtil){
        this.antPathMatcher = new AntPathMatcher();
        this.postForGuestPatterns = postForGuestPatterns;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        log.info("REQUESTURI: " + request.getRequestURI());
        log.info("this uri need token: " + needToken(request));

        if (needToken(request)) {

            log.info("ApiCheckFilter.................................................");

            Long userSeq = checkAuthHeaderAndExtractUserSeq(request);
            request.setAttribute("userSeq", userSeq); // setAttribute 위치 어디로 할지 고민 1

        }

        filterChain.doFilter(request, response);
    }

    private long checkAuthHeaderAndExtractUserSeq(HttpServletRequest request) {

        long userSeq = -1L;

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null) {
            return 0L;
        }

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

    private boolean needToken(HttpServletRequest request) throws ServletException {
        String method = request.getMethod();
        if ("PATCH".equalsIgnoreCase(method) || "DELETE".equalsIgnoreCase(method)) {
            return true;
        }
        String requestURI = request.getRequestURI();
        if ("POST".equalsIgnoreCase(method)) {
            if (Arrays.stream(postForGuestPatterns).anyMatch(e -> antPathMatcher.match(e, requestURI))) {
                return false;
            }
            return true;
        }

//        return Arrays.stream(patterns).anyMatch(e -> antPathMatcher.match(e, requestURI));
        return true;
    }
}
