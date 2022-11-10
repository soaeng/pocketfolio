package com.ssafy.pocketfolio.api.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;

@Getter
@Tag(name = "GuestbookReq", description = "방명록 Request DTO")
public class GuestbookReq {
    @Schema(description = "방명록 내용", example = "하이루욤")
    private String content;
    @Schema(description = "공개 여부", example = "T")
    private String isPublic;
}
