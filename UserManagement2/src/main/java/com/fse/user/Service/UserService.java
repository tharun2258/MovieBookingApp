package com.fse.user.Service;

import java.util.List;

import com.fse.user.Model.Ticket;
import com.fse.user.Model.User;

public interface UserService {
	public User addUser(User user);// user registration

	public User loginUser(String username, String password);// login

	public List<User> getAllUsers();// will be visible only if you are logged in

	public User registerUser(User user);

	public User secretQuestion(User user);

	// public User findByUsernameAndSecretQuestionMethod(String username ,String
	// secretQuestion);

	public User forgotPassword(int userId, User user);

	public User getByUserId(int userId);

	public User getByEmail(String email);

	public User getByUserName(String username);

	public User updateUserDetails(int userId , User user);



}
