package com.profile.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.profile.entity.Profile;

public interface ProfileRepository extends MongoRepository<Profile, String> {
	Optional<Profile> findByName(String name);

    List<Profile> findAll();
}
