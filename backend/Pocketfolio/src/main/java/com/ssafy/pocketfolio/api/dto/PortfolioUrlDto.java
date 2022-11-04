package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import lombok.Builder;


@Builder
public class PortfolioUrlDto {

    private Long portUrlSeq;        // 포트폴리오 url 번호
    private Portfolio portfolio;    // 포트폴리오 번호
    private String url;             // 포트폴리오 url
    private String name;            // url 이름
    private int type;               // 포트폴리오 타입 (이미지, 동영상, 링크, pdf 등의 타입)

    public static PortfolioUrl toEntity(PortfolioUrlDto res) {
        if (res == null) {
            return null;
        }
        return PortfolioUrl.builder()
                .portfolio(res.portfolio)
                .url(res.url)
                .name(res.name)
                .type(res.type)
                .build();
    }

    public static PortfolioUrlDto toDto(String name, String path, Portfolio portfolio){
        if (name == null || path == null || portfolio == null) {
            return null;
        }
        return PortfolioUrlDto.builder()
                .portfolio(portfolio)
                .url(path)
                .name(name)
                .build();
    }
}
