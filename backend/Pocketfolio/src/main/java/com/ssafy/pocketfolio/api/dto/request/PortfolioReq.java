package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.TagDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;

import java.time.LocalDateTime;
import java.util.List;

public class PortfolioReq {
    private String name;
    private String summary;
    private String thumbnail;
    private LocalDateTime created;
    private List<PortfolioUrlDto> url;
    private List<TagDto> tag;

    public static Portfolio toEntity(PortfolioReq res) {
        return Portfolio.builder()
                .name(res.name)
                .summary(res.summary)
                .thumbnail(res.thumbnail)
                .created(res.created)
                .build();
    }
}
