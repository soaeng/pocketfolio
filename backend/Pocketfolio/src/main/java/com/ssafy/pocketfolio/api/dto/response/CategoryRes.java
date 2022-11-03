package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Category;

public class CategoryRes {
    private Long categorySeq;   // 카테고리 번호
    private String name;        // 카테고리 이름

    public static Category toEntity(CategoryRes res){
        return Category.builder()
                .categorySeq(res.categorySeq)
                .name(res.name)
                .build();
    }
}
