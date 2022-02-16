package com.linkedinbio;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BioRepository extends MongoRepository<Bio,String> {

//	Bio findByname(String name);
//	java.util.Optional<Bio> findById(String id);
	List<Bio> findAll();
	Bio findByuserName(String userName);
}
