package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.RoomDto;
import lombok.Builder;

import java.util.List;

@Builder
public class RoomDetailRes {
    private RoomDto room;
    // 포트폴리오 목록의 경우 아이템과 이어져있으니 해당 부분 처리 후 추가
    private List<PortfolioListRes> portfolios;
    private List<GuestRoomRes> guestRooms;
    private long hitCount;
    private long todayCount;
    private long likeCount;
    private String userName;
}
