package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.response.LoginRes;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("/users")
public class UserController {
//    @Autowired
//    private UserService userService;

    @GetMapping("/oauth/login")
    public ResponseEntity<LoginRes> login(@RequestParam String accessToken, @RequestParam String refreshToken) {
        LoginRes loginRes = new LoginRes(accessToken, refreshToken);

        log.info("Here is Controller! Here is Controller! Here is Controller!");

        return new ResponseEntity<LoginRes>(loginRes, HttpStatus.OK);
    }
}
