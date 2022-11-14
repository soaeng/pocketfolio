package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.SearchRoomListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "SearchRoomListRes", description = "방 검색 목록 Response")
public class SearchRoomListRes {
    @Schema(description = "마이룸 번호")
    private Long roomSeq;
    @Schema(description = "썸네일 url")
    private String thumbnail;
    @Schema(description = "방 이름")
    private String name;
    @Schema(description = "방 주인 이름")
    private String userName;
    @Schema(description = "방 주인 프로필 사진 url")
    private String userProfilePic;
    @Schema(description = "좋아요 수")
    private Integer like;
    @Schema(description = "조회수")
    private Integer hit;
    @Schema(description = "좋아요 여부")
    private Boolean isMain;

    public SearchRoomListRes(SearchRoomListView view) {
        roomSeq = view.getRoomSeq();
        thumbnail = view.getThumbnail();
        name = view.getName();
        userName = view.getUserName();
        userProfilePic = view.getUserProfilePic();
        like = view.getLike();
        hit = view.getHit();
        isMain = view.getIsMain();
    }

}
