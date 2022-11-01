package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.TagDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;

import java.time.LocalDateTime;
import java.util.List;

public class PortfolioRes {
    private Long portSeq;               // 포트폴리오 번호
    private String name;                // 제목
    private String summary;             // 개요
    private String thumbnail;           // 썸네일 url
    private LocalDateTime created;      // 생성일
    // TODO: 얘는 데이터 통신 시 필요. .. 한지 . . . ... 일단 보류
    private LocalDateTime updated;      // 수정일
    private List<PortfolioUrlDto> url;  // 포트폴리오 url 리스트
    private List<TagDto> tagDtoList;    // 태그 리스트

    public static Portfolio toEntity(PortfolioRes res) {
        return Portfolio.builder()
                .portSeq(res.portSeq)
                .name(res.name)
                .summary(res.summary)
                .thumbnail(res.thumbnail)
                .created(res.created)
                .updated(res.updated)
                .build();
    }
}
