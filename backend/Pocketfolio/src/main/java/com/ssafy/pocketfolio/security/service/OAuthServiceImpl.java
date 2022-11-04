package com.ssafy.pocketfolio.security.service;

import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OAuthServiceImpl implements OAuthService {
    private final UserRepository userRepository;

    @Override
    @Transactional
    public void updateRefreshToken(long userSeq, String refreshToken) {
        User user = userRepository.findById(userSeq).get();
        user.updateToken(refreshToken);
    }

    @Override
    @Transactional
    public void deleteRefreshToken(long userSeq) {
        User user = userRepository.findById(userSeq).get();
        user.updateToken(null);
    }
}
