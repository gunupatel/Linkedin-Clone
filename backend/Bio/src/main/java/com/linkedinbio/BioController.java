package com.linkedinbio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin("*")
@RestController
//@RequestMapping("/bio")
public class BioController {
	
	@Autowired
	BioServices bioServices;

	@GetMapping("/get/{name}")
	@ResponseBody
	public Bio getBioByUserName(@PathVariable(value = "name") String userName) {
		return bioServices.getBio(userName);
		
//	return bioServices.get(name);
	}

	@PostMapping("/add")
	@ResponseBody

	public Bio addUserBio(@RequestBody Bio bio) {
	return bioServices.setUp(bio);	}

}
