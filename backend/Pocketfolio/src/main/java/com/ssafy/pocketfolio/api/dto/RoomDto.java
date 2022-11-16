package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.api.dto.response.CategoryRes;
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
    private String userProfile;
    private String userBlogUrl;
    private String theme;
    private CategoryRes category;
    private String thumbnail;
    private String isMain;
    private String privacy;
    private String created;
    private String updated;

    public static RoomDto toDto(Room entity, CategoryRes category) {
        return RoomDto.builder()
                .roomSeq(entity.getRoomSeq())
                .name(entity.getName())
                .userSeq(entity.getUser().getUserSeq())
                .userName(entity.getUser().getName())
                .userProfile(entity.getUser().getProfilePic())
                .userBlogUrl(entity.getUser().getBlogUrl())
                .theme(entity.getTheme())
                .category(category)
                .thumbnail(entity.getThumbnail())
                .isMain(entity.getIsMain())
                .privacy(entity.getPrivacy())
                .created(entity.getCreated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .updated(entity.getUpdated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .build();
    }
}
