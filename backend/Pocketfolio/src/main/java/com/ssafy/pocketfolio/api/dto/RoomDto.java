package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.view.RoomBestListView;

import java.time.LocalDateTime;

public class RoomDto {
    private long roomSeq;
    private String name;
    private User user;
    private int theme;
    private String thumbnail;
    private String isMain;
    private String privacy;
    private LocalDateTime created;
    private LocalDateTime updated;

    public RoomDto(Room room) {
        this.roomSeq = room.getRoomSeq();
        this.name = room.getName();
        this.user = room.getUser();
        this.theme = room.getTheme();
        this.thumbnail = room.getThumbnail();
        this.isMain = room.getIsMain();
        this.privacy = room.getPrivacy();
        this.created = room.getCreated();
        this.updated = room.getUpdated();
    }

    public static Room toEntity(RoomDto dto) {
        return Room.builder()
                .roomSeq(dto.roomSeq)
                .name(dto.name)
                .user(dto.user)
                .theme(dto.theme)
                .thumbnail(dto.thumbnail)
                .isMain(dto.isMain)
                .privacy(dto.privacy)
                .created(dto.created)
                .updated(dto.updated)
                .build();
    }
}
