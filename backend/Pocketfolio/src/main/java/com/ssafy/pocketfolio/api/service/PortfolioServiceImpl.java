package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PortfolioServiceImpl implements PortfolioService{

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;
    private final PortfolioUrlRepository portfolioUrlRepository;
    private final TagRepository tagRepository;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;
    @Value("${app.fileupload.uploadDir}")
    private String uploadDir;

    // 포트폴리오 등록
    @Override
    @Transactional
    public long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, long userSeq, List<MultipartFile> files) throws IOException {
        log.debug("[POST] Service - insertPortfolio");

        // 사용자 번호를 통한 사용자 조회
        // TODO: 사용자 예외 처리
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        // 저장된 썸네일 주소
        String thumbnailUrl = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            thumbnailUrl = saveThumbnail(thumbnail);
            if(thumbnailUrl == null) {
                return -1;
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
    public List<PortfolioRes> findPortfolioList(long userSeq) {
        log.debug("[GET] Service - findPortfolioList");
        List<PortfolioRes> portfolioRes = new ArrayList<>();
        
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        List<Portfolio> portfolios = portfolioRepository.findAllByUser(user);

        for (Portfolio portfolio : portfolios) {
            List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
            List<Tag> tags = tagRepository.findAllByPortfolio(portfolio);
            PortfolioRes result = PortfolioRes.toDto(portfolio, urls, tags);
            portfolioRes.add(result);
        }

        return portfolioRes;
    }

    // 포트폴리오 조회
    @Override
    public PortfolioRes findPortfolio(long portSeq) {
        log.debug("[GET] Service - findPortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
        List<Tag> tags = tagRepository.findAllByPortfolio(portfolio);

        return PortfolioRes.toDto(portfolio, urls, tags);
    }

    // 포트폴리오 수정
    @Override
    @Transactional
    public long updatePortfolio(long portSeq, PortfolioReq req, MultipartFile thumbnail, List<MultipartFile> files) throws IOException {
        log.debug("[PATCH] Service - updatePortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        log.debug("portfolio" + portfolio.toString());
        // 저장된 썸네일 주소
        String thumbnailUrl = portfolio.getThumbnail();

        // 저장할 썸네일 파일이 있다면 thumbnail 수정
        if (thumbnail != null) {
            // 저장된 썸네일 주소가 있으면 해당 썸네일 삭제 후 새로 저장
            if (thumbnailUrl != null) {
                deleteFile(thumbnailUrl);
            }
            thumbnailUrl = saveThumbnail(thumbnail);
            if(thumbnailUrl == null) {
                return -1;
            }
        }

        portfolio.updatePortfolio(req.getName(), req.getSummary(), thumbnailUrl);

        // 태그가 있다면 기존 태그 삭제 후 새로 저장
        if (req.getTags() != null) {
            tagRepository.deleteAllByPortfolio(portfolio);
            saveTags(req.getTags(), portfolio);
        }

        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
        // 파일이 있다면 기존 파일 DB, 물리적 삭제 후 새로 저장
        if (files != null){
            for (PortfolioUrl url : urls) {
                deleteFile(url.getUrl());
            }
            portfolioUrlRepository.deleteAllByPortfolio(portfolio);
            saveUrls(files, portfolio);
        }
        return portSeq;
    }

    // 포트폴리오 삭제
    @Override
    public void deletePortfolio(long portSeq) {
        log.debug("[DELETE] Service - deletePortfolio");
        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        // 썸네일 삭제
        if (portfolio.getThumbnail() != null) {
            deleteFile(portfolio.getThumbnail());
        }
        tagRepository.deleteAllByPortfolio(portfolio);
        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
        // 첨부파일 삭제
        if(!urls.isEmpty()) {
            for (PortfolioUrl url : urls) {
                deleteFile(url.getUrl());
            }
        }
        portfolioUrlRepository.deleteAllByPortfolio(portfolio);
        // 포트폴리오 삭제
        portfolioRepository.deleteById(portSeq);
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

    // 썸네일 저장
    public String saveThumbnail(MultipartFile thumbnail) throws IOException {
        // 파일 저장
        File dest = saveFile(thumbnail, "portfolio" + File.separator + "thumbnail");
        if (dest != null) {
            log.debug("썸네일 이미지 저장 성공");
            return dest.getPath();
        } else {
            log.error("썸네일 이미지 저장 실패");
            return null;
        }
    }

    // 이미지 파일 체크
    private boolean checkImageType(Path filePath) {
        try {
            String contentType = Files.probeContentType(filePath);
            return contentType.startsWith("image");
        }catch(IOException e) {
            e.printStackTrace();
        }
        log.debug("이미지 파일이 아닙니다.");
        return false;
    }

    public void saveUrls(List<MultipartFile> files, Portfolio portfolio) throws IOException {
        for (MultipartFile file : files) {
            File dest = saveFile(file, "portfolio");
            PortfolioUrlDto urlDto = PortfolioUrlDto.toDto(file.getOriginalFilename(), dest.getPath(), portfolio);
            PortfolioUrl url = PortfolioUrlDto.toEntity(urlDto);

            assert url != null;
            portfolioUrlRepository.save(url);
        }
    }

    // 파일 저장
    public File saveFile(MultipartFile file, String uploadDirName) throws IOException {
        // Random uuid
        UUID uuid = UUID.randomUUID();
        // 원래 파일명
        String fileName = file.getOriginalFilename();
        log.debug("파일명: " + fileName);
        // 파일 확장자
        assert fileName != null;
        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1);
        log.debug("파일 확장자: " + fileExt);

        // uuid + 확장자로 저장
        String saveName = uuid + "." + fileExt;
        log.debug("saveName: " + saveName);

        // 파일 저장 위치 지정 (없는 경우 폴더 생성)
        File upload = new File(uploadPath + File.separator + uploadDir + File.separator + uploadDirName);
        if (!upload.exists()){
            boolean result = upload.mkdir();
            if (!result) {
                log.debug("폴더 생성 실패");
            }
            log.debug("폴더 생성 성공");
        }

        File dest = new File(upload.getPath() + File.separator + saveName);
        log.debug(dest.getPath());

        if (uploadDirName.contains("thumbnail")) {
            log.debug("thumbnail 파일 확장자 확인");
            if(!checkImageType(Paths.get(dest.getPath()))){
                log.error("thumbnail 파일은 이미지 파일만 허용됨");
                return null;
            }
        }

        file.transferTo(dest);
        log.debug("파일 저장 완료");
        return dest;
    }
    
    // 파일 삭제
    public void deleteFile(String filePath) {
        File file = new File(filePath);
        if (file.exists()){
            boolean result = file.delete();
            if (!result) {
                log.debug("파일 삭제 실패");
            }
            log.debug("파일 삭제 성공");
        }
    }
}
