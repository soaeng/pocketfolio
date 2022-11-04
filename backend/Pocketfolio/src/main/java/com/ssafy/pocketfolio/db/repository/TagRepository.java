package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
    // 태그 목록 조회
    List<Tag> findAllByPortfolio(Portfolio portfolio);
    // Tag 삭제
    void deleteAllByPortfolio(Portfolio portfolio);
}
