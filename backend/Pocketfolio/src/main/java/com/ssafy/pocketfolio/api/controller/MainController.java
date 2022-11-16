package com.ssafy.pocketfolio.api.controller;

import com.nimbusds.oauth2.sdk.ErrorResponse;
import com.ssafy.pocketfolio.api.service.PortfolioService;
import com.ssafy.pocketfolio.api.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
@Tag(name = "MainController", description = "메인 API")
public class MainController {

    private final RoomService roomService;
    private final PortfolioService portfolioService;

    @Operation(summary = "메인 페이지", description = "대표룸, 전체 포트폴리오 목록, 검색, 좋아요 랜덤 포켓, 팔로우 랜덤 포켓, 카테고리별 추천", responses = {
            @ApiResponse(responseCode = "200", description = "메인 정보 조회 성공", content = @Content(schema = @Schema(implementation = Map.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping
    public ResponseEntity<Map<String, Object>> getMain(HttpServletRequest request) {
        log.debug("[GET] Controller - getMain");
        Map<String, Object> response = new HashMap<>();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try {
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                // 로그인 한 상태면
                // 대표룸, 전체 포트폴리오 목록, 검색, 좋아요 랜덤 포켓, 팔로우 랜덤 포켓, 카테고리별 추천
                // 대표룸
                response.put("mainRoom", roomService.findMainRoom(userSeq));
                // 전체 포트폴리오 목록
                response.put("portfolios", portfolioService.findPortfolioList(userSeq));
                // 좋아요 랜덤 포켓
                response.put("likePocket", roomService.findMainRandomRoom(userSeq, "like"));
                // 팔로우 랜덤 포켓
                response.put("followPocket", roomService.findMainRandomRoom(userSeq, "follow"));

            } else {
                // 토큰이 잘못 된 상태거나 토큰이 없으면 게스로 처리
                // 랜딩에 있는 마이룸, 검색, 카테고리별 추천
//                response = roomService.getGuestMain();
            }
            // 카테고리 추천
            response.put("categoryRec", roomService.findCategoryRecList(userSeq));

            status = HttpStatus.OK;
        } catch (NotFoundException e) {
            log.error(e.getMessage());
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return new ResponseEntity<>(response, status);
    }
}
