package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Long> {
    RoomCategory findByRoom_RoomSeq(long roomSeq);
    Optional<RoomCategory> findCategorySeqByRoom_RoomSeq(long roomSeq);
    boolean existsByRoom_RoomSeq(long roomSeq);
    void deleteAllByRoom_RoomSeq(long roomSeq);
}
