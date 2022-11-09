package com.ssafy.pocketfolio.api.dto.response;

import lombok.Builder;

@Builder
public class RoomListRes {
    private Long roomSeq;       // 마이룸 번호
    private String thumbnail;   // 썸네일
    private String name;        // 마이룸 이름
    private String user;        // 작성자
    private int like;        // 좋아요 수
    private int hit;         // 조회수
}
