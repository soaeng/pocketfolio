package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Oauth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OauthRepository extends JpaRepository<Oauth, Long> {

	Optional<Oauth> findByOauthKey(String oauthKey);
	Optional<Oauth> findByUser_UserSeqAndOauthFrom(long userSeq, String oauthFrom);

}
