package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.GuestbookComment;
import com.ssafy.pocketfolio.db.entity.User;

public class GuestbookCommentReq {
    private String content;
    private String isPublic;
    private Guestbook guestbook;
    private User user;

    public static GuestbookComment toEntity(GuestbookCommentReq dto){
        if (dto != null) {
            return null;
        }
        return GuestbookComment.builder()
                .content(dto.content)
                .isPublic(dto.isPublic)
                .guestbook(dto.guestbook)
                .user(dto.user)
                .build();
    }
}
