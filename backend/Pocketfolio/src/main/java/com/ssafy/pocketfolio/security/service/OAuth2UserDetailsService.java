package com.ssafy.pocketfolio.security.service;

import com.ssafy.pocketfolio.db.entity.Oauth;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.OauthRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import com.ssafy.pocketfolio.security.dto.UserAuthDto;

import java.util.*;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor
public class OAuth2UserDetailsService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    private final OauthRepository oauthRepository;

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
//        ClubMember member = saveSocialMember(email); //조금 뒤에 사용
//
//        return oAuth2User;
        User user = saveSocialMember(email, name, clientName, userNameAttributeName); // 1234

        ArrayList<Integer> arr = new ArrayList<>(); // 이것도 나중에 수정
        arr.add(1);

        UserAuthDto userAuthDto = new UserAuthDto(
                user.getUserName(),
                user.getUserEmail(),
                arr.stream().map(
                                role -> new SimpleGrantedAuthority("ROLE_USER"))
                        .collect(Collectors.toList()),
                oAuth2User.getAttributes()
        );
//        userAuthDto.setName(user.getUserName());

        return userAuthDto;
    }


    private User saveSocialMember(String email, String name, String from, String key) { // 12345 여기서 처리

        //기존에 동일한 이메일로 가입한 회원이 있는 경우에는 그대로 조회만
        Optional<User> result = userRepository.findByUserEmail(email);

        if (result.isPresent()) {
            User user = result.get();
            Optional<Oauth> oauthResult = oauthRepository.findByUser_UserSeqAndOauthFrom(user.getUserSeq(), from);
            if (!oauthResult.isPresent()) {
                Oauth oauth = Oauth.builder()
//                        .oauthKey(UUID.randomUUID().toString()) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                        .oauthKey(key) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                        .oauthFrom(from)
                        .user(user)
                        .build();
                oauthRepository.save(oauth);
            }

            return result.get();
        }

        if (name == null || name.isEmpty()) {
            name = email.substring(0, email.indexOf("@"));
        }

        //없다면 회원 추가 패스워드는 1111 이름은 그냥 이메일 주소로
        User user = User.builder()
                .userEmail(email)
                .userName(name)
                .build();

        userRepository.save(user);

        Oauth oauth = Oauth.builder()
//                .oauthKey(UUID.randomUUID().toString()) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                .oauthKey(key) // 이거 나중에 key 뭐 받을 지 결정되면 수정
                .oauthFrom(from)
                .user(user)
                .build();
        oauthRepository.save(oauth);

        return user;
    }

}
