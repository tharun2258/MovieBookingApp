package com.fse.user.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fse.user.Model.User;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer>
{
	
	@Query(value="select u from User u where u.username= :username and u.password= :password")
	public User validateUser(String username, String password);//login
	
	public User findByUsernameAndPassword(String username , String password);
	
	public User findBySecretQuestion(String secretQuestion);
	
	public User findByUsernameAndSecretQuestion(String username ,String secretQuestion);
	
	public User findByUserId(int userId);
	
	public User findByUsername(String username);
	
	public User findByEmail(String email);

}
