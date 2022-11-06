package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.db.entity.Room;
import lombok.Builder;

import java.util.List;

public class RoomDetailRes {
    private RoomDto room;
    private List<PortfolioRes> portfolios;
    private List<GuestRoomRes> guestRooms;
    private int hitCount;
    private int todayCount;
    private int likeCount;

}
