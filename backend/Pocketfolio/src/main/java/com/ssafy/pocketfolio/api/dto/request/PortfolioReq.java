package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class PortfolioReq {
    private String name;                    // 포트폴리오 제목
    private String summary;                 // 개요
    private String thumbnail;               // 썸네일
    private List<PortfolioUrlDto> urls;     // 포트폴리오 첨부 url
    private String[] tags;              // 태그 리스트

    public static Portfolio toEntity(PortfolioReq req, String thumbnail, User user) {
        if (req == null) {
            return null;
        }

        return Portfolio.builder()
                .name(req.name)
                .summary(req.summary)
                .thumbnail(thumbnail)
                .user(user)
                .build();
    }

}
