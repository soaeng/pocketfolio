package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

	@Query(value = "select * from item limit ?1 offset ?2", nativeQuery = true)
	List<Item> findAll(int limit, int offset);

	@Query(value = "select * from item where item_category_seq = ?1 limit ?2 offset ?3", nativeQuery = true)
	List<Item> findByCategorySeq(long itemCategorySeq, int limit, int offset);

//	@Query(value = "select category from item group by category order by count(*) desc", nativeQuery = true)
//	List<String> findItemCategoryList();

	Item findByNameEngEquals(String nameEng);
}
