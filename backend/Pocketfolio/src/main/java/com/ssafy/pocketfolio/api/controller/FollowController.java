package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("/follows")
@RequiredArgsConstructor
@Tag(name = "FollowController", description = "팔로우 API")
public class FollowController {
    private final UserService userService;



}
