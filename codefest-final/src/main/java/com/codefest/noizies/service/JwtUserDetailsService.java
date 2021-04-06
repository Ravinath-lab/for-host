package com.codefest.noizies.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.codefest.noizies.entity.Admin;
import com.codefest.noizies.model.JwtRequest;

@Service
public class JwtUserDetailsService implements UserDetailsService {	
	
	@Autowired
	private AdminService service; 
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("javainuse".equals(username)) {
			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
	
	public UserDetails loadUser(JwtRequest req)throws Exception {
		String un = req.getUsername();
		String pwd = req.getPassword();
		Admin a = service.findAdminByEmailAndPassword(un, pwd);
		if(a != null) {
			String pass = BCrypt.hashpw(a.getPassword(), BCrypt.gensalt());
			return new User(a.getUsername(), pass,
					new ArrayList<>());
		}else {
			throw new UsernameNotFoundException("User not found with username: ");
		}
	}

}