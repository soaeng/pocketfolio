package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PortfolioUrlRepository extends JpaRepository<PortfolioUrl, Long> {
    // 포트폴리오 첨부파일 목록 조회
    List<PortfolioUrl> findAllByPortfolio(Portfolio portfolio);

    // 포트폴리오 첨부파일 삭제
    void deleteAllByPortfolio(Portfolio portfolio);
}
