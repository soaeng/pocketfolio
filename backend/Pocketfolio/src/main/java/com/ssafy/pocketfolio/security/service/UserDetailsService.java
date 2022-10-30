package com.ssafy.pocketfolio.security.service;

import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.security.dto.UserAuthDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("UserDetailsService loadUserByUsername " + username);


        Optional<User> result = userRepository.findByEmail(username);

        if(result.isEmpty()){
            throw new UsernameNotFoundException("Check User Email or from Social ");
        }

        User user = result.get();

        log.info("-----------------------------");
        log.info(user);

        Set<GrantedAuthority> roleSet = new HashSet<>();
        roleSet.add(new SimpleGrantedAuthority("ROLE_USER"));

        UserAuthDto userAuthDto = new UserAuthDto(
                Long.toString(user.getUserSeq()),
                roleSet

//                user.getUserRoleSet().stream()
//                        .map(role -> new SimpleGrantedAuthority("ROLE_"+role.name()))
//                        .collect(Collectors.toSet())
        );

        userAuthDto.setEmail(user.getEmail());
        userAuthDto.setName(user.getName());

        return userAuthDto;
    }
}
