package com.springservice.model;

import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<Usermodel,String>{
	
	Usermodel findByEmail(String email);
	@Override
	default <S extends Usermodel, R> R findBy(Example<S> example, Function<FetchableFluentQuery<S>, R> queryFunction) {
		// TODO Auto-generated method stub
		return null;
	}

}
