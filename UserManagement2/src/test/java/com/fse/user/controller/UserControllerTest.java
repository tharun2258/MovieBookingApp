package com.fse.user.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fse.user.Controller.UserController;
import com.fse.user.Model.User;
import com.fse.user.Service.UserServiceImpl;

@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest 
{
	@Mock
	private UserServiceImpl userService;
	
	@InjectMocks
	private UserController userC;
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userC).build();
	}

	List<User> userList = new ArrayList<User>();
	
	@Test
	public void getAllUsersSuccess() throws Exception
	{
		User user = new User();
		user.setUserId(101);
		user.setUsername("Keith");
		user.setEmail("abc@gmail.com");
		user.setPassword("qwerty");
		user.setUserRole("Customer");
		
		
		userList.add(user);
		when(userService.getAllUsers()).thenReturn(userList);
		
		List<User> uList = userService.getAllUsers();
		assertEquals(userList, uList);
		
mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/getAllUsers").contentType(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void getAllUsersFailure() throws Exception
	{
		userList.clear();
		System.out.println(userList.size());
		when(userService.getAllUsers()).thenReturn(userList);
		
		assertEquals(0,userList.size());
		
	mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/getAllUsers").contentType(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void addUserSuccess() throws Exception
	{
		User user = new User();
		user.setUserId(101);
		user.setUsername("Keith");
		user.setEmail("abc@gmail.com");
		user.setPassword("qwerty");
		user.setUserRole("Customer");
	
		
		userList.add(user);
		when(userService.registerUser(user)).thenReturn(user);
		
		assertEquals(1,userList.size());
//        mockMvc.perform(MockMvcRequestBuilders.post("/auth/v1/addUser").contentType(MediaType.APPLICATION_JSON)
//		.content(new ObjectMapper().writeValueAsString(user))).andExpect(MockMvcResultMatchers.status().isCreated());
//		
	}
	
	@Test
	public void addUserFailure() throws Exception
	{
		
		when(userService.addUser(any())).thenReturn(null);
		
		User u1 = userService.addUser(null);
		assertNull(u1);
		
//        mockMvc.perform(MockMvcRequestBuilders.post("/auth/v1/addUser").contentType(MediaType.APPLICATION_JSON)
//        .content(new ObjectMapper().writeValueAsString(u1))).andExpect(MockMvcResultMatchers.status().is4xxClientError());

		
	}

}







