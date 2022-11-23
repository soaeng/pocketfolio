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
	@Query(value = "SELECT ifnull((SELECT `follow_seq` FROM `follow` WHERE `user_from` = ?1 AND `user_to` = `u`.`user_seq`), 0) AS `followSeq`, " +
			"`u`.`user_seq` AS `userSeq`, `u`.`name`, `u`.`profile_pic` AS `profilePic`, `r`.`room_seq` AS `roomSeq` " +
			"FROM `user` AS `u` JOIN `follow` AS `f` ON `u`.`user_seq` = `f`.`user_from` " +
			"JOIN `room` AS `r` ON `r`.`user_seq` = `u`.`user_seq` " +
			"WHERE `f`.`user_to` = ?2 AND `r`.`is_main` = 'T' ORDER BY `f`.`follow_seq` DESC ; ", nativeQuery = true)
	List<FollowListView> findFollowerListByUser(long myUserSeq, long targetUserSeq);

	@Query(value = "SELECT ifnull((SELECT `follow_seq` FROM `follow` WHERE `user_from` = ?1 AND `user_to` = `u`.`user_seq`), 0) AS `followSeq`, " +
			"`u`.`user_seq` AS `userSeq`, `u`.`name`, `u`.`profile_pic` AS `profilePic`, `r`.`room_seq` AS `roomSeq` " +
			"FROM `user` AS `u` JOIN `follow` AS `f` ON `u`.`user_seq` = `f`.`user_to` " +
			"JOIN `room` AS `r` ON `r`.`user_seq` = `u`.`user_seq` " +
			"WHERE `f`.`user_from` = ?2 AND `r`.`is_main` = 'T' ORDER BY `f`.`follow_seq` DESC; ", nativeQuery = true)
	List<FollowListView> findFollowingListByUser(long myUserSeq, long targetUserSeq);

	void deleteByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);
	Boolean existsByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);
}
