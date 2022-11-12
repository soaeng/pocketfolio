package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.GuestListView;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "GuestRoomRes", description = "방문자 방 Response")
public class GuestRoomRes {
    private Long roomSeq;
    private String name;
    private String thumbnail;
    private String userName;
    private String hitDate;
    private int like;
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
