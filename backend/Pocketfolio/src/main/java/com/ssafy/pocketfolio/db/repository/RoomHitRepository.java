package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.RoomHit;
import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface RoomHitRepository extends JpaRepository<RoomHit, Long>  {
    @Query(value = "SELECT COUNT(*) FROM room_hit WHERE hit_date = CURDATE() AND room_seq = ?1", nativeQuery = true)
    Long countRoomHitToday(long roomSeq);
    Long countAllByRoom(Room room);
    boolean existsRoomHitByUserAndHitDateEquals(User user, LocalDate date);
}
