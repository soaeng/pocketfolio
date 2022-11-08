package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Guestbook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestbookRepository extends JpaRepository<Guestbook, Long> {
}
