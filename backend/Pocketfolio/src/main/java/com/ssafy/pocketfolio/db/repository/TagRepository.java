package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
