package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.demo.filter.JWTFilter;

@SpringBootApplication
@CrossOrigin("http://localhost:4200")
public class MovieBookingApplication {
	
//	@Bean
//	public FilterRegistrationBean jwtFilterBean()
//	{
//		FilterRegistrationBean fb = new FilterRegistrationBean();
//		fb.setFilter(new JWTFilter());
//		fb.addUrlPatterns("/movie/*");
//		fb.addUrlPatterns("/ticket/*");
//		return fb;
//		
//	}

	public static void main(String[] args) {
		SpringApplication.run(MovieBookingApplication.class, args);
	}

}
