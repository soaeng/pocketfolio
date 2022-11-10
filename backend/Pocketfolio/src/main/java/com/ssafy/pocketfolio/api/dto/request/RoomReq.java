package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Getter;

@Getter
public class RoomReq {
    private String name;            // 방 이름
    private String theme;              // 테마
    private String isMain;         // 대표 방 여부 (T/F)
    private String privacy;         // 공개 여부 (O/S/C)

    public static Room toEntity(RoomReq req, String thumbnailUrl, User user){
        return Room.builder()
                .name(req.name)
                .user(user)
                .theme(req.theme)
                .thumbnail(thumbnailUrl)
                .isMain(req.isMain)
                .privacy(req.privacy)
                .build();
    }
}
