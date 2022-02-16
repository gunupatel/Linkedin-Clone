package com.springservice.services;

import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springservice.model.UserRepository;
import com.springservice.model.Usermodel;

@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usermodel foundedUser=userRepository.findByEmail(email);
		
		if(foundedUser == null) 
			return null;
		
		String name=foundedUser.getEmail();
		String pwd=foundedUser.getPassword();
//		String firstname=founderUser.getName();
		
		return new User(name,pwd,null);
		
	}
	
	
	

}
