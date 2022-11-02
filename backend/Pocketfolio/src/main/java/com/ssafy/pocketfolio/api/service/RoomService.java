package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.CategoryRes;

import java.util.List;
import java.util.Map;

public interface RoomService {
    /**
     * 마이룸 생성
     *
     * @params 마이룸 이름, 카테고리(기술), 썸네일, 주인장(회원번호)
     */
    boolean insertRoom(RoomReq roomReq);

    /**
     * 마이룸 카테고리 목록
     * @return 카테고리 번호, 카테고리 이름
     */
    List<CategoryRes> findCategoryList();

    /**
     * 파도타기
     * @return 랜덤 마이룸 번호(본인 마이룸 제외)
     */
    int findRandomRoom();

    /**
     * 마이룸 목록 조회
     * @return 포트폴리오 목록(제목, 태그)
     *         마이룸 목록(썸네일, 마이룸 제목, 좋아요 수, 조회수, 태그)
     */
    Map<String, Object> findRoomList();

    /**
     * 마이룸 조회
     * @return 포트폴리오 목록(제목)
     *         썸네일, 마이룸 제목, 좋아요 수, 조회수, 방문자 마이룸 번호, 태그
     */


    /**
     * 마이룸 정보 수정
     * @params 마이룸 이름, 카테고리
     */

    /**
     * 마이룸 삭제
     * @params 마이룸 번호
     */

    /**
     * 마이룸 좋아요
     * @params 마이룸 번호
     */

    /**
     * 마이룸 좋아요 취소
     * @params 마이룸 번호
     */

}