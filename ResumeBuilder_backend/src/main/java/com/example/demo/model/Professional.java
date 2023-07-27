package com.example.demo.model;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class Professional {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pro_id;
	 @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    User user;
	public Long getPro_id() {
		return pro_id;
	}
	public void setPro_id(Long pro_id) {
		this.pro_id = pro_id;
	}
private String company_name="";
private String position_title="";
private String start_date="";
private String end_date="";
private boolean curr=false;
private String summary="";
public String getCompany_name() {
	return company_name;
}
public void setCompany_name(String company_name) {
	this.company_name = company_name;
}
public String getPosition_title() {
	return position_title;
}
public void setPosition_title(String position_title) {
	this.position_title = position_title;
}
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
public boolean isCurr() {
	return curr;
}
public void setCurr(boolean curr) {
	this.curr = curr;
}
public String getSummary() {
	return summary;
}
public void setSummary(String summary) {
	this.summary = summary;
}

}
