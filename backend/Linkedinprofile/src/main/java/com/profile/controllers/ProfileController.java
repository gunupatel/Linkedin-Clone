package com.profile.controllers;
import org.apache.catalina.connector.Response;
//import com.example.linkedin.Services.ProfileService;
//import com.example.linkedin.models.Response;
//import com.example.linkedin.models.WebProfile;
//import com.example.linkedin.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.profile.Services.ProfileService;
import com.profile.models.WebProfile;
import com.profile.repository.ProfileRepository;

@Controller
@RequestMapping("/profile")
public class ProfileController {
	
	 @Autowired
	    ProfileService profileService;
	    @Autowired
	    ProfileRepository profileRepository;

	    @GetMapping("/get/{id}")
	    @ResponseBody
	    public WebProfile getProfile(@PathVariable(value = "id") String name) {

	        return profileService.get(name);
	    }
	    
	    @PostMapping("/insert")
	    @ResponseBody
	    public WebProfile insertProfile(@RequestBody WebProfile webprofile) {
	        return profileService.modelToEntity(webprofile);
	    }

	    @PutMapping("/update")
	    @ResponseBody
	    public WebProfile updateProfile(@RequestBody WebProfile webprofile) {
	        return profileService.modelToEntity(webprofile);

	    }

//	    @DeleteMapping("/delete/{id}")
//	    @ResponseBody
//	    public ResponseEntity<Object> deleteProfile(@PathVariable Long id) {
//	        profileService.delete(id);
//	        return new ResponseEntity<Object>(new Response("profile Deleted Successfully"), HttpStatus.OK);
//	    }

}
