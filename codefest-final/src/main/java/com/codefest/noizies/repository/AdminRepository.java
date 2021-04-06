package com.codefest.noizies.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.codefest.noizies.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	@Query(value = "select a from Admin a where a.username = ?1 and a.password = ?2")
	Admin findAdminByUsernameAndPassword(String un,String pwd);
}
