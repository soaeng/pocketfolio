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
@Table(name="item_category")
public class ItemCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="item_category_seq", nullable=false, updatable=false)
	private Long itemCategorySeq;
	
	@Column(name="name_kor", length=20, nullable=false)
	@NotNull
	private String nameKor;

	@Column(name="name_eng", length=30)
	private String nameEng;

	public void updateItem(String nameKor, String nameEng) { // for administrator
		this.nameKor = nameKor;
		this.nameEng = nameEng;
	}
}
