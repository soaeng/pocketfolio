package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.PortfolioRepository;
import com.ssafy.pocketfolio.db.repository.PortfolioUrlRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
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

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;

    @Value("${app.fileupload.uploadDir}")
    private String uploadDir;

    /**
     * 포트폴리오 등록
     *
     * @return 등록한 포트폴리오 번호
     * @params 제목, 개요, 썸네일, 포트폴리오 url list, tag list, 생성일
     */
    @Override
    @Transactional
    public Long insertPortfolio(PortfolioReq req, Long userSeq, List<MultipartFile> files) {

        log.info("[Service - Portfolio] insertPortfolio");
        try{
            User user = userRepository.findById(userSeq).orElseThrow();
            Portfolio portfolio = req.toEntity(req, user);

            // 포트폴리오 저장
            Long portSeq = portfolioRepository.save(portfolio).getPortSeq();
            log.debug("저장된 포트폴리오 번호: %d", portSeq);

            // 파일 저장 위치 지정 (없는 경우 폴더 생성)
            File upload = new File(uploadPath + File.separator + uploadDir + File.separator + "portfolio");
            if (!upload.exists()){
                upload.mkdir();
                log.debug("포트폴리오 업로드 폴더 생성");
            }

            for (MultipartFile file : files) {
                // Random uuid
                UUID uuid = UUID.randomUUID();
                // 원래 파일명
                String fileName = file.getName();
                // 파일 확장자
                String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1);
                // uuid + 확장자로 저장
                String saveName = uuid + "." + fileExt;

                File dest = new File(upload + File.separator + saveName);
                file.transferTo(dest);

                PortfolioUrlDto urlDto = PortfolioUrlDto.toDto(fileName, dest.getPath(), portfolio);
                PortfolioUrl url = PortfolioUrlDto.toEntity(urlDto);

                portfolioUrlRepository.save(url);
            }
            return portSeq;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 포트폴리오 목록 조회
     *
     * @param user
     * @return 포트폴리오 목록 res (포트폴리오 번호, 제목, 썸네일, tag list) list
     * @params user
     */
    @Override
    public List<PortfolioRes> findPortfolioList(Long user) {
        return null;
    }

    /**
     * 포트폴리오 조회
     *
     * @param portSeq
     * @return 포트폴리오 상세 (제목, 개요, 포트폴리오 url list, tag list, 생성일)
     * @params 포트폴리오 번호
     */
    @Override
    public PortfolioRes findPortfolio(Long portSeq) {
        return null;
    }

    /**
     * 포트폴리오 수정
     *
     * @param req
     * @return 수정한 포트폴리오 번호
     * @params 포트폴리오 번호, 제목, 개요, 썸네일, 포트폴리오 url list, tag list, 수정일
     */
    @Override
    public Long updatePortfolio(PortfolioReq req) {
        return null;
    }

    /**
     * 포트폴리오 삭제
     *
     * @param portSeq
     * @return 성공 여부
     * @params 포트폴리오 번호
     */
    @Override
    public boolean deletePortfolio(Long portSeq) {
        return false;
    }

    /**
     * 포트폴리오 태그 등록
     *
     * @param name
     * @return 성공 여부
     * @params String[] 태그
     */
    @Override
    public boolean insertTag(String name) {
        return false;
    }

    /**
     * 포트폴리오 태그 삭제
     *
     * @param portSeq
     * @return 성공 여부
     * @params 포트폴리오 태그 번호
     */
    @Override
    public boolean deleteTag(Long portSeq) {
        return false;
    }
}
