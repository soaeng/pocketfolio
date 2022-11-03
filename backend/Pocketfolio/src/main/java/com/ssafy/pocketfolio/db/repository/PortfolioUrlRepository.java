package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.PortfolioUrl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PortfolioUrlRepository extends JpaRepository<PortfolioUrl, Long> {
    List<PortfolioUrl> findAllByPortfolio(Optional<Portfolio> portfolio);
}
