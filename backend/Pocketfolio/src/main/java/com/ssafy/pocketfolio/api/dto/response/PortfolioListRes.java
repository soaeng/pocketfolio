package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import lombok.Builder;

import java.util.List;
import java.util.stream.Collectors;

@Builder
public class PortfolioListRes {
    private Long portSeq;       // 포트폴리오 번호
    private String name;        // 포트폴리오 제목
    private List<String> tags;      // 포트폴리오 태그 목록

    public static PortfolioListRes toDto(Portfolio entity, List<Tag> tags) {
        if (entity == null) {
            return null;
        }
        return PortfolioListRes.builder()
                .portSeq(entity.getPortSeq())
                .name(entity.getName())
                .tags(tags.stream().map(Tag::getName).collect(Collectors.toList()))
                .build();
    }
}
