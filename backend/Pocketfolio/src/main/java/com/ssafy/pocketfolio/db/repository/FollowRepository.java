package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Follow;
import com.ssafy.pocketfolio.db.view.FollowListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {

	Optional<Follow> findByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);

	@Query(value = "select ifnull((select follow_seq from follow where user_from = ?1 and user_to = user_seq), 0) as follow_seq," +
			"u.user_seq, u.name, u.profile_pic from user u inner join follow f on u.user_seq = f.user_from" +
			"where f.user_to = ?2", nativeQuery = true)
	Optional<FollowListView> findFollowerListByUser(long myUserSeq, long targetUserSeq);

	@Query(value = "select ifnull((select follow_seq from follow where user_from = ?1 and user_to = user_seq), 0) as follow_seq," +
			"u.user_seq, u.name, u.profile_pic from user u inner join follow f on u.user_seq = f.user_to" +
			"where f.user_from = ?2", nativeQuery = true)
	Optional<FollowListView> findFollowingListByUser(long myUserSeq, long targetUserSeq);



}
