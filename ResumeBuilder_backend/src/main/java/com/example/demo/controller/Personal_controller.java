package com.example.demo.controller;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.*;
import com.example.demo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class Personal_controller {
			@Autowired
			private Personal_service ServiceImp;
			@PostMapping("/savePer")
			public Personal savePersonalDetails(@RequestBody Personal per){
			    ServiceImp.savePersonalDetails(per);
			    System.out.println("Personal save works properly!");
		        return per;
			}
			@GetMapping("/getPer")
			public Personal findPersonalDetails(@RequestParam int id){
				return ServiceImp.findPersonalDetails(id);
			}
			@GetMapping("/getAllPer")
			public List<Personal>findAllPersonalDetails(){
				return ServiceImp.findAllPersonalDetails();
			}
			@PutMapping("/updatePer")
			public Personal updatePersonalDetails(@RequestBody Personal sign) {
				return ServiceImp.updatePersonalDetails(sign);
			}
			@DeleteMapping("/deletePer")
			public String deletePersonalDetails(@RequestParam int id) 
			{
				
				ServiceImp.deletePersonalDetails(id);
				return "Personal Details Deleted !";
			} 
			
		}


