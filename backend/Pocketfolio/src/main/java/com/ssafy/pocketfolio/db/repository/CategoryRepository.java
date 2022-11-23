package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "SELECT `c`.`name` AS `category` FROM `category` AS `c` JOIN `room_category` AS `rc` ON `c`.`category_seq` = `rc`.`category_seq` WHERE `rc`.`room_seq` = ?1 ;", nativeQuery = true)
    String findCategoryByRoomSeq(long roomSeq);
}
