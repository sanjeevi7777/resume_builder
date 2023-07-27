package com.example.demo.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.*;
import org.springframework.stereotype.Repository;
@Repository
public interface Sign_up extends JpaRepository<SignUp, Integer>
{
	SignUp findById(int id);
}