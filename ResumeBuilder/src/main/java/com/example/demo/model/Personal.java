package com.example.demo.model;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class Personal {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long per_id;
	 @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    User user;
   
public Long getPer_id() {
		return per_id;
	}
	public void setPer_id(Long per_id) {
		this.per_id = per_id;
	}
private String first_name="";
private String last_name="";
private String email="";
private String phone_number="";
private String address="";
private String dob="";
private String about="";
public String getFirst_name() {
	return first_name;
}
public void setFirst_name(String first_name) {
	this.first_name = first_name;
}
public String getLast_name() {
	return last_name;
}
public void setLast_name(String last_name) {
	this.last_name = last_name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhone_number() {
	return phone_number;
}
public void setPhone_number(String phone_number) {
	this.phone_number = phone_number;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getDob() {
	return dob;
}
public void setDob(String dob) {
	this.dob = dob;
}
public String getAbout() {
	return about;
}
public void setAbout(String about) {
	this.about = about;
}

}
