package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public class GuestbookRes {
    private Long guestbookSeq;
    private String content;
    private String isPublic;
    private LocalDateTime created;
    private Long roomSeq;
    private Long userSeq;
    private String userName;

    public static GuestbookRes toDto(Guestbook entity){
        if(entity == null){
            return null;
        }
        return GuestbookRes.builder()
                .guestbookSeq(entity.getGuestbookSeq())
                .content(entity.getContent())
                .isPublic(entity.getIsPublic())
                .created(entity.getCreated())
                .roomSeq(entity.getRoom().getRoomSeq())
                .userSeq(entity.getUser().getUserSeq())
                .userName(entity.getUser().getName())
                .build();
    }
}
