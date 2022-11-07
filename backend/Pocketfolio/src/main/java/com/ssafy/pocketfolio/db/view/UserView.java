package com.ssafy.pocketfolio.db.view;

import java.time.LocalDate;

public interface UserView {
    public String getEmail();
    public String getName();
    public String getProfilePic();
    public LocalDate getBirth();
    public Long getFollowerTotal();
    public Long getFollowingTotal();
    public String getDescribe();
}
