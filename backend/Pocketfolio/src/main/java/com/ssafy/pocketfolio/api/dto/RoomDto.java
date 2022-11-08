package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Room;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
@Getter
@Builder
public class RoomDto {
    private long roomSeq;
    private String name;
    private long userSeq;
    private String userName;
    private int theme;
    private String thumbnail;
    private String isMain;
    private String privacy;
    private LocalDateTime created;
    private LocalDateTime updated;

    public static RoomDto toDto(Room entity) {
        return RoomDto.builder()
                .roomSeq(entity.getRoomSeq())
                .name(entity.getName())
                .userSeq(entity.getUser().getUserSeq())
                .userName(entity.getUser().getName())
                .theme(entity.getTheme())
                .thumbnail(entity.getThumbnail())
                .isMain(entity.getIsMain())
                .privacy(entity.getPrivacy())
                .created(entity.getCreated())
                .updated(entity.getUpdated())
                .build();
    }
}
