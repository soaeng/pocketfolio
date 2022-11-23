package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "MainPocketListRes", description = "메인 포켓 리스트 Response")
public class MainPocketListRes {
    @Schema(description = "방 번호")
    private long roomSeq;
    @Schema(description = "방 이름")
    private String roomName;
    @Schema(description = "썸네일")
    private String thumbnail;
    @Schema(description = "방 카테고리")
    private String roomCategory;
    @Schema(description = "팔로우 여부")
    private boolean follow;
    @Schema(description = "좋아요 여부")
    private boolean like;
    @Schema(description = "해당 방의 좋아요 수")
    private int likeCount;
    @Schema(description = "해당 방의 방문자 수")
    private int hitCount;
    @Schema(description = "방 주인 번호")
    private long userSeq;
    @Schema(description = "방 주인 이름")
    private String userName;
    @Schema(description = "방 주인 프로필 사진")
    private String profile;

    public static MainPocketListRes toDto(Room room, String category, boolean follow, boolean like, int likeCount, int hitCount, User user) {
        return MainPocketListRes.builder()
                .roomSeq(room.getRoomSeq())
                .roomName(room.getName())
                .thumbnail(room.getThumbnail())
                .roomCategory(category)
                .follow(follow)
                .like(like)
                .likeCount(likeCount)
                .hitCount(hitCount)
                .userSeq(user.getUserSeq())
                .userName(user.getName())
                .profile(user.getProfilePic())
                .build();
    }


}
