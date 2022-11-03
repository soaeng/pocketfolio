package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import lombok.Builder;

@Builder
public class TagDto {
    private Long tagSeq;
    private String name;
    private Portfolio portfolio;

    public static Tag toEntity(TagDto res) {
        if(res == null) {
            return null;
        }
        return Tag.builder()
                .name(res.name)
                .portfolio(res.portfolio)
                .build();
    }

}
