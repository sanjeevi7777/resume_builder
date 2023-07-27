package com.example.demo.model;
import jakarta.persistence.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class Projects {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pro_id;
	public Long getPro_id() {
		return pro_id;
	}
	public void setPro_id(Long pro_id) {
		this.pro_id = pro_id;
	}
private String projects="";

public String getProjects() {
	return projects;
}

public void setProjects(String projects) {
	this.projects = projects;
}

}
