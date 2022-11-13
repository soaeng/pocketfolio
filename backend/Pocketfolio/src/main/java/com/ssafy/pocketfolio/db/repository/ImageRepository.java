package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
