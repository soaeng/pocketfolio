package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Room;
import lombok.Builder;
import lombok.Getter;

import java.time.format.DateTimeFormatter;

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
    private String created;
    private String updated;

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
                .created(entity.getCreated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .updated(entity.getUpdated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .build();
    }
}
