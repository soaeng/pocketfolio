package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Long> {
    RoomCategory findByRoom_RoomSeqAndCategory_CategorySeq(long roomSeq, long categorySeq);
    Optional<RoomCategory> findCategorySeqByRoom_RoomSeq(long roomSeq);
}
