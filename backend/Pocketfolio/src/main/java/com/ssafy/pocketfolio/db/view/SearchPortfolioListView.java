package com.ssafy.pocketfolio.db.view;

public interface SearchPortfolioListView {
    public Long getPortSeq();
    public String getName();
    public Long getRoomSeq();
    public String getRoomName();
    public String getRoomThumbnail();
    public Long getUserSeq();
    public String getUserName();
    public String getUserProfilePic();
    public Integer getLike();
    public Integer getHit();
    public String getTags();

}
