package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAllByUser_UserSeq(long userSeq);
    List<Room> findAllByRoomSeqIn(List<Long> roomSeqs);
    @Query(value = "SELECT room_seq FROM room WHERE privacy = 'O' ORDER BY rand() LIMIT 1", nativeQuery = true)
    Long findRoomSeqByPrivacyOrderByRandom();
    List<Room> findRoomByUser_UserSeqAndIsMain(long userSeq, String isMain);
}
