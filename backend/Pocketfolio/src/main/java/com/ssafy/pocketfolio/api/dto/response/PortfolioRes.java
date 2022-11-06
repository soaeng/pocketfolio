package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.TagDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import com.ssafy.pocketfolio.db.entity.Tag;
import lombok.Builder;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@ToString
public class PortfolioRes {
    private long portSeq;               // 포트폴리오 번호
    private String name;                // 제목
    private String summary;             // 개요
    private String thumbnail;           // 썸네일 url
    private LocalDateTime created;      // 생성일
    private LocalDateTime updated;      // 수정일
    private List<PortfolioUrlDto> urls; // 포트폴리오 url 리스트
    private List<TagDto> tags;          // 태그 리스트

    public static PortfolioRes toDto(Portfolio entity, List<PortfolioUrl> urls, List<Tag> tags) {
        return PortfolioRes.builder()
                .portSeq(entity.getPortSeq())
                .name(entity.getName())
                .summary(entity.getSummary())
                .thumbnail(entity.getThumbnail())
                .created(entity.getCreated())
                .updated(entity.getUpdated())
                .urls(urls.stream().map(PortfolioUrlDto::toDto).collect(Collectors.toList()))
                .tags(tags.stream().map(TagDto::toDto).collect(Collectors.toList()))
                .build();
    }

}
