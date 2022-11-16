package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.SearchPortfolioListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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
    @Schema(description = "태그 리스트")
    private List<String> tags;

    public SearchPortfolioListRes(SearchPortfolioListView view) {
        portSeq = view.getPortSeq();
        name = view.getName();
        roomSeq = view.getRoomSeq();
        roomName = view.getRoomName();
        roomThumbnail = view.getRoomThumbnail();
        userSeq = view.getUserSeq();
        userName = view.getUserName();
        userProfilePic = view.getUserProfilePic();
        like = view.getLike();
        hit = view.getHit();
        tags = new ArrayList<>();
        String[] tagArr = view.getTags().split(",", 6);
        int maxLength = tagArr.length > 5 ? 5 : tagArr.length;
        for (int i = 0; i < maxLength; i++) {
            tags.add(tagArr[i]);
        }
    }

}
