package com.profile.Services;

import org.apache.el.stream.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import java.util.Optional;
import com.profile.entity.Profile;
import com.profile.models.WebProfile;
import com.profile.repository.ProfileRepository;

@Service("ProfileService")
public class ProfileService {

	 @Autowired
	    ProfileRepository profileRepository;

	    public WebProfile get(String name) {
	    	java.util.Optional<Profile> profile=profileRepository.findByName(name);
	        Profile newProfile = profile.orElse(null);
	        if (newProfile != null) {
	            WebProfile webProfile = new WebProfile();
	            BeanUtils.copyProperties(newProfile, webProfile);
	            return webProfile;
	        }
	        return new WebProfile();
	    }

	    public WebProfile entityToModel(Profile profileEntity) {
	    	java.util.Optional<Profile> profile = profileRepository.findByName(profileEntity.getName());
	        Profile newProfile = profile.orElse(null);
	        WebProfile webProfile = new WebProfile();
	        webProfile.setName(newProfile.getName());
	        webProfile.setDesignation(newProfile.getDesignation());
	        return webProfile;

	    }

	    public WebProfile modelToEntity(WebProfile webprofile) {
	    	java.util.Optional<Profile> profile = profileRepository.findByName(webprofile.getName());
	        Profile newProfile = profile.orElse(null);
	        newProfile.setName(webprofile.getName());
	        newProfile.setDesignation(webprofile.getDesignation());
	        profileRepository.save(newProfile);
	        return entityToModel(newProfile);

	    }

	    public void delete(String name) {
	    	java.util.Optional<Profile> profile = profileRepository.findByName(name);
	        Profile newProfile = profile.orElse(null);
	        profileRepository.delete(newProfile);
	    }
}
