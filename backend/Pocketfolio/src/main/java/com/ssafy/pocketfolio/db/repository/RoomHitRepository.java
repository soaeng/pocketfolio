package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.RoomHit;
import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface RoomHitRepository extends JpaRepository<RoomHit, Long>  {
    Integer countDistinctByUserAndHitDateEquals(LocalDate date);
    boolean existsRoomHitByUserAnAndHitDateEquals(User user, LocalDate date);
}
