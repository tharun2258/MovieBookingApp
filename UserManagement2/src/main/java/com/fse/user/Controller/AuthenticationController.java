package com.fse.user.Controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fse.user.Model.User;
import com.fse.user.Repository.RoleRepository;
import com.fse.user.Repository.UserRepository;
import com.fse.user.Service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin("*")
@RequestMapping("auth/v1")
@RestController
public class AuthenticationController {

	private Map<String, String> mapObj = new HashMap<String, String>();

	@Autowired
	private UserService userService;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserRepository userRepo;

	private String jwtToken;

	@PostMapping("/addUser")
	public ResponseEntity<?> registerUser(@RequestBody User user) {

		if (userService.registerUser(user) != null) {

			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("User not registered", HttpStatus.CONFLICT);
	}

	public User generateToken(String  newusername, String newpassword) throws ServletException, Exception {
	

		if (newusername == null || newpassword == null) {
			throw new ServletException("Please enter valid username and password");
		}

		else {
			
		User loginUser = userService.loginUser(newusername, newpassword);

			jwtToken = Jwts.builder().setSubject(newusername).setIssuedAt(new Date())
					.setExpiration(new Date(System.currentTimeMillis() + 3000000))
					.signWith(SignatureAlgorithm.HS256, "secret key").compact();
			

		

		return loginUser;
		}
	}

	@PostMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody User user) {

		try {

			User u = generateToken(user.getUsername(), user.getPassword());

			mapObj.put("role", u.getUserRole());
			mapObj.put("username", u.getUsername());
			mapObj.put("email", u.getEmail());
			mapObj.put("userId", String.valueOf(u.getUserId()));
			mapObj.put("conNum", String.valueOf(u.getConNum()));

			mapObj.put("message", "User successfully logged in");

			mapObj.put("jwtToken", jwtToken);

		} catch (Exception e) {

			mapObj.put("message", "User not logged in");
			mapObj.put("jwtToken", null);
			mapObj.put("role", null);
			mapObj.put("userId", null);
			mapObj.put("conNum", null);
			mapObj.put("email", null);
			mapObj.put("username", null);

		}

		return new ResponseEntity<>(mapObj, HttpStatus.CREATED);
		
	

	}

	@PostMapping("/secretQuestion")
	public ResponseEntity<?> secretQuestion(@RequestBody User user) {
		User secretQuestion = userService.secretQuestion(user);
		if (secretQuestion != null) {
			return new ResponseEntity<User>(secretQuestion, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PutMapping("/forgotPassword/{userId}")
	public ResponseEntity<?> forgotPassword(@RequestBody User user, @PathVariable("userId") int userId) {
		User forgotPassword = userService.forgotPassword(userId, user);
		return new ResponseEntity<>(forgotPassword, HttpStatus.OK);
	}

	@GetMapping("/userId/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable("userId") int userId) {
		User byUserId = userService.getByUserId(userId);
		return new ResponseEntity<>(byUserId, HttpStatus.OK);
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<?> getByEmail(@PathVariable("email") String email) {
		User byEmail = userService.getByEmail(email);
		return new ResponseEntity<>(byEmail, HttpStatus.OK);
	}
	
	@GetMapping("/username/{username}")
	public ResponseEntity<?> getByUserName(@PathVariable("username") String username) {
		User byusername = userService.getByUserName(username);
		return new ResponseEntity<>(byusername, HttpStatus.OK);
	}
	
	@PutMapping("/userDetails/{userId}")
	public ResponseEntity<?> updateDetails(@RequestBody User user, @PathVariable("userId") int userId) {
		User update = userService.updateUserDetails(userId, user);
		return new ResponseEntity<>(update, HttpStatus.OK);
	}

}
