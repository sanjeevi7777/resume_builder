package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Educational;

@Repository
public interface Educational_repo extends JpaRepository<Educational, Integer> {
    Educational findById(int id);

    @Query("SELECT e FROM Educational e WHERE e.edu_id = :fid")
    Educational findByFid(int fid);
}
