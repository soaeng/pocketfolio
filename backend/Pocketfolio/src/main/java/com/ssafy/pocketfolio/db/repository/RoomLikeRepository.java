package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomLikeRepository extends JpaRepository<RoomLike, Long> {
    Boolean existsByUser_UserSeqAndRoom_RoomSeq(long userSeq, long roomSeq);
    void deleteByRoom_RoomSeqAndUser_UserSeq(long roomSeq, long userSeq);
    Long countAllByRoom_RoomSeq(Long roomSeq);
    List<RoomLike> findAllByUser_UserSeq(long userSeq);
    @Query(value = "SELECT room_seq FROM room_like GROUP BY room_seq ORDER BY count(user_seq) DESC LIMIT ?1", nativeQuery = true)
    List<Long> findRoomBestList(int limit);
}
