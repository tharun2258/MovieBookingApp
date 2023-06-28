package com.fse.user.Controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fse.user.Model.User;
import com.fse.user.Service.UserServiceImpl;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/v1")
public class UserController
{
	@Autowired
	private UserServiceImpl uService;
	
	@PostConstruct
	public void initRoleAndUser() {
		uService.initRoleAndUser();
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers()
	{
		List<User> userlist = uService.getAllUsers();
		
		if(userlist!=null)
		{
			return new ResponseEntity<List<User>>(userlist, HttpStatus.OK);
		}
		return new ResponseEntity<String>("userlist is empty", HttpStatus.NO_CONTENT);
	}
	
	
	
}
