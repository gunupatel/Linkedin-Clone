package com.experience.repository;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.experience.entity.Experience;

public interface ExperienceRepository extends MongoRepository<Experience,String> {

	List<Experience> findByUserIdOrderByStartDate(String userId);

	java.util.Optional<Experience> findById(String id);

    List<Experience> findAll();
}
