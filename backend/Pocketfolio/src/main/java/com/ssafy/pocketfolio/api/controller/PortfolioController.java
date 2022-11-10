package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioListRes;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.api.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/portfolios")
@RequiredArgsConstructor
@Tag(name = "PortfolioController", description = "포트폴리오 API")
public class PortfolioController {

    private final PortfolioService portfolioService;

    @Operation(summary = "포트폴리오 등록", description = "포트폴리오 등록 시 포트폴리오 정보는 application/json 형식, thumbnail은 이미지 파일, files은 첨부파일(다중 첨부 가능)", responses = {
            @ApiResponse(responseCode = "201", description = "포트폴리오 등록 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PostMapping
    private ResponseEntity<Long> insertPortfolio(HttpServletRequest request, @RequestPart(value="portfolio") PortfolioReq portfolio, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, @RequestPart(value = "files", required = false) List<MultipartFile> files) {
        log.debug("[POST] Controller - Portfolio");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = portfolioService.insertPortfolio(portfolio, thumbnail, userSeq, files);
                status = (response > 0) ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "내 포트폴리오 목록", description = "내 포트폴리오 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "포트폴리오 목록 조회 성공", content = @Content(schema = @Schema(implementation = PortfolioRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping
    private ResponseEntity<List<PortfolioListRes>> findPortfolioList(HttpServletRequest request){
        log.debug("[GET] Controller - findPortfolioList");
        List<PortfolioListRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = portfolioService.findPortfolioList(userSeq);
                status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "포트폴리오 상세 조회", description = "포트폴리오 상세 조회", responses = {
            @ApiResponse(responseCode = "200", description = "포트폴리오 목록 조회 성공", content = @Content(schema = @Schema(implementation = PortfolioRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/{portSeq}")
    private ResponseEntity<PortfolioRes> findPortfolio(@PathVariable(value = "portSeq") long portSeq){
        log.debug("[GET] Controller - findPortfolio");
        PortfolioRes response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try {
            response = portfolioService.findPortfolio(portSeq);
            status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return new ResponseEntity<>(response, status);
    }
    
    @Operation(summary = "포트폴리오 수정", description = "포트폴리오 수정", responses = {
            @ApiResponse(responseCode = "201", description = "포트폴리오 수정 성공 후 수정된 포트폴리오 번호 반환", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PatchMapping("/{portSeq}")
    private ResponseEntity<Long> updatePortfolio(@PathVariable(value="portSeq") long portSeq, @RequestPart(value="portfolio") PortfolioReq portfolio, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, @RequestPart(value = "files", required = false) List<MultipartFile> files, HttpServletRequest request) {
        log.debug("[PATCH] Controller - Portfolio");
        // 포트폴리오 저장 후 해당 포트폴리오 번호 반환
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        long userSeq = (Long) request.getAttribute("userSeq");

        try {
            if (userSeq > 0) {
                response = portfolioService.updatePortfolio(userSeq, portSeq, portfolio, thumbnail, files);
                status = response != null ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "포트폴리오 삭제", description = "포트폴리오 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "포트폴리오 삭제 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @DeleteMapping("/{portSeq}")
    private ResponseEntity<Boolean> deletePortfolio(@PathVariable(value="portSeq") long portSeq, HttpServletRequest request) {
        log.debug("[DELETE] Controller - Portfolio");
        Boolean response = false;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        long userSeq = (Long) request.getAttribute("userSeq");

        try {
            if (userSeq > 0) {
                response = portfolioService.deletePortfolio(userSeq, portSeq);
                status = response ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }
}
