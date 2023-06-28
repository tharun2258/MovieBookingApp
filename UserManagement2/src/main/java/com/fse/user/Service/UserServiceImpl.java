package com.fse.user.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fse.user.Model.Role;
import com.fse.user.Model.Ticket;
import com.fse.user.Model.User;
import com.fse.user.Repository.RoleRepository;
import com.fse.user.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	public void initRoleAndUser() {

		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDesc("Admin role");
		roleRepo.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDesc("Default role for newly created record");
		roleRepo.save(userRole);
		
		
		    User adminUser = new User();
	        adminUser.setUsername("tharun");
	        adminUser.setPassword("Tharun@123");
	        adminUser.setConfirmPassword("Tharun@123");
	        adminUser.setEmail("tharun@gmail.com");
	        adminUser.setConNum(8978988988l);
	        adminUser.setUserRole("Admin");
	        Set<Role> adminRoles = new HashSet<>();
	        adminRoles.add(adminRole);
	        adminUser.setRole(adminRoles);
	        userRepo.save(adminUser);

	}

	@Override
	public User addUser(User user) {
		return userRepo.save(user);

	}

	@Override
	public User loginUser(String username, String password) {

		User user1 = userRepo.findByUsernameAndPassword(username, password);
		if (user1 != null) {
			System.out.println(user1.getUsername());
			System.out.println(user1.getUserRole());
			User user = userRepo.findByUsername(username);
			return user;
		}
		return null;

	}

	@Override
	public List<User> getAllUsers() {

		List<User> userList = userRepo.findAll();

		if (userList != null) {
			return userList;
		}

		return null;
	}

	@Override
	public User registerUser(User user) {
		user.setUserRole("User");
		Role role = roleRepo.findById("User").get();
		Set<Role> userRoles = new HashSet<>();
		userRoles.add(role);
		user.setRole(userRoles);
		return userRepo.save(user);
	}

	@Override
	public User secretQuestion(User user) {

		String tempQuestion = user.getSecretQuestion();
		if (tempQuestion != null) {
			User username = userRepo.findBySecretQuestion(tempQuestion);
			return username;
		} else {
			return null;

		}
	}

	@Override
	public User forgotPassword(int userId, User user) {
		User user2 = userRepo.findByUserId(userId);
		System.out.println(user2.getUsername());
		user2.setPassword(user.getPassword());
		user2.setConfirmPassword(user.getConfirmPassword());
		return userRepo.save(user2);

	}

	@Override
	public User getByUserId(int userId) {
		User user2 = userRepo.findById(userId).get();
		return user2;
	}

	@Override
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public User getByUserName(String username) {
		return userRepo.findByUsername(username);
	}

	@Override
	public User updateUserDetails(int userId ,User user) {
		User user2 = userRepo.findById(userId).get();
		user2.setUsername(user.getUsername());
		user2.setPassword(user.getPassword());
		user2.setConfirmPassword(user.getConfirmPassword());
		user2.setEmail(user.getEmail());
		user2.setConNum(user.getConNum());
		user2.setSecretQuestion(user.getSecretQuestion());
		return userRepo.save(user2);
	}


	

}
