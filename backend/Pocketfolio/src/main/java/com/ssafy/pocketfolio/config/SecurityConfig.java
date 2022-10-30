package com.ssafy.pocketfolio.config;


import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
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

import com.ssafy.pocketfolio.security.filter.ApiCheckFilter;
import com.ssafy.pocketfolio.security.filter.ApiLoginFilter;
import com.ssafy.pocketfolio.security.handler.ApiLoginFailHandler;
import com.ssafy.pocketfolio.security.handler.ClubLoginSuccessHandler;
import com.ssafy.pocketfolio.security.service.UserDetailsService;
import com.ssafy.pocketfolio.security.util.JWTUtil;

@Configuration
@Log4j2
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

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
                    .antMatchers("/", "/css/**", "/images/**", "/js/**", "/login", "/logout", "/api/swagger/**",
                            "/api/users/signup", "/api/users/login", "/api/users/logout").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/rooms/like", "/api/portfolios/room/*").authenticated()
                    .antMatchers(HttpMethod.GET, "/**").permitAll()
                    .anyRequest().authenticated();
//            auth.antMatchers("/sample/member").hasRole("USER");
        });

        http.formLogin(); // 인가 및 인증이 안 되면 로그인 페이지로 이동
        http.csrf().disable(); // CSRF 토큰 발행 X
        http.logout(); // 별도의 설정이 없으면 /logout 시 로그아웃 페이지로 이동
        http.oauth2Login().successHandler(successHandler()); // OAuth 로그인

        http.rememberMe().tokenValiditySeconds(60*60*24*7).userDetailsService(userDetailsService);
        http.addFilterBefore(apiCheckFilter(), UsernamePasswordAuthenticationFilter.class);

        http.addFilterBefore(apiLoginFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    public ApiLoginFilter apiLoginFilter(AuthenticationManager authenticationManager) throws Exception{

        ApiLoginFilter apiLoginFilter =  new ApiLoginFilter("/api/login", jwtUtil());
        apiLoginFilter.setAuthenticationManager(authenticationManager);

        apiLoginFilter
                .setAuthenticationFailureHandler(new ApiLoginFailHandler());

        return apiLoginFilter;
    }



    @Bean
    public JWTUtil jwtUtil() {
        return new JWTUtil();
    }

    @Bean
    public ClubLoginSuccessHandler successHandler() {
        return new ClubLoginSuccessHandler(passwordEncoder());
    }

    @Bean
    public ApiCheckFilter apiCheckFilter() {

        return new ApiCheckFilter("/notes/**/*", jwtUtil());
    }

//    public ApiLoginFilter apiLoginFilter(AuthenticationManager authenticationManager) throws Exception{
//
//        ApiLoginFilter apiLoginFilter =  new ApiLoginFilter("/api/login", jwtUtil());
//        apiLoginFilter.setAuthenticationManager(authenticationManager);
//
//        return apiLoginFilter;
//    }



}
