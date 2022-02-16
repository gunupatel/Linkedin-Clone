package com.experience.Services;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.apache.el.stream.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.experience.entity.Experience;
import com.experience.models.WebExperience;
import com.experience.repository.ExperienceRepository;

@Service("ExperienceService")
public class ExperienceService {
	@Autowired
    ExperienceRepository experienceRepository;

    public List<WebExperience> getList(List<Experience> experience) {
        ArrayList<WebExperience> experienceList = new ArrayList<WebExperience>();
        for (Experience firstExperience : experience) {
            WebExperience webExperience = new WebExperience();
            BeanUtils.copyProperties(firstExperience, webExperience);
            experienceList.add(webExperience);
        }
        return experienceList;
    }

    public List<WebExperience> get(String id) {
        List<Experience> experience = experienceRepository.findByUserIdOrderByStartDate(id);
        return getList(experience);
    }

    public List<WebExperience> entityToModel(Experience experienceEntity) {
        List<Experience> experience = experienceRepository.findByUserIdOrderByStartDate(experienceEntity.getUserId());
        return getList(experience);
    }

    public Experience setUp(Experience newExperience, WebExperience webExperience) {
        newExperience.setTitle(webExperience.getTitle());
        newExperience.setCompanyName(webExperience.getCompanyName());
        newExperience.setStartDate(webExperience.getStartDate());
        newExperience.setEndDate(webExperience.getEndDate());
        newExperience.setDescription(webExperience.getDescription());
        newExperience.setLocation(webExperience.getLocation());
        newExperience.setUserId(webExperience.getUserId());
        experienceRepository.save(newExperience);
        return newExperience;
    }

    public List<WebExperience> modelToEntity(WebExperience webExperience) {
        if (webExperience.getId() != null) {
            java.util.Optional<Experience> experience = experienceRepository.findById(webExperience.getId());
            Experience newExperience = experience.orElse(null);
            if (newExperience != null) {
                if (newExperience.getUserId().equalsIgnoreCase(webExperience.getUserId())) {

                    return entityToModel(setUp(newExperience, webExperience));
                }
                return entityToModel(newExperience);
            }
            return get(webExperience.getUserId());
        }
        Experience firstExperience = new Experience();
        return entityToModel(setUp(firstExperience, webExperience));
    }

    public ResponseEntity<Object> delete(String id) {
        java.util.Optional<Experience> experience = experienceRepository.findById(id);
        Experience newExperience = experience.orElse(null);
        if (newExperience != null) {
            //experienceRepository.delete(newExperience);
            return new ResponseEntity<Object>(experience, HttpStatus.OK);
        }
        return new ResponseEntity<Object>("Experience is not exist  for particular user", HttpStatus.OK);
    }

}
