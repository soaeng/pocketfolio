package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Relation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RelationRepository extends JpaRepository<Relation, Long> {
    Relation findByUserSeq_UserSeq(long userSeq);
}
