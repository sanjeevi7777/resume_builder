package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Personal;
import com.example.demo.respository.Personal_repo;

@Service
public class Personal_service {
	 @Autowired
	  private Personal_repo perrepo;
			public Personal savePersonalDetails(Personal personal) {
				// TODO Auto-generated method stub
				return  perrepo.save(personal) ;
			}
			public Personal updatePersonalDetails(Personal personal) {
				// TODO Auto-generated method stub
				return perrepo.save(personal);
			}

			public List<Personal> findAllPersonalDetails() {
				// TODO Auto-generated method stub
				return (List<Personal>)perrepo.findAll();
			}

			public Personal findPersonalDetails(int user_id) {
				// TODO Auto-generated method stub
				return perrepo.findById(user_id);
			}

			public void deletePersonalDetails(int user_id) {
				// TODO Auto-generated method stub
			       perrepo.deleteById(user_id);
			}			
}
