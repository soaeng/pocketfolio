package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;

import java.time.LocalDateTime;

public class GuestbookRes {
    private Long guestbookSeq;
    private String content;
    private String isPublic;
    private LocalDateTime created;
    private Room room;
    private User user;
}
