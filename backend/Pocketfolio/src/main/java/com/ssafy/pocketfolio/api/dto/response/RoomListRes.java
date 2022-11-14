package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Room;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "RoomListRes", description = "방 목록 Response")
public class RoomListRes {
    @Schema(description = "마이룸 번호")
    private Long roomSeq;
    @Schema(description = "썸네일 url")
    private String thumbnail;
    @Schema(description = "방 이름")
    private String name;
    @Schema(description = "방 주인")
    private String user;
    @Schema(description = "메인 룸 여부")
    private boolean isMain;
    @Schema(description = "좋아요 수")
    private int like;
    @Schema(description = "조회수")
    private int hit;

    public static RoomListRes toDto(Room entity, int like, int hit) {
        if (entity == null) {
            return null;
        }
        return RoomListRes.builder()
                .roomSeq(entity.getRoomSeq())
                .thumbnail(entity.getThumbnail())
                .name(entity.getName())
                .user(entity.getUser().getName())
                .isMain("T".equals(entity.getIsMain()))
                .like(like)
                .hit(hit)
                .build();
    }
}
