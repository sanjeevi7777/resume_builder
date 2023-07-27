package com.example.demo.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Skills;
import com.example.demo.respository.Skills_repo;
@Service
public class Skills_Service {
	@Autowired
	private Skills_repo skillrepo;

	public List<Skills> findAllSkillsDetails() {
		return (List<Skills>)skillrepo.findAll();
	}

	
	public void saveSkillsDetails(Skills per) {
	skillrepo.save(per);
		
	}

	public List<String> getSkillsDetails(int id) {
		List<String> skill=new ArrayList<>();
		Skills function = (Skills) skillrepo.findById(id);
		String s=function.getSkill();
		String[] splitFunction = s.split(",");
		for (String element : splitFunction) {
		    skill.add(element);
		}

return skill;
	}

	public void deleteSkillsDetails(int id) {
	skillrepo.deleteById(id);
	}


    public void deleteAllSkillsDetails() {
		skillrepo.deleteAll();
    }
	
}
