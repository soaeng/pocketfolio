package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.service.PortfolioServiceImpl;
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
public class PortfolioController {

    private final PortfolioServiceImpl portfolioService;

    @PostMapping
    private ResponseEntity<Long> insertPortfolio(@RequestPart(value="portfolio") PortfolioReq request, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, @RequestPart(value = "files", required = false) List<MultipartFile> files) throws IOException {
        log.info("[POST] Controller - Portfolio");

        // TODO: 회원 정보 받는 방법?
        Long user = 1L;

        // 프론트에서 전달받은 포트폴리오 썸네일 이미지
        // TODO: 확장자 제한 걸기 필요

        // 포트폴리오 저장 후 패당 포트폴리오 번호 반환
        Long response = portfolioService.insertPortfolio(request, thumbnail, user, files);

        if (response != null) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    private ResponseEntity<List<PortfolioRes>> findPortfolioList(HttpServletRequest request){
        log.info("[GET] Controller - findPortfolioList");
//        Long user = (Long) request.getAttribute("userSeq");
        Long userSeq = 1L;
        List<PortfolioRes> response = portfolioService.findPortfolioList(userSeq);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{portSeq}")
    private ResponseEntity<PortfolioRes> findPortfolio(@PathVariable(value = "portSeq") Long portSeq){
        log.info("[GET] Controller - findPortfolio");
        PortfolioRes response = portfolioService.findPortfolio(portSeq);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
