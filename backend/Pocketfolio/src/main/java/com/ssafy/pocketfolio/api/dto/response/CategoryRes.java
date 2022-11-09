package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Category;
import lombok.Builder;

@Builder
public class CategoryRes {
    private Long categorySeq;   // 카테고리 번호
    private String name;        // 카테고리 이름

    public static CategoryRes toDto(Category entity){
        return CategoryRes.builder()
                .categorySeq(entity.getCategorySeq())
                .name(entity.getName())
                .build();
    }
}
