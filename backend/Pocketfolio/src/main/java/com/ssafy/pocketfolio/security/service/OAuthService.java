package com.ssafy.pocketfolio.security.service;

public interface OAuthService {

    void updateRefreshToken(long userSeq, String refreshToken);
    void deleteRefreshToken(long userSeq);
}
