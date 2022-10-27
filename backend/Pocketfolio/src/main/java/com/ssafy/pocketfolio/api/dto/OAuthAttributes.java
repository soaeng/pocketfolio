package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.User;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {
    private Map<String, Object> attributes; // OAuth2 반환하는 유저 정보 Map
    private String nameAttributeKey;
    private String userEmail;
    private String userName;
    private String userProfile;

    @Builder
    public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String userEmail,
                           String userName, String userProfile) {
        this.attributes = attributes;
        this.nameAttributeKey = nameAttributeKey;
        this.userEmail = userEmail;
        this.userName = userName;
        this.userProfile = userProfile;
    }

    public static OAuthAttributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes){
        // 여기서 네이버와 카카오 등 구분 (ofNaver, ofKakao)
        switch (registrationId) {
            case "google":
                return ofGoogle(userNameAttributeName, attributes);
            case "naver":
                return ofNaver(userNameAttributeName, attributes);
            case "kakao":
                return ofKakao(userNameAttributeName, attributes);
        }

        // TODO: Exception 발생
        return null;
    }

    private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {
        return OAuthAttributes.builder()
                .userEmail((String) attributes.get("email"))
                .userName((String) attributes.get("name"))
                .userProfile((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    private static OAuthAttributes ofNaver(String userNameAttributeName, Map<String, Object> attributes) {
        // naver는 response에 유저정보가 있다.
        Map<String, Object> response = (Map<String, Object>)attributes.get("response");

        return OAuthAttributes.builder()
                .userEmail((String) attributes.get("email"))
                .userName((String) attributes.get("name"))
                .userProfile((String) attributes.get("profile_image"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    private static OAuthAttributes ofKakao(String userNameAttributeName, Map<String, Object> attributes) {
        // kakao는 kakao_account에 유저정보가 있다. (email)
        Map<String, Object> kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
        // kakao_account안에 또 profile이라는 JSON객체가 있다. (nickname, profile_image)
        Map<String, Object> kakaoProfile = (Map<String, Object>)kakaoAccount.get("profile");

        return OAuthAttributes.builder()
                .userEmail((String) attributes.get("email"))
                .userName((String) attributes.get("nickname"))
                .userProfile((String) attributes.get("profile_image_url"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    public User toEntity(){
        return User.builder()
                .userEmail(userEmail)
                .userName(userName)
                .userProfile(userProfile)
                .build();
    }

}
