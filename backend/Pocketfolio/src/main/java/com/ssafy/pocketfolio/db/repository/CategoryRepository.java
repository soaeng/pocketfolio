package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
