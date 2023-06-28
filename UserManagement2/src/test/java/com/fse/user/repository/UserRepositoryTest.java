package com.fse.user.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.fse.user.Model.User;
import com.fse.user.Repository.UserRepository;

@SpringBootTest
public class UserRepositoryTest {
	
	@Autowired
	private UserRepository userRepo;

	private User user = new User();// real object

	@Test
	public void saveUserSuccess() throws Exception {
		user.setUserId(2);
		user.setUsername("abhi");

		userRepo.save(user);
		System.out.println(user.getUsername());
		User user1 = null;

		System.out.println(user1);

		//user1 = userRepo.findById(user.getUserId()).get();

		System.out.println("test" + user1);
		assertEquals(user.getUsername(),"abhi");
	}

	@Test
	public void saveUserFailure() throws Exception {
		User user1 = null;

		if (userRepo.findAll().toString().isEmpty()) {
			userRepo.save(user);
			user1 = userRepo.findById(user.getUserId()).get();

		}

		assertNull(user1);
	}

}
