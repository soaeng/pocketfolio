package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Arrange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.HashSet;
import java.util.List;

public interface ArrangeRepository extends JpaRepository<Arrange, Long> {

	List<Arrange> findByRoom_RoomSeqOrderByArrangeSeqDesc(long roomSeq);

	@Query(value = "select arrange_seq from arrange where room_seq = ?1", nativeQuery = true)
	HashSet<Long> findArrangeSeqByRoom_RoomSeq(long roomSeq);

	int countByRoom_RoomSeqAndPortfolio_PortSeq(long roomSeq, long portSeq);

}
