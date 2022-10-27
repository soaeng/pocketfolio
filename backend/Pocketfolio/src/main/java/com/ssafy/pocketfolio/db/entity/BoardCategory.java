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
	
	@Column(name="board_category_name", length=20, nullable=false)
	@NotNull
	private String boardCategoryName;
	
	public void updateBoardCategoryName(String boardCategoryName) { // for administrator
		this.boardCategoryName = boardCategoryName;
	}
}
