package com.example.demo.respository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.*;
import org.springframework.stereotype.Repository;
@Repository
public interface Projects_repo extends JpaRepository<Projects, Integer>
{
	Projects findById(int id);
}