package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.GuestListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "GuestListRes", description = "최근 방문자 Response")
public class GuestListRes {
    @Schema(description = "방문자 번호")
    private Long userSeq;
    @Schema(description = "방문자 이름")
    private String userName;
    @Schema(description = "방문자 프로필 이미지")
    private String userProfile;
    @Schema(description = "방문일")
    private String hitDate;

    public static GuestListRes toDto(GuestListView view) {
        if (view == null) {
            return null;
        }

        return GuestListRes.builder()
                .userSeq(view.getUserSeq())
                .userName(view.getUserName())
                .userProfile(view.getUserProfile())
                .hitDate(view.getHitDate())
                .build();
    }

}
