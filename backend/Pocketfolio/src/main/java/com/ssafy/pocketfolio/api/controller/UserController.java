package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.LoginRes;
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
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

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
        } catch (NoSuchElementException e) {
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

    @Operation(summary = "회원 검색", description = "회원 리스트 검색", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = UserRes.class)))
    })
    @GetMapping("/search")
    public ResponseEntity<List<UserRes>> findUserList(@RequestParam String type, @RequestParam String keyword, @RequestParam String sort) {
        log.debug("Controller: findUserList()");
        HttpStatus status; // 12345

        List<UserRes> result = new ArrayList<UserRes>();

        try {
            result = userService.findUserList(type, keyword, sort);
            status = HttpStatus.OK;
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
    @PutMapping
    public ResponseEntity<UserRes> updateUser(@RequestBody UserUpdateReq userUpdateReq, MultipartHttpServletRequest request) {
        log.debug("Controller: updateUser()");
        HttpStatus status;

        UserRes result = new UserRes();

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                MultipartFile multipartFile = request.getFile("file");
                result = userService.updateUser(userSeq, userUpdateReq, multipartFile);
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

    @Operation(summary = "회원가입 (redirect)", description = "여기로 요청하는 게 아니라 \"/api/oauth2/authorization/google\"로 요청해야 함", responses = {
            @ApiResponse(responseCode = "201", description = "회원 정보 수정 성공", content = @Content(schema = @Schema(implementation = LoginRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = LoginRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = LoginRes.class)))
    })
    @GetMapping("/oauth/signup") // redirect from social login
    public ResponseEntity<LoginRes> signUp(@RequestParam String accessToken, @RequestParam String refreshToken) {
        log.info("Controller: signUp() -- redirect --");

        HttpStatus status;
        LoginRes result = new LoginRes();

        try {
            if (accessToken != null && !accessToken.isEmpty() && refreshToken != null && !refreshToken.isEmpty()) {
                result = new LoginRes(accessToken, refreshToken);
                status = HttpStatus.CREATED;
            } else {
                log.error("토큰 발급 실패");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } catch (Exception e) {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "로그인 (redirect)", description = "여기로 요청하는 게 아니라 \"/api/oauth2/authorization/google\"로 요청해야 함", responses = {
            @ApiResponse(responseCode = "201", description = "회원 정보 수정 성공", content = @Content(schema = @Schema(implementation = LoginRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = LoginRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = LoginRes.class)))
    })
    @GetMapping("/oauth/login") // redirect from social login
    public ResponseEntity<LoginRes> login(@RequestParam String accessToken, @RequestParam String refreshToken) {
        log.info("Controller: login() -- redirect --");

        HttpStatus status;
        LoginRes result = new LoginRes();

        try {
            if (accessToken != null && !accessToken.isEmpty() && refreshToken != null && !refreshToken.isEmpty()) {
                result = new LoginRes(accessToken, refreshToken);
                status = HttpStatus.CREATED;
            } else {
                log.error("토큰 발급 실패");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } catch (Exception e) {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "로그아웃", description = "로그아웃", responses = {
            @ApiResponse(responseCode = "201", description = "회원 정보 수정 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Boolean.class)))
    })
    @PatchMapping("/logout")
    public ResponseEntity<Boolean> logout(HttpServletRequest request) {
        log.info("Controller: logout()");
        HttpStatus status = HttpStatus.CREATED;

        boolean result = true;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                userService.logout(userSeq);
//                result = true;
                status = HttpStatus.CREATED;
            } else {
//                log.error("사용 불가능 토큰");
//                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

}
