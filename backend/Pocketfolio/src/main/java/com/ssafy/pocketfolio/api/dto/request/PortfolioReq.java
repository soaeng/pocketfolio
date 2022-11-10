package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@ToString
public class PortfolioReq {
    @Schema(description = "포트폴리오 제목")
    private String name;
    @Schema(description = "개요")
    private String summary;
    @Schema(description = "태그 리스트")
    private String[] tags;

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
