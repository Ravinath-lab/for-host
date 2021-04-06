package com.codefest.noizies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codefest.noizies.entity.Admin;
import com.codefest.noizies.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repo;
	
	public Admin getAdmin(Admin admin) {
		if(admin.getUsername() != null && admin.getPassword() != null) {
			return repo.findAdminByUsernameAndPassword(admin.getUsername(), admin.getPassword());
		}else {
			return null;
		}
	}
	
	public Admin findAdminByEmailAndPassword(String username,String password) {
		return repo.findAdminByUsernameAndPassword(username, password);
	}

}
