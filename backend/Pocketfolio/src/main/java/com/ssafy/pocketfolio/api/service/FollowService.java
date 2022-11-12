package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.FollowListRes;

import java.util.List;

public interface FollowService {

    Long insertFollow(long userFrom, long userTo);

    // 일단 delete 두 개, 나중에 통일할 수 있으면 통일
    void deleteFollow(long followSeq);
    void deleteFollowByUserSeq(long userFrom, long userTo);

    Long findFollowSeq(long userFrom, long userTo);
    List<FollowListRes> findFollowerList(long myUserSeq, long targetUserSeq);
    List<FollowListRes> findFollowingList(long myUserSeq, long targetUserSeq);
}
