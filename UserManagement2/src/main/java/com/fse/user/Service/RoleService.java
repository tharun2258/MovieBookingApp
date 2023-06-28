package com.fse.user.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fse.user.Model.Role;
import com.fse.user.Repository.RoleRepository;

@Service
public class RoleService {

	 @Autowired
	    private RoleRepository roleDao;

	    public Role createNewRole(Role role) {
	        return roleDao.save(role);
	    }
}
