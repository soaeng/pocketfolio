package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import com.ssafy.pocketfolio.db.entity.Tag;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.ToString;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@ToString
@io.swagger.v3.oas.annotations.tags.Tag(name = "PortfolioRes", description = "포트폴리오 Response")
public class PortfolioRes {
    @Schema(description = "포트폴리오 번호")
    private long portSeq;
    @Schema(description = "제목")
    private String name;
    @Schema(description = "개요")
    private String summary;
    @Schema(description = "썸네일 url")
    private String thumbnail;
    @Schema(description = "썸네일 명")
    private String thumbnailName;
    @Schema(description = "작성자 회원 번호")
    private long userSeq;
    @Schema(description = "생성일")
    private String created;
    @Schema(description = "수정일")
    private String updated;
    @Schema(description = "포트폴리오 url 리스트")
    private List<PortfolioUrlDto> urls;
    @Schema(description = "태그 리스트")
    private List<String> tags;
    
    public static PortfolioRes toDto(Portfolio entity, List<PortfolioUrl> urls, List<Tag> tags) {
        return PortfolioRes.builder()
                .portSeq(entity.getPortSeq())
                .name(entity.getName())
                .summary(entity.getSummary())
                .thumbnail(entity.getThumbnail())
                .thumbnailName(entity.getThumbnailName())
                .userSeq(entity.getUser().getUserSeq())
                .created(entity.getCreated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .updated(entity.getUpdated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .urls(urls.stream().map(PortfolioUrlDto::toDto).collect(Collectors.toList()))
                .tags(tags.stream().map(Tag::getName).collect(Collectors.toList()))
                .build();
    }

}
