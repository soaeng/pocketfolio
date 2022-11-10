package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioListRes;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import com.ssafy.pocketfolio.db.entity.Tag;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.PortfolioRepository;
import com.ssafy.pocketfolio.db.repository.PortfolioUrlRepository;
import com.ssafy.pocketfolio.db.repository.TagRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PortfolioServiceImpl implements PortfolioService {

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;
    private final PortfolioUrlRepository portfolioUrlRepository;
    private final TagRepository tagRepository;
    private final MultipartFileHandler fileHandler;

    // 포트폴리오 등록
    @Override
    @Transactional
    public Long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, long userSeq, List<MultipartFile> files) throws IOException {
        log.debug("[POST] Service - insertPortfolio");

        // 사용자 번호를 통한 사용자 조회
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        // 저장된 썸네일 주소
        String thumbnailUrl = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            thumbnailUrl = fileHandler.saveFile(thumbnail, "portfolio/thumbnail");
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        }

        // 포트폴리오 저장
        Portfolio portfolio = PortfolioReq.toEntity(req, thumbnailUrl, user);
        long portSeq = portfolioRepository.save(portfolio).getPortSeq();
        log.debug("저장된 포트폴리오 번호: " + portSeq);

        // 태그가 있다면 저장
        if (req.getTags() != null) {
            saveTags(req.getTags(), portfolio);
        }

        // 첨부된 파일이 있다면 저장
        if (files != null){
            saveUrls(files, portfolio);
        }

        return portSeq;
    }

    // 포트폴리오 목록 조회
    @Override
    public List<PortfolioListRes> findPortfolioList(long userSeq) {
        log.debug("[GET] Service - findPortfolioList");
        List<PortfolioListRes> portfolioListRes = new ArrayList<>();

        try {
            List<Portfolio> portfolios = portfolioRepository.findAllByUser_UserSeq(userSeq);
            for (Portfolio portfolio : portfolios) {
                List<Tag> tags = tagRepository.findAllByPortfolio_PortSeq(portfolio.getPortSeq());
                PortfolioListRes result = PortfolioListRes.toDto(portfolio, tags);
                portfolioListRes.add(result);
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            portfolioListRes = null;
        }

        return portfolioListRes;
    }

    // 포트폴리오 조회
    @Override
    public PortfolioRes findPortfolio(long portSeq) {
        log.debug("[GET] Service - findPortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio_PortSeq(portSeq);
        List<Tag> tags = tagRepository.findAllByPortfolio_PortSeq(portSeq);

        return PortfolioRes.toDto(portfolio, urls, tags);
    }

    // 포트폴리오 수정
    @Override
    @Transactional
    public Long updatePortfolio(long userSeq, long portSeq, PortfolioReq req, MultipartFile thumbnail, List<MultipartFile> files) throws IOException {
        log.debug("[PATCH] Service - updatePortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));

        if (userSeq != portfolio.getUser().getUserSeq()) {
            log.error("권한 없음");
            return null;
        }

        log.debug("portfolio" + portfolio);
        // 저장된 썸네일 주소
        String thumbnailUrl = portfolio.getThumbnail();

        // 저장할 썸네일 파일이 있다면 thumbnail 수정
        if (thumbnail != null) {
            // 저장된 썸네일 주소가 있으면 해당 썸네일 삭제 후 새로 저장
            if (thumbnailUrl != null) {
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
            thumbnailUrl = fileHandler.saveFile(thumbnail, "portfolio/thumbnail");
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        } else {
            // 썸네일 삭제 후 전송되고 이전에 썸네일 있었으면 썸네일 파일 삭제
            if (thumbnailUrl != null) {
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
        }

        portfolio.updatePortfolio(req.getName(), req.getSummary(), thumbnailUrl);

        // 태그가 있다면 기존 태그 삭제 후 새로 저장
        if (req.getTags() != null) {
            tagRepository.deleteAllByPortfolio_PortSeq(portSeq);
            saveTags(req.getTags(), portfolio);
        }

        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio_PortSeq(portSeq);
        // 파일이 있다면 기존 파일 DB, 물리적 삭제 후 새로 저장
        if (files != null){
            for (PortfolioUrl url : urls) {
                fileHandler.deleteFile(url.getUrl(), "portfolio");
            }
            portfolioUrlRepository.deleteAllByPortfolio_PortSeq(portSeq);
            saveUrls(files, portfolio);
        }
        return portSeq;
    }

    // 포트폴리오 삭제
    @Override
    @Transactional
    public Boolean deletePortfolio(long userSeq, long portSeq) {
        log.debug("[DELETE] Service - deletePortfolio");
        try {
            Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));

            if (userSeq != portfolio.getUser().getUserSeq()) {
                log.error("권한 없음");
                return null;
            }

            // 썸네일 삭제
            if (portfolio.getThumbnail() != null) {
                fileHandler.deleteFile(portfolio.getThumbnail(), "portfolio/thumbnail");
            }
            tagRepository.deleteAllByPortfolio_PortSeq(portSeq);
            List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio_PortSeq(portSeq);
            // 첨부파일 삭제
            if(!urls.isEmpty()) {
                for (PortfolioUrl url : urls) {
                    fileHandler.deleteFile(url.getUrl(), "portfolio");
                }
            }
            portfolioUrlRepository.deleteAllByPortfolio_PortSeq(portSeq);
            // 포트폴리오 삭제
            portfolioRepository.deleteById(portSeq);
            return true;
        } catch (Exception e) {
            log.error(e.getMessage());
            return false;
        }
    }

    // 태그 저장
    public void saveTags(String[] tagList, Portfolio portfolio) {
        List<Tag> tags = new ArrayList<>();
        for (String tagStr : tagList) {
            Tag tag = Tag.builder()
                    .name(tagStr)
                    .portfolio(portfolio)
                    .build();
            tags.add(tag);
            log.debug("tag: " + tag);
        }
        try{
            tagRepository.saveAll(tags);
        } catch (Exception e) {
            log.error("태그 저장 실패");
        }
    }

    // 파일 저장
    public void saveUrls(List<MultipartFile> files, Portfolio portfolio) throws IOException {
        for (MultipartFile file : files) {
            String dest = fileHandler.saveFile(file, "portfolio");
            PortfolioUrlDto urlDto = PortfolioUrlDto.toDto(file.getOriginalFilename(), dest, portfolio);
            PortfolioUrl url = PortfolioUrlDto.toEntity(urlDto);

            assert url != null;
            portfolioUrlRepository.save(url);
        }
    }
}
