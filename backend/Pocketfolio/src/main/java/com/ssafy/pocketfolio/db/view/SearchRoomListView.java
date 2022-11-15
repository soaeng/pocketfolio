package com.ssafy.pocketfolio.db.view;

public interface SearchRoomListView {
    public Long getRoomSeq();
    public String getThumbnail();
    public String getName();
    public Long getUserSeq();
    public String getUserName();
    public String getUserProfilePic();
    public Integer getLike();
    public Integer getHit();
    public Integer getIsLiked();
    public String getCategoryName();

}
