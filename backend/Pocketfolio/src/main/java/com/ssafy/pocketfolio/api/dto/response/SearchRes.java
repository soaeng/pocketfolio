package com.ssafy.pocketfolio.api.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "SearchRes", description = "검색 결과 반환 Response")
public class SearchRes<T> {
    @Schema(description = "검색 결과 리스트")
    private List<T> list;
//    @Schema(description = "포켓 검색 결과 리스트")
//    private List<SearchRoomListRes> rooms;
//    @Schema(description = "포트폴리오 검색 결과 리스트")
//    private List<SearchPortfolioListRes> portfolios;
//    @Schema(description = "유저 검색 결과 리스트")
//    private List<SearchUserListRes> users;
    @Schema(description = "전체 페이지")
    private int totalPages;
    @Schema(description = "전체 개수")
    private long totalElements;

//    public SearchRes(Page<SearchRoomListRes> page) {
//        rooms = page.getContent();
//    }
//
//    public SearchRes(Page<SearchPortfolioListRes> page) {
//        portfolios = page.getContent();
//    }
//
//    public SearchRes(Page<SearchUserListRes> page) {
//        users = page.getContent();
//    }
}
