package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.TagDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.User;

import java.time.LocalDateTime;
import java.util.List;

public class PortfolioReq {
    private String name;                    // 포트폴리오 제목
    private String summary;                 // 개요
    private String thumbnail;               // 썸네일
    private LocalDateTime created;          // 생성일
    private List<PortfolioUrlDto> urls;     // 포트폴리오 첨부 url
    private List<TagDto> tags;              // 태그 리스트

    public static Portfolio toEntity(PortfolioReq req, User user) {
        if(req == null) {
            return null;
        }

        return Portfolio.builder()
                .name(req.name)
                .summary(req.summary)
                .thumbnail(req.thumbnail)
                .user(user)
                .created(req.created)
                .build();
    }

}
