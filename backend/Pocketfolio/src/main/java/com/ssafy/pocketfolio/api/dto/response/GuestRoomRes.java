package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.GuestListView;
import com.ssafy.pocketfolio.db.view.HitStatListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;
import java.util.*;

@Builder
@Tag(name = "GuestRoomRes", description = "최근 방문자 Response")
public class GuestRoomRes {
    @Schema(description = "방문자 방 번호")
    private Long roomSeq;
    @Schema(description = "마이룸 이름")
    private String name;
    @Schema(description = "마이룸 썸네일")
    private String thumbnail;
    @Schema(description = "유저 이름")
    private String userName;
    @Schema(description = "방문일")
    private String hitDate;
    @Schema(description = "좋아요 수")
    private int like;
    @Schema(description = "방문자 수")
    private int hit;

    public static GuestRoomRes toDto(GuestListView view, int like, int hit) {
        if (view == null) {
            return null;
        }

        return GuestRoomRes.builder()
                .roomSeq(view.getRoomSeq())
                .name(view.getName())
                .thumbnail(view.getThumbnail())
                .userName(view.getName())
                .hitDate(view.getHitDate())
                .like(like)
                .hit(hit)
                .build();
    }

}
