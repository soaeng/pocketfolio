package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.db.repository.FollowRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final UserRepository userRepository;

    private final FollowRepository followRepository;





}
