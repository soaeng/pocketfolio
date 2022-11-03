package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PortfolioService {

    /**
     * 포트폴리오 등록
     * @param req 포트폴리오 정보(제목, 내용, 태그 등)
     * @param thumbnail 캡쳐된 포트폴리오 썸네일
     * @param userSeq 작성자 회원 번호
     * @param files 첨부된 포트폴리오 파일
     * @return 등록된 포트폴리오 번호
     * @throws IOException 서버에 작성 실패 시 던진다.
     */
    public Long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, Long userSeq, List<MultipartFile> files) throws IOException;

    /**
     * 포트폴리오 목록 조회
     * @param userSeq 작성자 회원 번호
     * @return 포트폴리오 목록
     */
    List<PortfolioRes> findPortfolioList(Long userSeq);

    /**
     * 포트폴리오 상세 조회
     * @param portSeq 포트폴리오 번호
     * @return 포트폴리오 상세 내용
     */
    PortfolioRes findPortfolio(Long portSeq);

    /**
     * 포트폴리오 수정
     * @params 포트폴리오 번호, 제목, 개요, 썸네일, 포트폴리오 url list, tag list, 수정일
     * @return 수정한 포트폴리오 번호
     */
    Long updatePortfolio(PortfolioReq req);

    /**
     * 포트폴리오 삭제
     * @params 포트폴리오 번호
     * @return 성공 여부
     */
    boolean deletePortfolio(Long portSeq);

    /**
     * 포트폴리오 태그 등록
     * @params String[] 태그
     * @return 성공 여부
     */
    boolean insertTag(String name);

    /**
     * 포트폴리오 태그 삭제
     * @params 포트폴리오 태그 번호
     * @return 성공 여부
     */
    boolean deleteTag(Long portSeq);
}
