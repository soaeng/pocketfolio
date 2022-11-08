package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.RoomLike;
import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomLikeRepository extends JpaRepository<RoomLike, Long> {
    boolean existsByUser(User user);
    void deleteByRoomAndUser(Room room, User user);
    Long countAllByRoom_RoomSeq(Long roomSeq);
    List<RoomLike> findAllByUser(User user);
    @Query(value = "SELECT room_seq FROM room_like GROUP BY room_seq ORDER BY count(user_seq) DESC;", nativeQuery = true)
    List<Long> findRoomBestList();
}
