package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Arrange;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArrangeRepository extends JpaRepository<Arrange, Long> {

	List<Arrange> findByRoom_RoomSeq(long roomSeq);


}
