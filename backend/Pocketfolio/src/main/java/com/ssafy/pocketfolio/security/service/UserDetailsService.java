package com.ssafy.pocketfolio.security.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.security.dto.UserAuthDto;

import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.info("ClubUserDetailsService loadUserByUsername " + username);


        Optional<User> result = userRepository.findByUserEmail(username);

        if(result.isEmpty()){
            throw new UsernameNotFoundException("Check User Email or from Social ");
        }

        User user = result.get();

        log.info("-----------------------------");
        log.info(user);

        ArrayList<Integer> arr = new ArrayList<>(); // 이것도 나중에 수정
        arr.add(1);

        UserAuthDto userAuthDto = new UserAuthDto(
                user.getUserName(),
                user.getUserEmail(),
                arr.stream().map(
                                role -> new SimpleGrantedAuthority("ROLE_USER"))
                        .collect(Collectors.toList())
        );

//        userAuthDto.setName(user.getUserName());

        return userAuthDto;
    }
}
