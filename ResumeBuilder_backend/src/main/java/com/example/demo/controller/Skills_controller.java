package com.example.demo.controller;

import java.util.List;
import java.util.ArrayList;
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

import com.example.demo.model.Skills;
import com.example.demo.service.Skills_Service;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class Skills_controller {
	@Autowired
	private Skills_Service ServiceImp;
	@PostMapping("/saveSkills")
	public Skills saveSkillsDetails(@RequestBody Skills skills){
	    ServiceImp.saveSkillsDetails(skills);
	    System.out.println("Skills save works properly!");
        return skills;
	}
	@GetMapping("/getSkills")
	public List<String> findSkillsDetails(@RequestParam int id){
		return ServiceImp.getSkillsDetails(id);
	}
	@GetMapping("/getAllSkillsDetails")
	public List<Skills>findAllSkillsDetails(){
		return ServiceImp.findAllSkillsDetails();
	}
	@GetMapping("/getAllSkills")
	public List<String>findAllSkills(){
		List<Skills> skillsDetails= ServiceImp.findAllSkillsDetails();
		List<String> skills=new ArrayList<>();
		for(int i=0;i<skillsDetails.size();i++){
			skills.add(skillsDetails.get(i).getSkill());
		}
		return skills;
	}
//	@PutMapping("/updateSkills")
//	public Skills updateProfessionalDetails(@RequestBody Skills sign) {
//		return ServiceImp.updateSkillsDetails(sign);
//	}
	@DeleteMapping("/deleteSkills")
	public String deleteSkillsDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteSkillsDetails(id);
		return "Skills Details Deleted !";
	} 
	@DeleteMapping("/deleteAllSkills")
	public String deleteAllSkillsDetails() 
	{
		
		ServiceImp.deleteAllSkillsDetails();
		return "Skills Details Deleted !";
	} 
}
