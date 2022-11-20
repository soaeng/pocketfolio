package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.response.FollowListRes;
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
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Log4j2
@RestController
@RequestMapping("/follows")
@RequiredArgsConstructor
@Tag(name = "FollowController", description = "팔로우 API")
public class FollowController {
    private final FollowService followService;

    @Operation(summary = "팔로우", description = "유저 팔로우 (토큰에 헤더 싣고, 상대방은 userSeq로 / 새로 추가된 팔로우 번호 return)", responses = {
            @ApiResponse(responseCode = "201", description = "팔로우 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Long.class)))
    })
    @PostMapping("/{userSeq}")
    public ResponseEntity<Long> insertFollow(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: insertFollow()");
        HttpStatus status;

        Long result = -1L;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            if (myUserSeq > 0) {
                result = followService.insertFollow(myUserSeq, userSeq);
                status = HttpStatus.CREATED;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (IllegalArgumentException | EntityNotFoundException e) {
            log.error("팔로우하려는 userSeq(" + userSeq + ") 없음");
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "팔로우 취소 (팔로우 번호)", description = "백에서 넘겨준 팔로우 번호를 통해 그 번호로 팔로우 취소 요청", responses = {
            @ApiResponse(responseCode = "200", description = "팔로우 취소 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Boolean.class)))
    })
    @DeleteMapping("/{followSeq}")
    public ResponseEntity<Boolean> deleteFollow(@PathVariable long followSeq, HttpServletRequest request) {
        log.debug("Controller: deleteFollow()");
        HttpStatus status;

        boolean result = false;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                followService.deleteFollow(followSeq);
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

    @Operation(summary = "팔로우 취소 (유저 번호)", description = "유저 번호를 통해 팔로우 취소 요청", responses = {
            @ApiResponse(responseCode = "200", description = "팔로우 취소 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Boolean.class)))
    })
    @DeleteMapping("/user/{userSeq}")
    public ResponseEntity<Boolean> deleteFollowByUserSeq(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: deleteFollowByUserSeq()");
        HttpStatus status;

        boolean result = false;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            if (myUserSeq > 0) {
                followService.deleteFollowByUserSeq(myUserSeq, userSeq);
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

    @Operation(summary = "팔로우 번호 찾기", description = "유저 번호를 통해 상대방 팔로우 번호 요청 / 팔로우 안 됐을 경우 0 return", responses = {
            @ApiResponse(responseCode = "200", description = "팔로우 번호 조회 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Long.class)))
    })
    @GetMapping("/seq/{userSeq}")
    public ResponseEntity<Long> findFollowSeq(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: findFollowSeq()");
        HttpStatus status;

        Long result = -1L;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            if (myUserSeq > 0) {
                result = followService.findFollowSeq(myUserSeq, userSeq);
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

    @Operation(summary = "본인 팔로워 리스트 조회", description = "본인 팔로워 리스트 조회", responses = {
            @ApiResponse(responseCode = "200", description = "팔로워 리스트 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping("/follower")
    public ResponseEntity<List<FollowListRes>> findMyFollowerList(HttpServletRequest request) {
        log.debug("Controller: findMyFollowerList()");
        HttpStatus status;

        List<FollowListRes> result = null;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                result = followService.findFollowerList(userSeq, userSeq);
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

    @Operation(summary = "본인 팔로잉 리스트 조회", description = "본인 팔로잉 리스트 조회", responses = {
            @ApiResponse(responseCode = "200", description = "팔로잉 리스트 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping("/following")
    public ResponseEntity<List<FollowListRes>> findMyFollowingList(HttpServletRequest request) {
        log.debug("Controller: findMyFollowingList()");
        HttpStatus status;

        List<FollowListRes> result = null;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                result = followService.findFollowingList(userSeq, userSeq);
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

    @Operation(summary = "특정 유저 팔로워 리스트 조회", description = "특정 유저 팔로워 리스트 조회", responses = {
            @ApiResponse(responseCode = "200", description = "팔로워 리스트 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping("/follower/{userSeq}")
    public ResponseEntity<List<FollowListRes>> findFollowerList(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: findFollowerList()");
        HttpStatus status;

        List<FollowListRes> result = null;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            if (myUserSeq > 0) { // 게스트는 다른 사람 팔로우 목록 관람 불가
                result = followService.findFollowerList(myUserSeq, userSeq);
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

    @Operation(summary = "특정 유저 팔로잉 리스트 조회", description = "특정 유저 팔로잉 리스트 조회", responses = {
            @ApiResponse(responseCode = "200", description = "팔로워 리스트 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping("/following/{userSeq}")
    public ResponseEntity<List<FollowListRes>> findFollowingList(@PathVariable long userSeq, HttpServletRequest request) {
        log.debug("Controller: findFollowingList()");
        HttpStatus status;

        List<FollowListRes> result = null;

        try {
            long myUserSeq = (Long) request.getAttribute("userSeq");
            if (myUserSeq > 0) { // 게스트는 다른 사람 팔로우 목록 관람 불가
                result = followService.findFollowingList(myUserSeq, userSeq);
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

}
