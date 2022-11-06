package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Room;

import java.time.LocalDateTime;

public class RoomDto {
    private long roomSeq;
    private String name;
    private long userSeq;
    private int theme;
    private String thumbnail;
    private String isMain;
    private String privacy;
    private LocalDateTime created;
    private LocalDateTime updated;

    public RoomDto(Room room) {
        this.roomSeq = room.getRoomSeq();
        this.name = room.getName();
        this.userSeq = room.getUser().getUserSeq();
        this.theme = room.getTheme();
        this.thumbnail = room.getThumbnail();
        this.isMain = room.getIsMain();
        this.privacy = room.getPrivacy();
        this.created = room.getCreated();
        this.updated = room.getUpdated();
    }
}
