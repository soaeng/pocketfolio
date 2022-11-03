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
import java.util.Optional;
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
    public Long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, Long userSeq, List<MultipartFile> files) throws IOException {
        log.info("[POST] Service - insertPortfolio");

        Portfolio portfolio = null;
        User user = userRepository.findById(userSeq).orElseThrow();
        String thumbnailUrl = null;

        if (thumbnail != null) {
            File dest = saveFile(thumbnail, "portfolio" + File.separator + "thumbnail");
            if (dest != null) {
                thumbnailUrl = dest.getPath();
            } else {
                return null;
            }
        }

        portfolio = req.toEntity(req, thumbnailUrl, user);

        log.debug("req.toString(): " + req.toString());

        // 포트폴리오 저장
        Long portSeq = portfolioRepository.save(portfolio).getPortSeq();
        log.debug("저장된 포트폴리오 번호: " + portSeq);

        // 태그 저장
        if (req.getTags() != null) {
            Tag tag = null;
            for (String tagStr : req.getTags()) {
                tag = Tag.builder()
                        .name(tagStr)
                        .portfolio(portfolio)
                        .build();
                tagRepository.save(tag);
                log.debug("tag: " + tag.toString());
            }
        }

        if (files != null){
            for (MultipartFile file : files) {
                File dest = saveFile(file, "portfolio");
                log.debug("file.getOriginalFilename(): " + file.getOriginalFilename());
                PortfolioUrlDto urlDto = PortfolioUrlDto.toDto(file.getOriginalFilename(), dest.getPath(), portfolio);
                PortfolioUrl url = PortfolioUrlDto.toEntity(urlDto);

                portfolioUrlRepository.save(url);
            }
        }
        return portSeq;
    }

    public File saveFile(MultipartFile file, String uploadDirName) throws IOException {
        // Random uuid
        UUID uuid = UUID.randomUUID();
        // 원래 파일명
        String fileName = file.getOriginalFilename();
        log.debug("파일명: " + fileName);
        // 파일 확장자
        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1);
        log.debug("파일 확장자: " + fileExt);

        // uuid + 확장자로 저장
        String saveName = uuid + "." + fileExt;
        log.debug("saveName: " + saveName);

        // 파일 저장 위치 지정 (없는 경우 폴더 생성)
        File upload = new File(uploadPath + File.separator + uploadDir + File.separator + uploadDirName);
        if (!upload.exists()){
            upload.mkdir();
            log.info("파일 업로드 폴더 생성 완료");
            log.debug(upload.getPath());
        }

        File dest = new File(upload.getPath() + File.separator + saveName);
        log.debug(dest.getPath());

        if (uploadDirName.contains("thumbnail")) {
            log.debug("thumbnail 파일 확장자 확인");
            if(!checkImageType(Paths.get(dest.getPath()))){
                log.debug("thumbnail 파일 확장자 확인 실패");
                return null;
            }
        }

        file.transferTo(dest);
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
    public List<PortfolioRes> findPortfolioList(Long userSeq) {
        log.info("[GET] Service - findPortfolioList");
        List<PortfolioRes> portfolioRes = new ArrayList<>();

        User user = userRepository.findById(userSeq).orElseThrow();
        List<Portfolio> portfolios = portfolioRepository.findAllByUser(user);
        int len = portfolios.size();

        for(int i = 0; i<len; i++){
            Portfolio portfolio = portfolios.get(i);
            List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(Optional.ofNullable(portfolio));
            List<Tag> tags = tagRepository.findAllByPortfolio(Optional.ofNullable(portfolio));
            PortfolioRes result = PortfolioRes.toDto(portfolio, urls, tags);
            portfolioRes.add(result);
        }

        return portfolioRes;
    }

    @Override
    public PortfolioRes findPortfolio(Long portSeq) {
        log.info("[GET] Service - findPortfolio");

        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow();

        List<PortfolioUrl> urls = portfolioUrlRepository.findAllByPortfolio(Optional.of(portfolio));
        List<Tag> tags = tagRepository.findAllByPortfolio(Optional.of(portfolio));
        PortfolioRes result = PortfolioRes.toDto(portfolio, urls, tags);

        return result;
    }

    @Override
    public Long updatePortfolio(PortfolioReq req) {
        return null;
    }

    @Override
    public boolean deletePortfolio(Long portSeq) {
        return false;
    }

    @Override
    public boolean insertTag(String name) {
        return false;
    }

    @Override
    public boolean deleteTag(Long portSeq) {
        return false;
    }
}
