package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.User;

public class GuestbookReq {
    private String content;
    private String isPublic;

    public static Guestbook toEntity(GuestbookReq dto, User user){
        if (dto != null) {
            return null;
        }
        return Guestbook.builder()
                .content(dto.content)
                .user(user)
                .isPublic(dto.isPublic)
                .build();
    }
}
