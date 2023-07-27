package com.example.demo.service;
import org.springframework.stereotype.Service;

import com.example.demo.model.Educational;
import com.example.demo.respository.Educational_repo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
@Service
public class Educational_service {

	    @Autowired
	    private Educational_repo edurepo;
		public Educational saveEducationalDetails(Educational edu) {
			return  edurepo.save(edu) ;
		}
		public Educational updateEducationalDetails(Educational edu) {

			return edurepo.save(edu);
		}

		public List<Educational> findAllEducationalDetails() {
			return (List<Educational>)edurepo.findAll();
		}

		public Educational findEducationalDetails(int user_id) {
			return edurepo.findById(user_id);
		}
		public Educational findEducationalDetailsByFid(int user_id) {
			return edurepo.findByFid(user_id);
		}

		public void deleteEducationalDetails(int user_id) {
			edurepo.deleteById(user_id);
			
		}
//		public List<Student> getStudentSorted(String field){
//			return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//		}
	//
//		//pagination
//		public List<Student> getStudentWithPagination( int offset,int pageSize){
//			Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//			return page.getContent();
//		}
////		//sorting and paging
//		public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//			PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//			Page<Student> page = studentRepo.findAll(paging);
//			return page.getContent();
//		}

	}

