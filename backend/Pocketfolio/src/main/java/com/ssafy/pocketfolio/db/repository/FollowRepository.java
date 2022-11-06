package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {

	Optional<Follow> findByUserFrom_UserSeqAndUserTo_UserSeq(long userFrom, long userTo);

}
