package com.linkedinbio;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("BioServices")
public class BioServices {
	@Autowired
	
	BioRepository bioRepository;
	public Bio getBio(String userName) {
//        return bioRepository.findByuserName(userName);
		return bioRepository.findByuserName(userName);
		
    }
	
	HashMap<String, Integer> map = new HashMap<>();

	public Bio setUp(Bio bio) {
		
		bio.setUserName(bio.getName());
		bioRepository.save(bio);
		return bio;
	}
	public Bio get(String userName){
	Bio experience = bioRepository.findByuserName(userName);
	return experience;
	}

}
