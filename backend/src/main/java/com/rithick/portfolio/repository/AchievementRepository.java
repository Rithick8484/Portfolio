package com.rithick.portfolio.repository;

import com.rithick.portfolio.entity.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    List<Achievement> findAllByOrderByDisplayOrderAsc();
}
