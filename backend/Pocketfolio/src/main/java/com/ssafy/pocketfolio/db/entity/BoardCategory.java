package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="board_category")
public class BoardCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="board_category_seq", nullable=false, updatable=false)
	private long boardCategorySeq;
	
	@Column(name="name", length=20, nullable=false)
	@NotNull
	private String name;
	
	public void updateName(String name) { // for administrator
		this.name = name;
	}
}
