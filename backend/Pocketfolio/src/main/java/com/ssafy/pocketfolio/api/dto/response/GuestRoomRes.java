package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.User;
import lombok.Builder;

@Builder
public class GuestRoomRes {
    private User user;
    private int roomSeq;
    private String roomName;
}
