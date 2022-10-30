package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.security.dto.UserAuthDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@Log4j2
@RequestMapping("/sample/")
public class SampleController {

    @GetMapping("/all")
    public void exAll(){
        log.info("exAll..........");
    }

//    @GetMapping("/member")
//    public void exMember(){
//        log.info("exMember..........");
//    }

//    @PreAuthorize("hasRole('ADMIN')")
//    @GetMapping("/admin")
//    public void exAdmin(){
//        log.info("exAdmin..........");
//    }
//
//    @PreAuthorize("hasRole('USER')")
    @GetMapping("/member")
    public void exMember(@AuthenticationPrincipal UserAuthDto userAuthDto){

        log.info("exMember..........");

        log.info("-------------------------------");
        log.info(userAuthDto);

    }
//
//    @PreAuthorize("#clubAuthMember != null && #clubAuthMember.username eq \"user95@zerock.org\"")
//    @GetMapping("/exOnly")
//    public String exMemberOnly(@AuthenticationPrincipal UserAuthDto userAuthDto){
//
//        log.info("exMemberOnly.............");
//        log.info(userAuthDto);
//
//        return "/sample/admin";
//    }

}
