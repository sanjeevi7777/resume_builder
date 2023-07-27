package com.example.demo.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.*;
import org.springframework.stereotype.Repository;
@Repository
public interface Personal_repo extends JpaRepository<Personal, Integer>
{
	Personal findById(int id);
}