package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class RoomReq {
    @Schema(description = "방 이름", example = "소앵이 방")
    private String name;
    @Schema(description = "테마", example = "기타")
    private String theme;
    @Schema(description = "카테고리 번호", example = "1")
    private Long category;
    @Schema(description = "대표 방 여부 (T/F)", example = "T")
    private String isMain;
    @Schema(description = "공개 여부 (O/S/C)", example = "O")
    private String privacy;

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
