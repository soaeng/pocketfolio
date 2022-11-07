package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.RoomLike;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.view.RoomBestListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomLikeRepository extends JpaRepository<RoomLike, Long> {
    boolean existsByUser(User user);
    void deleteByRoomAndUser(Room room, User user);
    Long countAllByRoom(Room room);
    List<RoomLike> findAllByUser(User user);

    @Query(value = "SELECT r.*, count(rl.user_seq) AS `count` FROM room r " +
            "JOIN room_like AS rl ON r.room_seq = rl.room_seq " +
            "GROUP BY rl.room_seq ORDER BY `count` DESC;", nativeQuery = true)
    List<RoomBestListView> findRoomLikeCount();
}
