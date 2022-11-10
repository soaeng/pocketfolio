package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;

import java.util.List;

public interface GuestbookService {

    /**
     * 방명록 등록
     * @param req 방명록 등록 정보
     * @param userSeq 방명록 작성자
     * @return 등록한 방명록 번호
     */
    Long insertGuestbook(GuestbookReq req, long roomSeq, long userSeq);

    /**
     * 방명록 목록 조회
     * @param roomSeq 방명록을 조회할 방 번호
     * @param userSeq 현재 접속한 회원 번호
     * @return 방명록 목록
     */
    List<GuestbookRes> findGuestbookList(long roomSeq, long userSeq);

    /**
     * 방명록 삭제
     * @param guestbookSeq 삭제할 방명록 번호
     * @param userSeq 현재 접속한 회원 번호
     * @return 방명록 삭제 여부
     */
    Boolean deleteGuestbook(long guestbookSeq, long userSeq);

    /**
     * 방명록 댓글 등록
     * @param req 방명록 댓글 내용
     * @param guestbookSeq 방명록 번호
     * @param userSeq 댓글 작성자 번호 (현재 접속한 회원 번호)
     * @return 방명록 댓글 등록 여부
     */
    Long insertGuestbookComment(GuestbookCommentReq req, long guestbookSeq, long userSeq);

    /**
     * 방명록 댓글 삭제
     * @param guestbookSeq 방명록 댓글 번호
     * @param userSeq 현재 접속한 회원 번호
     * @return 방명록 댓글 삭제 여부
     */
    Boolean deleteGuestbookComment(long guestbookSeq, long userSeq);

}
