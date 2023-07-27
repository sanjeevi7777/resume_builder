package com.example.demo.respository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.*;
import org.springframework.stereotype.Repository;
@Repository
public interface Professional_repo extends JpaRepository<Professional, Integer>
{
	Professional findById(int id);
}