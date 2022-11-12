package com.ssafy.pocketfolio.db.view;

import java.time.LocalDateTime;

public interface RoomBestListView {
    Long getRoomSeq();
    String getName();
    Long getUserSeq();
    Integer getTheme();
    String getThumbnail();
    String getIsMain();
    String getPrivacy();
    LocalDateTime getCreated();
    LocalDateTime getUpdated();
    Long getCount();
}
