package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Projects;
import com.example.demo.respository.Projects_repo;

@Service
public class Projects_service {
	@Autowired
	private Projects_repo project_repo;

	public List<Projects> findAllProjectsDetails() {
		return (List<Projects>)project_repo.findAll();
	}

	
	public void saveProjectsDetails(Projects per) {
		project_repo.save(per);
		
	}

	public List<String> getProjectsDetails(int id) {
		List<String> projects=new ArrayList<>();
		Projects function = (Projects) project_repo.findById(id);
		String s=function.getProjects();
		String[] splitFunction = s.split(",");
		for (String element : splitFunction) {
		    projects.add(element);
		}

return projects;
	}

	public void deleteProjectsDetails(int id) {
		project_repo.deleteById(id);
	}


    public void deleteAllSProjectsDetails() {
		project_repo.deleteAll();
    }
}
