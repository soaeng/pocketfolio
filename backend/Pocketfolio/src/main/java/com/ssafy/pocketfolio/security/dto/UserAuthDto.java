package com.ssafy.pocketfolio.security.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Map;

@Log4j2
@Getter
@Setter
@ToString
public class UserAuthDto extends User  implements OAuth2User {

    private String email;

    private String password;

    private String name;

    private Map<String, Object> attr;

    public UserAuthDto(String userName, String userEmail, Collection<? extends GrantedAuthority> authorities, Map<String, Object> attr) {
        this(userName, userEmail, authorities);
        this.attr = attr;
    }

    public UserAuthDto(String userName, String userEmail, Collection<? extends GrantedAuthority> authorities) {
        super(userName, "1111", authorities);
        this.email = userEmail;
        this.password = "1111";

    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.attr;
    }

}
