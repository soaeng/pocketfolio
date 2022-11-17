package com.ssafy.pocketfolio.db.view;

public interface SearchUserListView {
    public Long getUserSeq();
    public String getName();
    public String getProfilePic();
    public String getDescribe();
    public Long getFollowerTotal();
    public Long getFollowingTotal();
    public Integer getHasFollowed();
}
