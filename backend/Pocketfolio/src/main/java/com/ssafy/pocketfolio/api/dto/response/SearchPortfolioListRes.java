package com.ssafy.pocketfolio.api.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "SearchPortfolioListRes", description = "포트폴리오 검색 목록 Response")
public class SearchPortfolioListRes {
    @Schema(description = "포트폴리오 번호")
    private Long portSeq;
    @Schema(description = "포트폴리오 이름")
    private String name;
    @Schema(description = "포켓 번호")
    private Long roomSeq;
    @Schema(description = "포켓 이름")
    private String roomName;

    @Schema(description = "포켓 썸네일 url")
    private String roomThumbnail;
    @Schema(description = "유저 번호")
    private Long userSeq;
    @Schema(description = "방 주인 이름")
    private String userName;
    @Schema(description = "방 주인 프로필 사진 url")
    private String userProfilePic;
    @Schema(description = "포켓 좋아요 수")
    private Integer like;
    @Schema(description = "포켓 조회수")
    private Integer hit;
    @Schema(description = "좋아요 여부")
    private Boolean isLiked;
    @Schema(description = "태그 리스트")
    private String[] tags;

//    public SearchPortfolioListRes(SearchRoomListView view) {
//        roomSeq = view.getRoomSeq();
//        thumbnail = view.getThumbnail();
//        name = view.getName();
//        userSeq = view.getUserSeq();
//        userName = view.getUserName();
//        userProfilePic = view.getUserProfilePic();
//        like = view.getLike();
//        hit = view.getHit();
//        isMain = "T".equals(view.getIsMain());
//        categoryName = view.getCategoryName();
//    }

}
