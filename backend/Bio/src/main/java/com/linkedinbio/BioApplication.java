package com.linkedinbio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BioApplication {

	public static void main(String[] args) {
		SpringApplication.run(BioApplication.class, args);
	}

}
