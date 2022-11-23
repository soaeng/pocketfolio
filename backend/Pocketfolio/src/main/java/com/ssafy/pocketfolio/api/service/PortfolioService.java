package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.ImageRes;
import com.ssafy.pocketfolio.api.dto.response.PortfolioListRes;
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
     * @param uploadImg 등록 시 게시글 내 포함이 되는 이미지 주소
     * @param resultImg 최종적으로 업로드하는 이미지 주소
     * @return 등록된 포트폴리오 번호
     * @throws IOException 서버에 작성 실패 시 던진다.
     */
    Long insertPortfolio(PortfolioReq req, MultipartFile thumbnail, long userSeq, List<MultipartFile> files, List<Long> uploadImg, List<Long> resultImg) throws IOException;

    /**
     * 포트폴리오 목록 조회
     * @param userSeq 작성자 회원 번호
     * @return 포트폴리오 목록
     */
    List<PortfolioListRes> findPortfolioList(long userSeq);

    /**
     * 포트폴리오 상세 조회
     * @param portSeq 포트폴리오 번호
     * @return 포트폴리오 상세 내용
     */
    PortfolioRes findPortfolio(long portSeq);

    /**
     * 포트폴리오 수정
     * @param userSeq 회원 번호 (로그인 유저)
     * @param portSeq 수정할 포트폴리오 번호
     * @param req 포트폴리오 정보
     * @param urls 기존 첨부되어 있던 파일 리스트
     * @param thumbnail 프트폴리오 썸네일 이미지
     * @param files 포트폴리오 첨부 파일 목록
     * @param uploadImg 등록 시 게시글 내 포함이 되는 이미지 주소
     * @param resultImg 최종적으로 업로드하는 이미지 주소
     * @return 수정된 포트폴리오 번호
     * @throws IOException 수정 과정 중 문제 발생 시 던져짐
     */
    Long updatePortfolio(long userSeq, long portSeq, PortfolioReq req, List<PortfolioUrlDto> urls, MultipartFile thumbnail, List<MultipartFile> files, List<Long> uploadImg, List<Long> resultImg) throws IOException;

    /**
     * 포트폴리오 삭제
     * @param userSeq 회원 번호 (로그인 유저)
     * @param portSeq 삭제할 포트폴리오 번호
     * @return 삭제 여부
     */
    Boolean deletePortfolio(long userSeq, long portSeq);

    /**
     * 포트폴리오 게시글 내 이미지
     * @param image 이미지 파일
     * @return 이미지 url
     */
    ImageRes insertImage(MultipartFile image) throws IOException;
}
