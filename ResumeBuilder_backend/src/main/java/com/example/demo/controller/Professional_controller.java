package com.example.demo.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Professional;
import com.example.demo.service.Professional_service;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class Professional_controller {
	@Autowired
	private Professional_service ServiceImp;
	@PostMapping("/savePro")
	public Professional saveProfessionalDetails(@RequestBody Professional per){
	    ServiceImp.saveProfessionalDetails(per);
	    System.out.println("Professional save works properly!");
        return per;
	}
	@GetMapping("/getPro")
	public Professional findProfessionalDetails(@RequestParam int id){
		return ServiceImp.findProfessionalDetails(id);
	}
	@GetMapping("/getAllPro")
	public List<Professional>findAllProfessionalDetails(){
		return ServiceImp.findAllProfessionalDetails();
	}
	@PutMapping("/updatePro")
	public Professional updateProfessionalDetails(@RequestBody Professional sign) {
		return ServiceImp.updateProfessionalDetails(sign);
	}
	@DeleteMapping("/deletePro")
	public String deleteProfessionalDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteProfessionalDetails(id);
		return "Professional Details Deleted !";
	} 
}
