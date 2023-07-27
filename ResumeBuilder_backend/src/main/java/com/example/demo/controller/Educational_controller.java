package com.example.demo.controller;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.Educational_service;
import com.example.demo.model.Educational;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class Educational_controller {
		@Autowired
		private Educational_service ServiceImp;
		@PostMapping("/saveEdu")
		public Educational saveEducationalDetails(@RequestBody Educational sign){
			System.out.println("Educational save works properly!");
		    ServiceImp.saveEducationalDetails(sign);
	        return sign;
		}
		@GetMapping("/getEdu")
		public Educational findEducational(@RequestParam int id){
			return ServiceImp.findEducationalDetails(id);
		}
		@GetMapping("/getFedu")
		public Educational findEducationalByFid(@RequestParam int id){
			return ServiceImp.findEducationalDetailsByFid(id);
		}
		@GetMapping("/getAllEdu")
		public List<Educational>findAllEducationalDetails(){
			return ServiceImp.findAllEducationalDetails();
		}
		@PutMapping("/updateEdu")
		public Educational updateEducationalDetails(@RequestBody Educational sign) {
			return ServiceImp.updateEducationalDetails(sign);
		}
		@DeleteMapping("/deleteEdu")
		public String deleteEducationalDetails(@RequestParam int id) 
		{
			
			ServiceImp.deleteEducationalDetails(id);
			return "Educational Details Deleted !";
		} 
		
	}

