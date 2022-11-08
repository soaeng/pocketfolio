package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.GuestbookComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestbookCommentRepository extends JpaRepository<GuestbookComment, Long> {
}
