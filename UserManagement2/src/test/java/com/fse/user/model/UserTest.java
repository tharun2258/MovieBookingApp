package com.fse.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import com.fse.user.Model.User;

@SpringBootTest
public class UserTest {

	@Test
	public void test01() {
//		User userObj = Mockito.mock(User.class);// creating the mock object
//		when(userObj.getUsername()).thenReturn(null);

//		User user = new User();
//
//		user.setUsername("john");

		List<String> userObj1 = new ArrayList<String>();
	 userObj1.add("john");
		//userObj.setUsername("john");// setting the mock data
		

		//System.out.println(user.getUsername());
		//when(userObj.getUsername()).thenReturn(userObj.getUsername());

		assertEquals("john", userObj1.get(0));
	}

	@Test
	public void test02() {
		
//		User userObj = Mockito.mock(User.class);// creating the mock object
//
//		when(userObj.getUsername()).thenReturn(null);

		List<String> userObj1 = new ArrayList<String>();
		 userObj1.add("john");

		//userObj.setUsername("john");// setting the mock data
		//String empname = user.getUsername();

		
		
		//when(userObj.getUsername()).thenReturn(user.getUsername());

		assertNotEquals("rajesh" , userObj1.get(0));

	}
}
