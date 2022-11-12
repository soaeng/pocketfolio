package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Long> {
    RoomCategory findByRoom_RoomSeqAndCategory_CategorySeq(long roomSeq, long categorySeq);
    RoomCategory findCategorySeqByRoom_RoomSeq(long roomSeq);
}
