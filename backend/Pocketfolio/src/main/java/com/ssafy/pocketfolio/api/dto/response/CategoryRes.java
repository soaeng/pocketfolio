package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Category;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@Tag(name = "CategoryRes", description = "카테고리 목록 Response")
public class CategoryRes {
    @Schema(description = "카테고리 번호")
    private Long categorySeq;
    @Schema(description = "카테고리 이름")
    private String name;

    public static CategoryRes toDto(Category entity){
        return CategoryRes.builder()
                .categorySeq(entity.getCategorySeq())
                .name(entity.getName())
                .build();
    }
}
