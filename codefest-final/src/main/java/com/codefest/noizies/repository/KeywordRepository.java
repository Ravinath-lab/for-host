package com.codefest.noizies.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.codefest.noizies.entity.Keyword;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Integer> {

	Keyword findKeywordByKeywordId(int keywordId);
	
	@Query(value = "select k from Keyword k where k.name like %?1% ")
	List<Keyword> getAllByLikeName(String name);
}
