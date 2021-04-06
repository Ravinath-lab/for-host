package com.codefest.noizies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codefest.noizies.entity.Keyword;
import com.codefest.noizies.service.KeywordService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/keyword")
public class KeywordController {
	
	@Autowired
	private KeywordService service;
	
	@GetMapping
	public String get() {
		return "working";
	}
	
	@GetMapping(path = "/getAll")
	public List<Keyword> getAll(){
		return service.getAll();
	}
	
	@GetMapping(path = "/{id}")
	public Keyword getById(@PathVariable int id){
		
		return service.getById(id);
	}
	
	@GetMapping(path = "/getAllByNames/{name}")
	public List<Keyword> getAllByName(@PathVariable(name = "name") String name){
		return service.getAllByName(name);
	}
	
	@PostMapping(path = "/save")
	public Keyword save(@RequestBody Keyword keyword) {
		return service.save(keyword);
	}
	
	@PutMapping(path = "/update")
	public Keyword update(@RequestBody Keyword keyword) {
		return service.update(keyword);
	}
	
	@DeleteMapping(path = "delete/{id}")
	public void delete(@PathVariable(name = "id") int id) {
		service.delete(id);
	}
}
