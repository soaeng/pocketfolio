package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.User;
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
    private long followSeq;

    @Schema(description = "유저 번호", nullable = false)
    private long userSeq;

    @Schema(description = "이름", nullable = false, maxLength = 12)
    private String name;

    @Schema(description = "프로필 사진 파일 url", maxLength = 255, example = "/img/J2EeRo2d.jpg")
    private String profilePic;

    public FollowListRes(User user) {
        userSeq = user.getUserSeq();
        name = user.getName();
        profilePic = user.getProfilePic();
    }
}
