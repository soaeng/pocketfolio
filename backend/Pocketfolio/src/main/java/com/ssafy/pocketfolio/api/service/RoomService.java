package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.UserRes;

public interface RoomService {
    UserRes insertRoom(long userSeq, String roomName);
}
