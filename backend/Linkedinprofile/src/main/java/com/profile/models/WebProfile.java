package com.profile.models;


public class WebProfile {
	
	 private String name;
	    private String designation;
	    

	    public WebProfile() {

	    }

	    public WebProfile(String name, String designation) {
	        this.name = name;
	        this.designation = designation;

	    }


	    public String getName() {
	        return name;
	    }

	    public void setName(String about) {
	        this.name = name;
	    }

	    public String getDesignation() {
	        return designation;
	    }

	    public void setDesignation(String designation) {
	        this.designation = designation;
	    }

	  
}
