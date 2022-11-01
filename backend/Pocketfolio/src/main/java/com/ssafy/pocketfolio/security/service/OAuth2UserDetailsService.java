package com.ssafy.pocketfolio.security.service;

import com.ssafy.pocketfolio.db.entity.Oauth;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.OauthRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.security.dto.UserAuthDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Log4j2
@Service
@RequiredArgsConstructor
public class OAuth2UserDetailsService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    private final OauthRepository oauthRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        log.info("--------------------------------------");
        log.info("userRequest:" + userRequest);

        String clientName = userRequest.getClientRegistration().getClientName(); // getRegistrationId()

        log.info("clientName: " + clientName);
        log.info(userRequest.getAdditionalParameters());

        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint()
                .getUserNameAttributeName();
        log.info("userNameAttributeName: " + userNameAttributeName);

        OAuth2User oAuth2User =  super.loadUser(userRequest);

        log.info("==============================");
        oAuth2User.getAttributes().forEach((k,v) -> {
            log.info(k +":" + v);
        });

        String email = null;
        String name = null;
        String key = (String) oAuth2User.getAttributes().get(userNameAttributeName);

        if (clientName.equals("Google")) {
            email = oAuth2User.getAttribute("email");
            name = oAuth2User.getAttribute("name");
        } else if (clientName.equals("Naver")) {
            email = oAuth2User.getAttribute("email");
            name = oAuth2User.getAttribute("name");
        } else if (clientName.equals("Kakao")) {
            email = oAuth2User.getAttribute("email");
            name = oAuth2User.getAttribute("nickname");
        } else if (clientName.equals("Facebook")) {

        } else if (clientName.equals("Github")) {

        }

        log.info("EMAIL: " + email);
        log.info("NAME: " + name);
        log.info("key: " + key);

        User user;
        Optional<User> result = userRepository.findByEmail(email);

        if (!result.isPresent()) {
            // 회원 가입
            user = saveSocialUser(email, name);
            saveSocialOAuth(user, clientName, key);
        } else {
            // 기존 회원 로그인
            user = result.get();
            if (!oauthRepository.findByUser_UserSeqAndFrom(user.getUserSeq(), clientName).isPresent()) {
                // 기존 회원의 다른 소셜 로그인과 연동
                // key가 고유한 값인지 확인되면 findByKey로 검색하면 됨
                saveSocialOAuth(user, clientName, key);
            }
        }

        Set<GrantedAuthority> roleSet = new HashSet<>();
        roleSet.add(new SimpleGrantedAuthority("ROLE_USER"));

        UserAuthDto userAuthDto = new UserAuthDto(
                Long.toString(user.getUserSeq()),
                passwordEncoder.encode("1111"),
                roleSet,
                oAuth2User.getAttributes(),
                clientName.toLowerCase()
        );

        userAuthDto.setEmail(user.getEmail());
        userAuthDto.setName(user.getName());

        return userAuthDto;
    }

    private User saveSocialUser(String email, String name) {
        if (name == null || name.isEmpty()) {
            name = email.substring(0, email.indexOf("@"));
        }

        User user = User.builder()
                .email(email)
                .name(name)
                .build();

        userRepository.save(user);
        return user;
    }

    private void saveSocialOAuth(User user, String from, String key) {
        Oauth oauth = Oauth.builder()
//                .oauthKey(UUID.randomUUID().toString()) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                .key(key) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                .from(from)
                .user(user)
                .build();
        oauthRepository.save(oauth);
    }

}
