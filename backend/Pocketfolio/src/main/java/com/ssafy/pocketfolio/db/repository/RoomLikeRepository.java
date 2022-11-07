package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Room;
import com.ssafy.pocketfolio.db.entity.RoomLike;
import com.ssafy.pocketfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomLikeRepository extends JpaRepository<RoomLike, Long> {
    boolean existsByUser(User user);
    void deleteByRoomAndUser(Room room, User user);
    Long countAllByRoom(Room room);
}
