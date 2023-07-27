package com.example.demo.controller;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.*;
import com.example.demo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class SignUp_controller{
	@Autowired
	private SignUp_details ServiceImp;
	@PostMapping("/saveSignIn")
	public SignUp saveSignInDetails(@RequestBody SignUp sign){
		System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	@GetMapping("/getSignIn")
	public SignUp findStudent(@RequestParam int id){
		return ServiceImp.findSignInDetails(id);
	}
	@GetMapping("/getAllSignIn")
	public List<SignUp>findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
	@PutMapping("/updateSignIn")
	public SignUp updateSignInDetails(@RequestBody SignUp sign) {
		return ServiceImp.updateSignInDetails(sign);
	}
	@DeleteMapping("deleteSignIn")
	public String deleteSignInDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteSignInDetails(id);
		return "Signin Details Deleted !";
	} 
	
}