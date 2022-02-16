package com.experience.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.experience.Services.ExperienceService;
import com.experience.models.WebExperience;

@Controller
@RequestMapping("/experience")
@CrossOrigin
public class ExperienceController {
	
	 @Autowired
	    ExperienceService experienceService;
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/add")
	    @ResponseBody
	    public List<WebExperience> addExperience(@RequestBody WebExperience webExperience) {
	        return experienceService.modelToEntity(webExperience);

	    }
  @CrossOrigin(origins = "http://localhost:3000")
	    @GetMapping("/get/{id}")
	    @ResponseBody
	    public List<WebExperience> getExperience(@PathVariable(value = "id") String id) {
	        return experienceService.get(id);
	    }

	   
	    @PutMapping("/update")
	    @ResponseBody
	    public List<WebExperience> updateExperience(@RequestBody WebExperience webExperience) {
	        return experienceService.modelToEntity(webExperience);

	    }
   

	    //@CrossOrigin(origins = "http://192.168.0.129:4200/")
	    @DeleteMapping("/delete/{id}")
	    @ResponseBody
	    public ResponseEntity<Object> deleteExperience(@PathVariable(value = "id") String id) {

	        return experienceService.delete(id);
	    }
}
