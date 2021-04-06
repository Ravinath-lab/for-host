package com.codefest.noizies.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codefest.noizies.entity.Keyword;
import com.codefest.noizies.repository.KeywordRepository;

@Service
public class KeywordService {
	
	@Autowired
	private KeywordRepository repo;

	public List<Keyword> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public List<Keyword> getAllByName(String name) {
		// TODO Auto-generated method stub
		return repo.getAllByLikeName(name);
	}

	public Keyword save(Keyword keyword) {
		// TODO Auto-generated method stub
		return repo.save(keyword);
	}

	public Keyword update(Keyword keyword) {
		int id = keyword.getKeywordId();
		Keyword avbKeyword =  repo.findKeywordByKeywordId(id);
		if(avbKeyword != null) {
			if(keyword.getDescription() != null && !keyword.getDescription().trim().isEmpty()) {
				avbKeyword.setDescription(keyword.getDescription());
			}
			if(keyword.getName() != null && !keyword.getName().trim().isEmpty()) {
				avbKeyword.setName(keyword.getName());
			}
			return repo.save(avbKeyword);
		}else {
			return null;
		}
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}
	
	public Keyword getById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	
}
