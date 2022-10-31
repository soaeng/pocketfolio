package com.ssafy.pocketfolio.security.filter;

import lombok.extern.log4j.Log4j2;
import net.minidev.json.JSONObject;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import com.ssafy.pocketfolio.security.util.JWTUtil;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;


@Log4j2
public class ApiCheckFilter extends OncePerRequestFilter {

    private AntPathMatcher antPathMatcher;
    private String[] patterns;
    private JWTUtil jwtUtil;

    public ApiCheckFilter(String[] patterns, JWTUtil jwtUtil){
        this.antPathMatcher = new AntPathMatcher();
        this.patterns = patterns;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        log.info("REQUESTURI: " + request.getRequestURI());

//        log.info(antPathMatcher.match(pattern, request.getRequestURI()));
        log.info(matchAtLeastOne(request));

        if(matchAtLeastOne(request)) {

            log.info("ApiCheckFilter.................................................");
            log.info("ApiCheckFilter.................................................");
            log.info("ApiCheckFilter.................................................");

            boolean checkHeader = checkAuthHeader(request);

            if(checkHeader){
                filterChain.doFilter(request, response);
            }else {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                // json 리턴
                response.setContentType("application/json;charset=utf-8");
                JSONObject json = new JSONObject();
                String message = "FAIL CHECK API TOKEN";
                json.put("code", "403");
                json.put("message", message);

                PrintWriter out = response.getWriter();
                out.print(json);
            }
            return;
        }

        filterChain.doFilter(request, response);
    }

    private boolean checkAuthHeader(HttpServletRequest request) {

        boolean checkResult = false;

        String authHeader = request.getHeader("Authorization");

        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            log.info("Authorization exist: " + authHeader);

            try {
                long userSeq = jwtUtil.validateAndExtractUserSeq(authHeader.substring(7));
                log.info("validate result: " + userSeq);
                checkResult = userSeq > 0;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return checkResult;
    }

    private boolean matchAtLeastOne(HttpServletRequest request) throws ServletException {
        return Arrays.stream(patterns).anyMatch(e -> antPathMatcher.match(e, request.getRequestURI()));
    }
}
