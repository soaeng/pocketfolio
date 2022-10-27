package com.ssafy.pocketfolio.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="category")
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="category_seq", nullable=false, updatable=false)
	private long categorySeq;
	
	@Column(name="category_name", length=20, nullable=false)
	@NotNull
	private String categoryName;
	
	public void updateCategoryName(String categoryName) { // for administrator
		this.categoryName = categoryName;
	}
}
