package com.ssafy.pocketfolio.api.dto;

import com.ssafy.pocketfolio.db.entity.PortfolioUrl;

public class PortfolioUrlDto {
    private Long portUrlSeq;    // 포트폴리오 url 번호
    private String url;         // 포트폴리오 url
    private String name;        // url 이름
    private int type;           // 포트폴리오 타입 (이미지, 동영상, 링크, pdf 등의 타입)
    public static PortfolioUrl toEntity(PortfolioUrlDto res) {
        return PortfolioUrl.builder()
                .portUrlSeq(res.portUrlSeq)
                .url(res.url)
                .name(res.name)
                .type(res.type)
                .build();
    }
}
