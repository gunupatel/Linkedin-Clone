package com.post;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addpost")
public class Post {
	@Id
	private String id;
	private String userName;
	private String photoUrl;
	private String name;
	private String description;
	
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(String id, String userName, String photoUrl, String name, String description) {
		super();
		this.id = id;
		this.userName = userName;
		this.photoUrl = photoUrl;
		this.name = name;
		this.description = description;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
