package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.TagDto;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Getter
@ToString
public class PortfolioReq {
    private String name;                    // 포트폴리오 제목
    private String summary;                 // 개요
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
