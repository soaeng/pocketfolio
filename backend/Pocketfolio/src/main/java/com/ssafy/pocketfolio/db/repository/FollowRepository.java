package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Follow;
import com.ssafy.pocketfolio.db.view.FollowListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {

	Optional<Follow> findByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);

	// followSeq이 0이면 팔로우하지 않았다는 뜻
	@Query(value = "select ifnull((select follow_seq from follow where user_from = ?1 and user_to = user_seq), 0) as followSeq, " +
			"u.user_seq as userSeq, u.name, ifnull(u.profile_pic, \"\") as profilePic from user u inner join follow f on u.user_seq = f.user_from " +
			"where f.user_to = ?2 order by f.follow_seq desc", nativeQuery = true)
	List<FollowListView> findFollowerListByUser(long myUserSeq, long targetUserSeq);

	@Query(value = "select ifnull((select follow_seq from follow where user_from = ?1 and user_to = user_seq), 0) as followSeq, " +
			"u.user_seq as userSeq, u.name, ifnull(u.profile_pic, \"\") as profilePic from user u inner join follow f on u.user_seq = f.user_to " +
			"where f.user_from = ?2 order by f.follow_seq desc", nativeQuery = true)
	List<FollowListView> findFollowingListByUser(long myUserSeq, long targetUserSeq);

	void deleteByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);

}
