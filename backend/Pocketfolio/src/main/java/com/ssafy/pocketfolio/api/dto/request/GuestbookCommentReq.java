package com.ssafy.pocketfolio.api.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;

@Getter
@Tag(name = "GuestbookCommentReq", description = "방명록 댓글 Request DTO")
public class GuestbookCommentReq {
    @Schema(description = "댓글 내용", example = "댓글 ! !! !!!!")
    private String content;
    @Schema(description = "공개 여부", example = "T")
    private String isPublic;
}
