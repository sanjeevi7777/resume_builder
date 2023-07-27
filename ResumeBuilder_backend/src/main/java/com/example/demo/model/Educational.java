package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
@Entity
@Table(name="educational")
public class Educational {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long edu_id;
private String school_name="";
private String school_location="";
private String degree="";
private String field="";
private String start_date="";
private String end_date="";
private String studies="";
private boolean completed=false;
 @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    User user;
public Long getEdu_id() {
	return edu_id;
}
public void setEdu_id(Long edu_id) {
	this.edu_id = edu_id;
}
//public Long getUser_id() {
//	return user_id;
//}
//public void setUser_id(Long user_id) {
//	this.user_id = user_id;
//}
public String getStart_date() {
	return start_date;
}
public void setStart_date(String start_date) {
	this.start_date = start_date;
}
public String getEnd_date() {
	return end_date;
}
public void setEnd_date(String end_date) {
	this.end_date = end_date;
}
public String getSchool_name() {
	return school_name;
}
public void setSchool_name(String school_name) {
	this.school_name = school_name;
}
public String getSchool_location() {
	return school_location;
}
public void setSchool_location(String school_location) {
	this.school_location = school_location;
}
public String getDegree() {
	return degree;
}
public void setDegree(String degree) {
	this.degree = degree;
}
public String getField() {
	return field;
}
public void setField(String field) {
	this.field = field;
}
public String getStudies() {
	return studies;
}
public void setStudies(String studies) {
	this.studies = studies;
}
public boolean isCompleted() {
	return completed;
}
public void setCompleted(boolean completed) {
	this.completed = completed;
}


}
