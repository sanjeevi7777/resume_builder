package com.example.demo.service;
import org.springframework.stereotype.Service;

import com.example.demo.model.SignUp;
import com.example.demo.respository.Sign_up;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class SignUp_details{
    @Autowired
    private Sign_up signRepo;
	public SignUp saveSignInDetails(SignUp student) {
		// TODO Auto-generated method stub
		return signRepo.save(student) ;
	}
	public SignUp updateSignInDetails(SignUp student) {
		// TODO Auto-generated method stub
		return signRepo.save(student);
	}

	public List<SignUp> findAllSignInDetails() {
		// TODO Auto-generated method stub
		return (List<SignUp>)signRepo.findAll();
	}

	public SignUp findSignInDetails(int roll) {
		// TODO Auto-generated method stub
		return signRepo.findById(roll);
	}

	public void deleteSignInDetails(int roll) {
		// TODO Auto-generated method stub
		signRepo.deleteById(roll);
		
	}
//	public List<Student> getStudentSorted(String field){
//		return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//
//	//pagination
//	public List<Student> getStudentWithPagination( int offset,int pageSize){
//		Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
////	//sorting and paging
//	public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//		Page<Student> page = studentRepo.findAll(paging);
//		return page.getContent();
//	}

}