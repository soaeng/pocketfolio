package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.service.PortfolioServiceImpl;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("/portfolios")
@RequiredArgsConstructor
public class PortfolioController {

    private final PortfolioServiceImpl portfolioService;

    @PostMapping("/")
    private ResponseEntity<Long> insertPortfolio(PortfolioReq request, MultipartHttpServletRequest multiRequest) {

        Long user = (Long) multiRequest.getAttribute("userSeq");
        List<MultipartFile> files = multiRequest.getFiles("files");
        Long response = portfolioService.insertPortfolio(request, user, files);

        if (response != null) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    private ResponseEntity<List<PortfolioRes>> findPortfolioList(HttpServletRequest request){
        Long user = (Long) request.getAttribute("userSeq");
        List<PortfolioRes> response = portfolioService.findPortfolioList(user);
        if (response != null) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
