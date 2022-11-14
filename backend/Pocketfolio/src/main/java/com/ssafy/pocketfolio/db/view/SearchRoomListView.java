package com.ssafy.pocketfolio.db.view;

public interface SearchRoomListView {
    public Long getRoomSeq();
    public String getThumbnail();
    public String getName();
    public String getUserName();
    public String getUserProfilePic();
    public Integer getLike();
    public Integer getHit();
    public Boolean getIsMain();

}
