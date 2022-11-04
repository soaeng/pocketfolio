package com.ssafy.pocketfolio.config;


import com.ssafy.pocketfolio.security.filter.ApiCheckFilter;
import com.ssafy.pocketfolio.security.handler.CustomLogoutSuccessHandler;
import com.ssafy.pocketfolio.security.handler.LoginSuccessHandler;
import com.ssafy.pocketfolio.security.service.OAuthService;
import com.ssafy.pocketfolio.security.service.UserDetailsServiceImpl;
import com.ssafy.pocketfolio.security.util.JWTUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@Log4j2
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private OAuthService oAuthService;

    @Value("${server.servlet.context-path:''}")
    private String contextPath;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //AuthenticationManager설정
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
        // Get AuthenticationManager
        AuthenticationManager authenticationManager = authenticationManagerBuilder.build();

        //반드시 필요
        http.authenticationManager(authenticationManager);

        // 패턴 등록
        http.authorizeHttpRequests((auth) -> {
            auth
                    .antMatchers("/", "/css/**", "/images/**", "/js/**", "/login", "/logout", "/swagger",
                            "/swagger/**", "/swagger-ui/**", "/users/signup", "/users/login", "/users/logout").permitAll()
                    .antMatchers(HttpMethod.GET, "/rooms/like", "/portfolios/room/*", "/users/profile").authenticated()
                    .antMatchers(HttpMethod.GET, "/**").permitAll()
                    .anyRequest().authenticated();
//            auth.antMatchers("/sample/member").hasRole("USER");
        });

//        http.formLogin(); // 인가 및 인증이 안 되면 로그인 페이지로 이동
        http.csrf().disable(); // CSRF 토큰 발행 X
//        http.oauth2Login(); // OAuth 로그인
        http.oauth2Login().successHandler(successHandler()); // OAuth 로그인 후 redirect 이동
        http.logout().logoutUrl("/oauth/logout").logoutSuccessHandler(logoutSuccessHandler());

//        http.rememberMe().tokenValiditySeconds(60*60*24*7).userDetailsService(userDetailsService);
        http.addFilterBefore(apiCheckFilter(), UsernamePasswordAuthenticationFilter.class);
//        http.cors();

//        http.addFilterBefore(apiLoginFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

//    public ApiLoginFilter apiLoginFilter(AuthenticationManager authenticationManager) throws Exception {
//
//        ApiLoginFilter apiLoginFilter =  new ApiLoginFilter("/users/login", jwtUtil());
//        apiLoginFilter.setAuthenticationManager(authenticationManager);
//
//        apiLoginFilter
//                .setAuthenticationFailureHandler(new ApiLoginFailHandler());
//
//        return apiLoginFilter;
//    }


    @Bean
    public JWTUtil jwtUtil() {
        return new JWTUtil();
    }

    @Bean
    public LoginSuccessHandler successHandler() {
        return new LoginSuccessHandler(passwordEncoder(), jwtUtil(), oAuthService);
    }

    @Bean
    public CustomLogoutSuccessHandler logoutSuccessHandler() {
        return new CustomLogoutSuccessHandler(jwtUtil(), oAuthService);
    }

    @Bean
    public ApiCheckFilter apiCheckFilter() {
        String[] patterns = {contextPath + "/rooms/like", contextPath + "/portfolios/room/*", contextPath + "/users/profile"};
        // GET일 때도 토큰이 있어야 하는 녀석들

        String[] postForGuestPatterns = {contextPath + "/users/logout"};
        // POST일 때도 토큰이 필요 없는 녀석들

        return new ApiCheckFilter(patterns, postForGuestPatterns, jwtUtil()); // ! patterns 더 추가할지 말지 봐야 함
    }

//    public ApiLoginFilter apiLoginFilter(AuthenticationManager authenticationManager) throws Exception{
//
//        ApiLoginFilter apiLoginFilter =  new ApiLoginFilter("/api/login", jwtUtil());
//        apiLoginFilter.setAuthenticationManager(authenticationManager);
//
//        return apiLoginFilter;
//    }

}
