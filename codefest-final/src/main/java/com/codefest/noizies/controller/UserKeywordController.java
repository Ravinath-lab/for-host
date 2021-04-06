package com.codefest.noizies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codefest.noizies.entity.Keyword;
import com.codefest.noizies.service.KeywordService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/userKeyword")
public class UserKeywordController {
	
	@Autowired
	private KeywordService service;

	@GetMapping(path = "/getAll")
	public List<Keyword> getAll(){
		return service.getAll();
	}
	
	@GetMapping(path = "/getAllByNames/{name}")
	public List<Keyword> getAllByName(@PathVariable(name = "name") String name){
		return service.getAllByName(name);
	}

}
