package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Oauth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OauthRepository extends JpaRepository<Oauth, Long> {

	Optional<Oauth> findByKey(String key);
	Optional<Oauth> findByUser_UserSeqAndFrom(long userSeq, String from);

}
