package com.ssafy.pocketfolio.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.ImageRes;
import com.ssafy.pocketfolio.api.dto.response.PortfolioListRes;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PortfolioServiceImpl implements PortfolioService {

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;
    private final PortfolioUrlRepository portfolioUrlRepository;
    private final TagRepository tagRepository;
    private final ImageRepository imageRepository;
    private final MultipartFileHandler fileHandler;

    // 포트폴리오 등록
    @Override
    @Transactional
    public Long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, long userSeq, List<MultipartFile> files, List<Long> uploadImg, List<Long> resultImg) throws IOException {
        log.debug("[POST] Service - insertPortfolio");

        // 사용자 번호를 통한 사용자 조회
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        // 저장된 썸네일 주소
        String thumbnailUrl = null;
        String thumbnailName = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            thumbnailUrl = fileHandler.saveFile(thumbnail, "portfolio/thumbnail");
            thumbnailName = thumbnail.getOriginalFilename();
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        }

        // 포트폴리오 저장
        Portfolio portfolio = PortfolioReq.toEntity(req, thumbnailUrl, thumbnailName, user);
        long portSeq = portfolioRepository.save(portfolio).getPortSeq();
        log.debug("저장된 포트폴리오 번호: " + portSeq);

        // 원래의 이미지 목록에서 변경된 내용 있는지 확인
        if (resultImg != null) {
            compareUploadImage(uploadImg, resultImg);
        }

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
    public Long updatePortfolio(long userSeq, long portSeq, PortfolioReq req, List<PortfolioUrlDto> urls, MultipartFile thumbnail, List<MultipartFile> files, List<Long> uploadImg, List<Long> resultImg) throws IOException {
        log.debug("[PATCH] Service - updatePortfolio");
        // req(json)를 String으로 보기 위해
        ObjectMapper mapper = new ObjectMapper();
        log.debug("req: " + mapper.writeValueAsString(req));
        log.debug("urls: " + mapper.writeValueAsString(urls));
        Portfolio portfolio = portfolioRepository.findById(portSeq).orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));

        if (userSeq != portfolio.getUser().getUserSeq()) {
            log.error("권한 없음");
            return null;
        }

        // 저장된 썸네일 주소
        String thumbnailUrl = req.getThumbnail();
        String thumbnailName = req.getThumbnailName();

        // 저장할 썸네일 파일이 있다면 thumbnail 수정
        if (thumbnail != null) {
            // 저장된 썸네일 주소가 있으면 해당 썸네일 삭제 후 새로 저장
            if (thumbnailUrl != null) {
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
            thumbnailUrl = fileHandler.saveFile(thumbnail, "portfolio/thumbnail");
            thumbnailName = thumbnail.getOriginalFilename();
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        } else { // 저장할 썸네일 없다면 기존 썸네일 삭제했는지 확인
            if (thumbnailUrl != null && req.getThumbnail() == null) {
                thumbnailUrl = null;
                thumbnailName = null;
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
        }
        log.debug(thumbnailUrl + " / " + thumbnailName);
        portfolio.updatePortfolio(req.getName(), req.getSummary(), thumbnailUrl, thumbnailName);

        // 원래의 이미지 목록에서 변경된 내용 있는지 확인
        if (resultImg != null) {
            compareUploadImage(uploadImg, resultImg);
        }

        // 태그가 있다면 기존 태그 삭제 후 새로 저장
        if (req.getTags() != null) {
            List<String> origin = tagRepository.findAllByPortfolio_PortSeq(portSeq).stream().map(Tag::getName).collect(Collectors.toList());
            List<String> latest = Arrays.asList(req.getTags());
            if (!origin.equals(latest)) {
                // 없어진 태그 삭제
                List<String> temp = new ArrayList<>(origin);
                temp.removeAll(latest);
                tagRepository.deleteAllByPortfolio_PortSeqAndNameIn(portSeq, temp);

                // 새로 추가된 태그 저장
                temp.clear();
                temp.addAll(latest);
                temp.removeAll(origin);
                saveTags(temp.toArray(new String[0]), portfolio);
            }
        }

        if (urls != null) {
            List<PortfolioUrlDto> originUrls = portfolioUrlRepository.findAllByPortfolio_PortSeq(portSeq).stream().map(PortfolioUrlDto::toDto).collect(Collectors.toList());
            // 원래의 첨부파일에서 변경된 내용 있는지 확인
            if (!originUrls.equals(urls)) {
                // 원래 첨부파일에서 삭제된 url의 seq 기준으로 삭제
                List<Long> deleteUrlSeqs = compareOriginFile(originUrls, urls);
                log.debug("deleteUrlSeq: " + deleteUrlSeqs);
                // 삭제할 db의
                List<PortfolioUrl> deleteUrlList = portfolioUrlRepository.findAllByPortUrlSeqIn(compareOriginFile(originUrls, urls));
                for (PortfolioUrl url : deleteUrlList) {
                    fileHandler.deleteFile(url.getUrl(), "portfolio");
                }
                portfolioUrlRepository.deleteAllByPortUrlSeqIn(compareOriginFile(originUrls, urls));
            }
        }
        // 새로 첨부된 파일이 있다면 기존 파일 DB, 물리적 삭제 후 새로 저장
        if (files != null){
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

    @Override
    public ImageRes insertImage(MultipartFile file) throws IOException {
        log.debug("[POST] Service - insertImage");
        String dest = fileHandler.saveFile(file, "portfolio/image");
        // 포트폴리오 저장
        Image image= Image.builder()
                .name(file.getOriginalFilename())
                .url(dest)
                .build();
        long imgSeq = imageRepository.save(image).getImageSeq();
        log.debug("저장된 이미지 번호: " + imgSeq);

        return ImageRes.toDto(imgSeq, image);
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

    // 기존에 저장된 파일 변경될 경우 -> 삭제했을 때의 처리
    private static List<Long> compareOriginFile(List<PortfolioUrlDto> origin, List<PortfolioUrlDto> latest) {
        List<Long> originSeq = origin.stream().map(PortfolioUrlDto::getPortUrlSeq).collect(Collectors.toList());
        List<Long> latestSeq = latest.stream().map(PortfolioUrlDto::getPortUrlSeq).collect(Collectors.toList());
        originSeq.removeAll(latestSeq);
        return originSeq;
    }

    private void compareUploadImage(List<Long> uploadImg, List<Long> resultImg) {
        if (!uploadImg.equals(resultImg)) {
            uploadImg.removeAll(resultImg);
            List<Image> deleteImageList = imageRepository.findAllByImageSeqIn(uploadImg);
            for (Image image : deleteImageList) {
                fileHandler.deleteFile(image.getUrl(), "portfolio/image");
            }
            imageRepository.deleteAllByImageSeqIn(uploadImg);
        }
    }
}
