package com.codefest.noizies.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "keyword")
public class Keyword implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int keywordId;
	private String name;
	
	@Column(columnDefinition = "TEXT")
	private String description;
	
	public Keyword() {
		super();
	}
	public Keyword(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}
	public Keyword(int keywordId, String name, String description) {
		super();
		this.keywordId = keywordId;
		this.name = name;
		this.description = description;
	}
	public int getKeywordId() {
		return keywordId;
	}
	public void setKeywordId(int keywordId) {
		this.keywordId = keywordId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
