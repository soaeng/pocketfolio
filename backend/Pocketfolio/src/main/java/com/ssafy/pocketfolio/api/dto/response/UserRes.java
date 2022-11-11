package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.view.UserView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

import javax.validation.constraints.Email;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "UserRes", description = "유저 Response")
public class UserRes {
    @Schema(description = "유저 번호", nullable = false)
    private Long userSeq;

    @Email
    @Schema(description = "이메일", nullable = false, maxLength = 50, example = "test@test.com")
    private String email;

    @Schema(description = "이름", nullable = false, maxLength = 12)
    private String name;

    @Schema(description = "프로필 사진 파일 url", maxLength = 255, example = "/upload/img/J2EeRo2d.jpg")
    private String profilePic;

    @Schema(description = "생년월일", example = "birth.year=2001 / birth.month=1 / birth.day=1")
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate birth;

    @Schema(description = "팔로워 수")
    private Long followerTotal;

    @Schema(description = "팔로잉 수")
    private Long followingTotal;

    @Schema(description = "자기소개", maxLength = 200)
    private String describe;

    @Schema(description = "블로그 주소", maxLength = 1000)
    private String blogUrl;

//    @Schema(description = "마이룸 목록") // TODO: 1. 마이룸 목록 주기
//    private List<RoomRes> rooms;

    public UserRes(User user) {
        userSeq = user.getUserSeq();
        email = user.getEmail();
        name = user.getName();
        profilePic = user.getProfilePic();
        birth = user.getBirth();
        describe = user.getDescribe();
        blogUrl = user.getBlogUrl();
    }

    public UserRes(UserView userView) {
        userSeq = userView.getUserSeq();
        email = userView.getEmail();
        name = userView.getName();
        profilePic = userView.getProfilePic();
        birth = userView.getBirth();
        followerTotal = userView.getFollowerTotal();
        followingTotal = userView.getFollowingTotal();
        describe = userView.getDescribe();
        blogUrl = userView.getBlogUrl();
    }
}
