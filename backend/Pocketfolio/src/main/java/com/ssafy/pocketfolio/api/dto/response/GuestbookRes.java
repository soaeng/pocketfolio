package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.User;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Builder
@Tag(name = "GuestbookRes", description = "방명록 Response")
public class GuestbookRes {
    private Long guestbookSeq;
    private String content;
    private String isPublic;
    private String created;
    private Long roomSeq;
    private Long userSeq;
    private String userName;
    private String profile;
    private List<GuestbookCommentRes> commentList;

    public static GuestbookRes toDto(Guestbook entity, List<GuestbookCommentRes> commentList){
        if(entity == null){
            return null;
        }
        return GuestbookRes.builder()
                .guestbookSeq(entity.getGuestbookSeq())
                .content(entity.getContent())
                .isPublic(entity.getIsPublic())
                .created(entity.getCreated().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .roomSeq(entity.getRoom().getRoomSeq())
                .userSeq(entity.getUser().getUserSeq())
                .userName(entity.getUser().getName())
                .profile(entity.getUser().getProfilePic())
                .commentList(commentList)
                .build();
    }
}
