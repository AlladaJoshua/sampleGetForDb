package com.example.teamdbackend.teamdbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class TeamdbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamdbackendApplication.class, args);
	}

}
