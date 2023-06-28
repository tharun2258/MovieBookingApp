package com.fse.user.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fse.user.Model.Role;

@Repository
@Transactional
public interface RoleRepository extends JpaRepository<Role, String>{

}
