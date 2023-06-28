package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MovieTest {
	
	@Test
	public void test01() {
		
		List<String> movieList = new ArrayList<String>();
		movieList.add("sahoo");
		
		assertEquals("sahoo", movieList.get(0));
	}
	
	
	@Test
	public void test02() {
		
		List<String> movieList = new ArrayList<String>();
		movieList.add("sahoo");
		
		assertNotEquals("dasara", movieList.get(0));
	}

}
