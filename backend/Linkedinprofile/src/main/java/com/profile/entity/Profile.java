package com.profile.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Table(name = "profile")
//@Entity(name = "profile")
@Document(collection="profile")
public class Profile {

	 @Id
	 private Long id;
	 private String name;
	 private String designation;
	 
	 
	public Profile() {
	
	}
	public Profile(Long id, String name, String designation) {
		super();
		this.id = id;
		this.name = name;
		this.designation = designation;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	 
	 
	 
}
	    