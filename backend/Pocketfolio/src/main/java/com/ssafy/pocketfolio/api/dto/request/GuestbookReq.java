package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.User;

public class GuestbookReq {
    private String content;
    private User user;
    private String isPublic;

    public static Guestbook toEntity(GuestbookReq dto){
        if (dto != null) {
            return null;
        }
        return Guestbook.builder()
                .content(dto.content)
                .user(dto.user)
                .isPublic(dto.isPublic)
                .build();
    }
}
