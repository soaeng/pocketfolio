package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.GuestbookComment;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

import java.time.format.DateTimeFormatter;

@Builder
@Tag(name = "GuestbookCommentRes", description = "방명록 댓글 Response")
public class GuestbookCommentRes {
    private Long commentSeq;
    private String content;
    private String isPublic;
    private String created;
    public static GuestbookCommentRes toDto(GuestbookComment entity) {
        if (entity == null) {
            return null;
        }
        return GuestbookCommentRes.builder()
                .commentSeq(entity.getCommentSeq())
                .content(entity.getContent())
                .isPublic(entity.getIsPublic())
                .created(entity.getCreated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .build();
    }
}
