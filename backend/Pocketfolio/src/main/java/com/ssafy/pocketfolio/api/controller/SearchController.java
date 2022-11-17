package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.response.SearchRes;
import com.ssafy.pocketfolio.api.service.SearchService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Log4j2
@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
@Tag(name = "SearchController", description = "검색 API")
public class SearchController {
    private final SearchService searchService;

    @Operation(summary = "포켓 검색", description = "포켓 검색", responses = {
            @ApiResponse(responseCode = "200", description = "포켓 검색 성공", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = SearchRes.class)))
    })
    @GetMapping("/room")
    public ResponseEntity<SearchRes> searchRoom(@RequestParam("search") String keyword, @RequestParam Integer sort,
                                                @RequestParam("category") Long categorySeqBinary, @RequestParam Integer size,
                                                @RequestParam Integer page, HttpServletRequest request) {
        log.debug("Controller: searchRoom()");
        HttpStatus status;

        SearchRes result = null;

        try {
            Long myUserSeq = (Long) request.getAttribute("userSeq");

            result = searchService.searchRoom(myUserSeq, keyword, sort, categorySeqBinary, size, page);
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "포트폴리오 검색", description = "포트폴리오 검색", responses = {
            @ApiResponse(responseCode = "200", description = "포트폴리오 검색 성공", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = SearchRes.class)))
    })
    @GetMapping("/portfolio")
    public ResponseEntity<SearchRes> searchPortfolio(@RequestParam("search") String keyword, @RequestParam Integer sort,
                                                @RequestParam Integer size, @RequestParam Integer page, HttpServletRequest request) {
        log.debug("Controller: searchPortfolio()");
        HttpStatus status;

        SearchRes result = null;

        try {
            result = searchService.searchPortfolio(keyword, sort, size, page);
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "유저 검색", description = "유저 검색", responses = {
            @ApiResponse(responseCode = "200", description = "유저 검색 성공", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = SearchRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = SearchRes.class)))
    })
    @GetMapping("/user")
    public ResponseEntity<SearchRes> searchUser(@RequestParam("search") String keyword, @RequestParam Integer sort,
                                                @RequestParam Integer size, @RequestParam Integer page, HttpServletRequest request) {
        log.debug("Controller: searchUser()");
        HttpStatus status;

        SearchRes result = null;

        try {
            Long myUserSeq = (Long) request.getAttribute("userSeq");

            result = searchService.searchUser(myUserSeq, keyword, sort, size, page);
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

}
