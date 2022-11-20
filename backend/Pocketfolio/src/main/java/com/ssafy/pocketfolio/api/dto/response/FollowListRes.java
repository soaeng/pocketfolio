package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.view.FollowListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "FollowListRes", description = "팔로우 목록 Response")
public class FollowListRes {
    @Schema(description = "팔로우 번호: 0이면 팔로우하지 않았음", nullable = false)
    private Long followSeq;

    @Schema(description = "유저 번호", nullable = false)
    private Long userSeq;

    @Schema(description = "이름", nullable = false, maxLength = 12)
    private String name;

    @Schema(description = "프로필 사진 파일 url", maxLength = 255, example = "/img/J2EeRo2d.jpg")
    private String profilePic;

    @Schema(description = "유저의 메인 방")
    private Long roomSeq;

    public FollowListRes(User user) {
        userSeq = user.getUserSeq();
        name = user.getName();
        profilePic = user.getProfilePic();
    }

    public FollowListRes(FollowListView followListView) {
        followSeq = followListView.getFollowSeq();
        userSeq = followListView.getUserSeq();
        name = followListView.getName();
        profilePic = followListView.getProfilePic();
        roomSeq = followListView.getRoomSeq();
    }
}
