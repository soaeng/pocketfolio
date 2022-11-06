package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class RoomReq {
    private String name;            // 방 이름
    private int theme;              // 테마
    private String isMain;         // 대표 방 여부 (T/F)
    private String privacy;         // 공개 여부 (O/S/C)
    private LocalDateTime created;  // 생성일
    private LocalDateTime updated;  // 수정일

    public static Room toEntity(RoomReq req, String thumbnailUrl, User user){
        return Room.builder()
                .name(req.name)
                .user(user)
                .theme(req.theme)
                .thumbnail(thumbnailUrl)
                .isMain(req.isMain)
                .privacy(req.privacy)
                .created(req.created)
                .updated(req.updated)
                .build();
    }
}
