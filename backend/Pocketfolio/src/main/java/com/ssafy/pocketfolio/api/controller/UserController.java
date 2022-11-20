package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.api.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@Log4j2
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Tag(name = "UserController", description = "유저 API")
public class UserController {
    private final UserService userService;

    @Operation(summary = "회원 정보 조회", description = "토큰을 이용하여 회원 정보 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = UserRes.class)))
    })
    @GetMapping("/profile/{userSeq}")
    public ResponseEntity<UserRes> findUser(@PathVariable long userSeq) {
        log.debug("Controller: findUser()");
        HttpStatus status;

        UserRes result = new UserRes();

        try {
            result = userService.findUser(userSeq);
            status = HttpStatus.OK;
        } catch (IllegalArgumentException e) {
            log.error("검색하려는 userSeq(" + userSeq + ") 없음");
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "본인 회원 정보 조회", description = "토큰을 이용하여 본인 회원 정보 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = UserRes.class)))
    })
    @GetMapping("/profile")
    public ResponseEntity<UserRes> findUserMe(HttpServletRequest request) {
        log.debug("Controller: findUserMe()");
        HttpStatus status;

        UserRes result = new UserRes();

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
//            log.debug("userSeq: " + userSeq);
            if (userSeq > 0) {
                result = userService.findUser(userSeq);
                status = HttpStatus.OK;
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

    @Operation(summary = "회원 정보 수정", description = "토큰을 이용하여 본인 정보 수정", responses = {
            @ApiResponse(responseCode = "201", description = "회원 정보 수정 성공", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = UserRes.class)))
    })
    @PatchMapping
    public ResponseEntity<UserRes> updateUser(@RequestPart(value = "user") UserUpdateReq userUpdateReq,
                                              @RequestPart(value = "profilePic", required = false) MultipartFile profilePic,
                                              HttpServletRequest request) {
        log.debug("Controller: updateUser()");
        HttpStatus status;

        UserRes result = new UserRes();

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                result = userService.updateUser(userSeq, userUpdateReq, profilePic);
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

    @Operation(summary = "회원 탈퇴", description = "토큰을 이용하여 회원 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "회원 삭제 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Boolean.class)))
    })
    @DeleteMapping
    public ResponseEntity<Boolean> deleteUser(HttpServletRequest request) {
        log.debug("Controller: deleteUser()");
        HttpStatus status;

        boolean result = false;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                userService.deleteUser(userSeq);
                result = true;
                status = HttpStatus.OK;
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

    @Operation(summary = "토큰 재발급", description = "리프레쉬 토큰을 이용하여 액세스 토큰 재발급", responses = {
            @ApiResponse(responseCode = "200", description = "재발급 성공", content = @Content(schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 리프레쉬 토큰 (액세스 토큰 재발급 불가능)", content = @Content(schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = String.class)))
    })
    @GetMapping("/refresh")
    public ResponseEntity<String> refreshToken(HttpServletRequest request) {
        log.debug("Controller: refreshToken()");
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        String newAccessToken = null;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                String refreshToken = (String) request.getAttribute("refreshToken");
                if (userService.isSameRefreshToken(userSeq, refreshToken)) {
                    newAccessToken = (String) request.getAttribute("accessToken");
                    if (newAccessToken != null) {
                        status = HttpStatus.OK;
                    } else {
                        log.error("액세스 토큰 재생성 실패");
                    }
                } else {
                    log.error("리프레쉬 토큰 불일치: 액세스 토큰 재발급 불가능");
                    status = HttpStatus.FORBIDDEN;
                }
            } else {
                log.error("사용 불가능 리프레쉬 토큰: 액세스 토큰 재발급 불가능");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(newAccessToken, status);
    }

//    @Operation(summary = "로그아웃", description = "로그아웃", responses = {
//            @ApiResponse(responseCode = "201", description = "회원 정보 수정 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
//            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Boolean.class))),
//            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Boolean.class)))
//    })
//    @PatchMapping("/logout")
//    public ResponseEntity<Boolean> logout(HttpServletRequest request) {
//        log.info("Controller: logout()");
//        HttpStatus status;
//
//        boolean result = false;
//
//        try {
//            long userSeq = (Long) request.getAttribute("userSeq");
//            if (userSeq > 0) {
//                userService.logout(userSeq);
//                result = true;
//                status = HttpStatus.CREATED;
//            } else {
//                log.error("사용 불가능 토큰");
//                status = HttpStatus.FORBIDDEN;
//            }
//        } catch (Exception e) {
//            log.error(e.getMessage());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
//        }
//        return new ResponseEntity<>(result, status);
//    }

}
