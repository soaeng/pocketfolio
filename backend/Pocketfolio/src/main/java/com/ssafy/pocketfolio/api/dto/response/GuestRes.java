package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.GuestListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "GuestRes", description = "최근 방문자 Response")
public class GuestRes {
    @Schema(description = "방문자 회원 번호")
    private Long userSeq;
    @Schema(description = "방문자 이름")
    private String userName;
    @Schema(description = "방문자 프로필")
    private String profile;
    @Schema(description = "방문자 대표 방")
    private Long roomSeq;
    @Schema(description = "방문일")
    private String hitDate;

    public static GuestRes toDto(GuestListView view) {
        if (view == null) {
            return null;
        }

        return GuestRes.builder()
                .userSeq(view.getUserSeq())
                .userName(view.getUserName())
                .profile(view.getProfile())
                .roomSeq(view.getRoomSeq())
                .hitDate(view.getHitDate())
                .build();
    }

}
