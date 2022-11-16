package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Room;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

import java.util.List;

@Builder
@Tag(name = "RoomListRes", description = "방 목록 Response")
public class MainRoomRes {
    @Schema(description = "대표 방 번호")
    private Long roomSeq;
    @Schema(description = "대표 방 테마")
    private String theme;
    @Schema(description = "아이템 배치 리스트")
    private List<ArrangeRes> arranges;
    @Schema(description = "좋아요 수")
    private int like;
    @Schema(description = "조회수")
    private int hit;

    public static MainRoomRes toDto(Room entity, List<ArrangeRes> arranges, int like, int hit) {
        if (entity == null) {
            return null;
        }
        return MainRoomRes.builder()
                .roomSeq(entity.getRoomSeq())
                .theme(entity.getTheme())
                .arranges(arranges)
                .like(like)
                .hit(hit)
                .build();
    }
}
