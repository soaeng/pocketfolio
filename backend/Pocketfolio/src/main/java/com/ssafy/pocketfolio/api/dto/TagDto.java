package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import lombok.Builder;

@Builder
public class TagDto {
    private Long tagSeq;
    private String name;
    private Portfolio portfolio;

    public static TagDto toDto(Tag entity) {
        if (entity == null) {
            return null;
        }
        return TagDto.builder()
                .tagSeq(entity.getTagSeq())
                .name(entity.getName())
                .build();
    }
}
