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
@Transactional
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

    @Override
    @Transactional
    public long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, long userSeq, List<MultipartFile> files) throws IOException {
        log.debug("[POST] Service - insertPortfolio");
        Portfolio portfolio = null;

        // 사용자 번호를 통한 사용자 조회
        User user = userRepository.findById(userSeq).orElseThrow();
        // 저장된 썸네일 주소
        String thumbnailUrl = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            // 파일 저장
            File dest = saveFile(thumbnail, "portfolio" + File.separator + "thumbnail");
            if (dest != null) {
                thumbnailUrl = dest.getPath();
                log.debug("썸네일 이미지 저장 성공");
            } else {
                log.error("썸네일 이미지 저장 실패");
                return -1;
            }
        }

        log.debug("req: " + req.toString());
        log.debug("thumbnailUrl: " + thumbnailUrl);
        log.debug("user: " + user);

        // 포트폴리오 저장
        portfolio = PortfolioReq.toEntity(req, thumbnailUrl, user);
        long portSeq = portfolioRepository.save(portfolio).getPortSeq();
        log.debug("저장된 포트폴리오 번호: " + portSeq);

        // 태그가 있다면 저장
        if (req.getTags() != null) {
            for (String tagStr : req.getTags()) {
                Tag tag = Tag.builder()
                        .name(tagStr)
                        .portfolio(portfolio)
                        .build();
                tagRepository.save(tag);
                log.debug("tag: " + tag);
            }
        }

        if (files != null){
            for (MultipartFile file : files) {
                File dest = saveFile(file, "portfolio");
                log.debug("file.getOriginalFilename(): " + file.getOriginalFilename());
                PortfolioUrlDto urlDto = PortfolioUrlDto.toDto(file.getOriginalFilename(), dest.getPath(), portfolio);
                PortfolioUrl url = PortfolioUrlDto.toEntity(urlDto);

                assert url != null;
                portfolioUrlRepository.save(url);
            }
        }
        return portSeq;
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
            boolean wasSuccessful = upload.mkdir();
            if (wasSuccessful){
                log.debug("파일 업로드 폴더 생성 완료");
                log.debug(upload.getPath());
            } else {
                log.debug("파일 업로드 폴더 생성 실패");
            }
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
        log.debug("파일 저장 성공");
        return dest;
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

    @Override
    public List<PortfolioRes> findPortfolioList(long userSeq) {
        log.debug("[GET] Service - findPortfolioList");
        List<PortfolioRes> portfolioRes = new ArrayList<>();

        User user = userRepository.findById(userSeq).orElseThrow();
        List<Portfolio> portfolios = portfolioRepository.findAllByUser(user);

        for (Portfolio portfolio : portfolios) {
            List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
            List<Tag> tags = tagRepository.findAllByPortfolio(portfolio);
            PortfolioRes result = PortfolioRes.toDto(portfolio, urls, tags);
            portfolioRes.add(result);
        }

        return portfolioRes;
    }

    @Override
    public PortfolioRes findPortfolio(long portSeq) {
        log.debug("[GET] Service - findPortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow();

        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(portfolio);
        List<Tag> tags = tagRepository.findAllByPortfolio(portfolio);

        return PortfolioRes.toDto(portfolio, urls, tags);
    }

    @Override
    @Transactional
    public Long updatePortfolio(PortfolioReq req, MultipartFile thumbnail, List<MultipartFile> files) {
        log.debug("[PATCH] Service - updatePortfolio");
        return null;
    }

    @Override
    public void deletePortfolio(long portSeq) {
        log.debug("[DELETE] Service - deletePortfolio");
        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow();
        tagRepository.deleteAllByPortfolio(portfolio);
        portfolioUrlRepository.deleteAllByPortfolio(portfolio);
        // 해당 포트폴리오 삭제
        portfolioRepository.deleteById(portSeq);
    }
}
