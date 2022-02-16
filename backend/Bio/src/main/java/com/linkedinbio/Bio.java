package com.linkedinbio;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "editprofile")
public class Bio {
	
	@Id
	private String id;
	private String name;
	private String jobposition;
	private String location;
	
	private String companyname;
	private String userName;

	public Bio() {
	super();
	}

	public Bio(String id, String name,   String jobposition,String location, String companyname,String userName) {
	super();
	this.id = id;
	this.name = name;
	this.location = location;
	this.jobposition = jobposition;
	this.companyname = companyname;
	this.userName = userName;
	}



	public String getUserName() {
	return userName;
	}



	public void setUserName(String userName) {
	this.userName = userName;
	}



	public String getId() {
	return id;
	}
	public void setId(String id) {
	this.id = id;
	}
	public String getName() {
	return name;
	}
	public void setName(String name) {
	this.name = name;
	}
	public String getLocation() {
	return location;
	}
	public void setLocation(String location) {
	this.location = location;
	}
	

	public String getJobposition() {
		return jobposition;
	}

	public void setJobposition(String jobposition) {
		this.jobposition = jobposition;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

}
