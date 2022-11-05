package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.service.PortfolioServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/portfolios")
@RequiredArgsConstructor
@Tag(name = "PortfolioController", description = "포트폴리오 API")
public class PortfolioController {

    private final PortfolioServiceImpl portfolioService;

    @PostMapping
    private ResponseEntity<Long> insertPortfolio(HttpServletRequest request, @RequestPart(value="portfolio") PortfolioReq portfolio, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, @RequestPart(value = "files", required = false) List<MultipartFile> files) throws IOException {
        log.debug("[POST] Controller - Portfolio");
        long userSeq = (Long) request.getAttribute("userSeq");
        // 포트폴리오 저장 후 해당 포트폴리오 번호 반환
        Long response = portfolioService.insertPortfolio(portfolio, thumbnail, userSeq, files);

        if (response != -1) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    private ResponseEntity<List<PortfolioRes>> findPortfolioList(HttpServletRequest request){
        log.debug("[GET] Controller - findPortfolioList");
        long userSeq = (Long) request.getAttribute("userSeq");
        List<PortfolioRes> response = portfolioService.findPortfolioList(userSeq);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{portSeq}")
    private ResponseEntity<PortfolioRes> findPortfolio(@PathVariable(value = "portSeq") long portSeq){
        log.debug("[GET] Controller - findPortfolio");
        PortfolioRes response = portfolioService.findPortfolio(portSeq);
        // TODO: pagenation으로 할 수도 있어서 일단 전체 개수 따로 반환하지 않음.
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{portSeq}")
    private ResponseEntity<Long> updatePortfolio(@PathVariable(value="portSeq") long portSeq, @RequestPart(value="portfolio") PortfolioReq request, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, @RequestPart(value = "files", required = false) List<MultipartFile> files) throws IOException {
        log.debug("[PATCH] Controller - Portfolio");
        // 포트폴리오 저장 후 해당 포트폴리오 번호 반환
        Long response = portfolioService.updatePortfolio(portSeq, request, thumbnail, files);

        if (response != -1) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{portSeq}")
    private ResponseEntity<Boolean> deletePortfolio(@PathVariable(value="portSeq") long portSeq) {
        log.debug("[DELETE] Controller - Portfolio");
        try {
            portfolioService.deletePortfolio(portSeq);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        }
        catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
