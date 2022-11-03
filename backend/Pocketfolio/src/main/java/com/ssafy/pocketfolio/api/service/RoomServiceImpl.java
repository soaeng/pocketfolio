package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.db.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;

    @Override
    public UserRes insertRoom(long userSeq, String roomName) {
        return null;
    }
}
