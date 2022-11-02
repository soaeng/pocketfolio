package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.PortfolioRes;
import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;

public interface PortfolioService {

    /**
     * [포트폴리오 등록]
     * @return 등록한 포트폴리오 번호
     * @params PortfolioReq(제목, 개요, 썸네일, 포트폴리오 url list, tag list, 생성일)<br/>
     *         User 사용자
     */
    Long insertPortfolio(PortfolioReq req, Long user, List<MultipartFile> files);

    /**
     * [포트폴리오 목록 조회]
     * @params User, PortfolioReq, file
     * @return 포트폴리오 목록 res (포트폴리오 번호, 제목, 썸네일, tag list) list
     */
    List<PortfolioRes> findPortfolioList(Long user);

    /**
     * 포트폴리오 조회
     * @params 포트폴리오 번호
     * @return 포트폴리오 상세 (제목, 개요, 포트폴리오 url list, tag list, 생성일)
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
