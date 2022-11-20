package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.FollowListRes;
import com.ssafy.pocketfolio.db.entity.Follow;
import com.ssafy.pocketfolio.db.repository.FollowRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.db.view.FollowListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Log4j2
@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    @Override
    public Long insertFollow(long userFrom, long userTo) {
        Follow follow = Follow.builder()
                .userFrom(userRepository.getReferenceById(userFrom))
                .userTo(userRepository.getReferenceById(userTo))
                .build();
        follow = followRepository.save(follow);
        return follow.getFollowSeq();
    }

    @Override
    public void deleteFollow(long followSeq) {
        followRepository.deleteById(followSeq);
    }

    @Override
    @Transactional
    public void deleteFollowByUserSeq(long userFrom, long userTo) {
        followRepository.deleteByUserFrom_UserSeqAndUserTo_UserSeq(userFrom, userTo);
    }

    @Override
    public Long findFollowSeq(long userFrom, long userTo) { // 팔로우 안 됐을 경우 0 return
        Optional<Follow> followO = followRepository.findByUserFrom_UserSeqAndUserTo_UserSeq(userFrom, userTo);
        if (!followO.isPresent()) {
            return 0L;
        }
        return followO.get().getFollowSeq();
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
