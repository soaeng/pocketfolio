package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByImageSeqIn(List<Long> imageSeqs);
    void deleteAllByImageSeqIn(List<Long> imageSeqs);
}
