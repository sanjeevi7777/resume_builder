package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Projects;
import com.example.demo.service.Projects_service;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class Projects_controller {
	@Autowired
	private Projects_service ServiceImp;
	@PostMapping("/saveProjects")
	public Projects saveProjectsDetails(@RequestBody Projects projects){
	    ServiceImp.saveProjectsDetails(projects);
	    System.out.println("Projects save works properly!");
        return projects;
	}
	@GetMapping("/getProjects")
	public List<String> findProjectsDetails(@RequestParam int id){
		return ServiceImp.getProjectsDetails(id);
	}
	@GetMapping("/getAllProjectsDetails")
	public List<Projects>findAllProjectsDetails(){
		return ServiceImp.findAllProjectsDetails();
	}
	@GetMapping("/getAllProjects")
	public List<String>findAllProject(){
		List<Projects> projectDetails= ServiceImp.findAllProjectsDetails();
		List<String> projects=new ArrayList<>();
		for(int i=0;i<projectDetails.size();i++){
			projects.add(projectDetails.get(i).getProjects());
		}
		return projects;
	}
//	@PutMapping("/updateSkills")
//	public Skills updateProfessionalDetails(@RequestBody Skills sign) {
//		return ServiceImp.updateSkillsDetails(sign);
//	}
	@DeleteMapping("/deleteProjects")
	public String deleteSkillsDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteProjectsDetails(id);
		return "Projects Details Deleted !";
	} 
	
	@DeleteMapping("/deleteAllProjects")
	public String deleteAllProjectsDetails() {

		ServiceImp.deleteAllSProjectsDetails();
		return "Projects Details Deleted !";
	}
}
