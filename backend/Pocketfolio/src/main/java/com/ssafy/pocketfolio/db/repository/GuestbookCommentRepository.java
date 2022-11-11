package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.GuestbookComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GuestbookCommentRepository extends JpaRepository<GuestbookComment, Long> {
    List<GuestbookComment> findAllByGuestbook_GuestbookSeq(long guestbookSeq);
}
