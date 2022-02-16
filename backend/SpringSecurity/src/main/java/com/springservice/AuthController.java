package com.springservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springservice.model.AuthenticationRequest;
import com.springservice.model.AuthenticationResponse;

import com.springservice.model.UserRepository;
import com.springservice.model.Usermodel;


@RestController
public class AuthController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AuthenticationManager authenticationManager;
 
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) {

		String email = authenticationRequest.getEmail();
		String password = authenticationRequest.getPassword();
		String name = authenticationRequest.getName();
 
		Usermodel existsById = userRepository.findByEmail(email);
		if (existsById != null) {
			return ResponseEntity.ok(new AuthenticationResponse("Existing EmailId"));
		}

		Usermodel userModel = new Usermodel();
		userModel.setEmail(email);
		userModel.setPassword(password);
		userModel.setName(name);
		try {
			userRepository.save(userModel);
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Existing EmailId"));

		}

		return ResponseEntity.ok(new AuthenticationResponse("Succesfully Register "));
	}

	@CrossOrigin("*")
	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) {

		String email = authenticationRequest.getEmail();
		String password = authenticationRequest.getPassword();
		//String name = authenticationRequest.getName();
		Usermodel userDetail = userRepository.findByEmail(email);
		try 
		{
		//Usermodel userDetail = userRepository.findByEmail(email);

			if (userDetail != null) 
			{
				if (userDetail.getPassword().equals(password)) 
				{
					return ResponseEntity.ok(userDetail);
				} else 
				{
					return ResponseEntity.ok(Boolean.FALSE);
				}
			} else 
			{
				return ResponseEntity.ok(Boolean.FALSE);
			}

		} catch (Exception e)
		{
			return ResponseEntity.ok(Boolean.FALSE);
		}
		//return ResponseEntity.ok(userDetail);
	}
	

}



