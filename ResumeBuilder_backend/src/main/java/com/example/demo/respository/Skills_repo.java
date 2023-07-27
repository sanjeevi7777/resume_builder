package com.example.demo.respository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.*;
import org.springframework.stereotype.Repository;
@Repository
public interface Skills_repo extends JpaRepository<Skills, Integer>
{
	Skills findById(int id);
}