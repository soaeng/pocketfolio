package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.ItemCategory;
import com.ssafy.pocketfolio.db.view.ItemCategoryListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Long> {

	@Query(value = "select c.item_category_seq as itemCategorySeq, c.name_kor as nameKor, (count(*) - 1) div ?1 + 1 as lastPage " +
			"from item_category c inner join item i on c.item_category_seq = i.item_category_seq " +
			"group by c.item_category_seq order by c.item_category_seq", nativeQuery = true)
	List<ItemCategoryListView> findItemCategoryList(int limit);
	ItemCategory findByNameEngEquals(String name);
}
