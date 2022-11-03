package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);
//	List<User> findByNameLikeOrderByCreated(String name);
//	List<User> findByNameLikeOrderByCreatedDesc(String name);
//	@Query
//	List<User> findByNameLikeOrderByFollowers(String name);
//	List<User> findByNameLikeOrderByFollowersDesc(String name);
//	List<User> findByNameLikeOrderByCreated(String name);
//	List<User> findByNameLikeOrderByCreated(String name);
//	List<User> findByNameLikeOrderByCreated(String name);

	int countByEmail(String email);

}
