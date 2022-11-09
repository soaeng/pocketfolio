package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.service.FollowService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Log4j2
@RestController
@RequestMapping("/follows")
@RequiredArgsConstructor
@Tag(name = "FollowController", description = "팔로우 API")
public class FollowController {
    private final FollowService followService;

    @Operation(summary = "팔로우", description = "유저 팔로우 (토큰에 헤더 싣고, 상대방은 userSeq로 / 새로 추가된 팔로우 번호 return)", responses = {
            @ApiResponse(responseCode = "201", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Long.class)))
    })
    @GetMapping("/{userSeq}")
    public ResponseEntity<Long> insertFollow(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: insertFollow()");
        HttpStatus status;

        Long result = -1L;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            log.debug("myUserSeq: " + myUserSeq);
            if (myUserSeq > 0) {
                result = followService.insertFollow(myUserSeq, userSeq);
                status = HttpStatus.CREATED;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

//    @Operation(summary = "본인 회원 정보 조회", description = "토큰을 이용하여 본인 회원 정보 조회", responses = {
//            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = UserRes.class))),
//            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
//            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = UserRes.class))),
//            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = UserRes.class)))
//    })
//    @GetMapping("/profile")
//    public ResponseEntity<UserRes> findUserMe(HttpServletRequest request) {
//        log.debug("Controller: findUserMe()");
//        HttpStatus status;
//
//        UserRes result = new UserRes();
//
//        try {
//            long userSeq = (Long) request.getAttribute("userSeq");
//            log.debug("userSeq: " + userSeq);
//            if (userSeq > 0) {
//                result = userService.findUser(userSeq);
//                status = HttpStatus.OK;
//            } else {
//                log.error("사용 불가능 토큰");
//                status = HttpStatus.FORBIDDEN;
//            }
//        } catch (Exception e) {
//            log.error(e.getMessage());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
//        }
//
//        return new ResponseEntity<>(result, status);
//    }

}
