package com.ssafy.pocketfolio.db.view;

public interface SearchRoomListView {
    public Long getRoomSeq();
    public String getThumbnail();
    public String getName();
    public Long getUserSeq();
    public String getUserName();
    public String getUserProfilePic();
    public Long getLike();
    public Long getHit();
    public Integer getIsLiked();
    public String getCategoryName();

}
