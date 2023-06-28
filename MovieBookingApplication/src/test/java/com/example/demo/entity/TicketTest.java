package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TicketTest {

	@Test
	public void test01() {
		
		List<String> ticketList = new ArrayList<String>();
		ticketList.add("sahoo");
		
		assertEquals("sahoo", ticketList.get(0));
	}
	
	
	@Test
	public void test02() {
		
		List<String> ticketList = new ArrayList<String>();
		ticketList.add("sahoo");
		
		assertNotEquals("dasara", ticketList.get(0));
	}

}
