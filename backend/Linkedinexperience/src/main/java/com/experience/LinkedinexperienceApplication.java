package com.experience;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class LinkedinexperienceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LinkedinexperienceApplication.class, args);
	}

}
