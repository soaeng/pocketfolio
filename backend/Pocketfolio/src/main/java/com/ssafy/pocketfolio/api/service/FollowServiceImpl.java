package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.FollowListRes;
import com.ssafy.pocketfolio.db.entity.Follow;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.FollowRepository;
import com.ssafy.pocketfolio.db.view.FollowListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final FollowRepository followRepository;

    @Override
    public Long insertFollow(long userFrom, long userTo) {
        Follow follow = Follow.builder()
                .userFrom(User.builder().userSeq(userFrom).build())
                .userTo(User.builder().userSeq(userTo).build())
                .build();
        follow = followRepository.save(follow);
        return follow.getFollowSeq();
    }

    @Override
    public void deleteFollow(long followSeq) {
        followRepository.deleteById(followSeq);
    }

    @Override
    public void deleteFollowByUserSeq(long userFrom, long userTo) {
        followRepository.deleteByUserFrom_UserSeqAndUserTo_UserSeq(userFrom, userTo);
    }

    @Override
    public Long findFollowSeq(long userFrom, long userTo) {
        Follow follow = followRepository.findByUserFrom_UserSeqAndUserTo_UserSeq(userFrom, userTo)
                .orElseThrow(() -> new IllegalArgumentException("팔로우 정보가 존재하지 않습니다."));
        return follow.getFollowSeq();
    }

    @Override
    public List<FollowListRes> findFollowerList(long myUserSeq, long targetUserSeq) {
        List<FollowListRes> result = new ArrayList<>();
        List<FollowListView> list = followRepository.findFollowerListByUser(myUserSeq, targetUserSeq);
        list.forEach(view -> result.add(new FollowListRes(view)));
        return result;
    }

    @Override
    public List<FollowListRes> findFollowingList(long myUserSeq, long targetUserSeq) {
        List<FollowListRes> result = new ArrayList<>();
        List<FollowListView> list = followRepository.findFollowingListByUser(myUserSeq, targetUserSeq);
        list.forEach(view -> result.add(new FollowListRes(view)));
        return result;
    }
}
