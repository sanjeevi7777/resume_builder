package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Professional;
import com.example.demo.respository.Professional_repo;

@Service
public class Professional_service {
	 @Autowired
	  private Professional_repo prorepo;
			public Professional saveProfessionalDetails(Professional professional) {
				// TODO Auto-generated method stub
				return  prorepo.save(professional) ;
			}
			public Professional updateProfessionalDetails(Professional professional) {
				// TODO Auto-generated method stub
				return prorepo.save(professional);
			}

			public List<Professional> findAllProfessionalDetails() {
				// TODO Auto-generated method stub
				return (List<Professional>)prorepo.findAll();
			}

			public Professional findProfessionalDetails(int user_id) {
				// TODO Auto-generated method stub
				return prorepo.findById(user_id);
			}

			public void deleteProfessionalDetails(int user_id) {
				// TODO Auto-generated method stub
			       prorepo.deleteById(user_id);
			}			
}
