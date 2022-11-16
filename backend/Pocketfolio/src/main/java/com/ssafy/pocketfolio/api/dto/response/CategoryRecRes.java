package com.ssafy.pocketfolio.api.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

import java.util.List;

@Builder
@Tag(name = "CategoryRecRes", description = "카테고리별 추천 Response")
public class CategoryRecRes {
    @Schema(description = "카테고리 이름")
    private String name;
    @Schema(description = "카테고리별 추천 포켓 리스트")
    private List<MainPocketListRes> recommend;

    public static CategoryRecRes toDto(String name, List<MainPocketListRes> recommend) {
        return CategoryRecRes.builder()
                .name(name)
                .recommend(recommend)
                .build();
    }
}
