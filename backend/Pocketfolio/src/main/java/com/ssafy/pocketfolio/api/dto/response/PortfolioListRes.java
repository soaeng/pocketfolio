package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

import java.util.List;
import java.util.stream.Collectors;

@Builder

public class PortfolioListRes {
    @Schema(description = "포트폴리오 번호")
    private Long portSeq;
    @Schema(description = "포트폴리오 제목")
    private String name;
    @Schema(description = "포트폴리오 썸네일")
    private String thumbnail;
    @Schema(description = "포트폴리오 태그 목록")
    private List<String> tags;

    public static PortfolioListRes toDto(Portfolio entity, List<Tag> tags) {
        if (entity == null) {
            return null;
        }
        return PortfolioListRes.builder()
                .portSeq(entity.getPortSeq())
                .name(entity.getName())
                .thumbnail(entity.getThumbnail())
                .tags(tags.stream().map(Tag::getName).collect(Collectors.toList()))
                .build();
    }
}
