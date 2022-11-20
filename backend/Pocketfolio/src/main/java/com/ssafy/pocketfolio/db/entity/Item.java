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
@Table(
name="item",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ITEM", columnNames={"asset"}),
		@UniqueConstraint(name="UK_ITEM_IMAGE", columnNames={"image"})
}
)
public class Item {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="item_seq", nullable=false, updatable=false)
	private Long itemSeq;
	
	@Column(name="name_eng", length=30, nullable=false)
	@NotNull
	private String nameEng;

	@Column(name="name_kor", length=20, nullable=false)
	@NotNull
	private String nameKor;

	@Column(name="asset", length=255, nullable=false)
	@NotNull
	private String asset;

	@Column(name="image", length=255, nullable=false)
	@NotNull
	private String image;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="item_category_seq")
	private ItemCategory itemCategory;

	public void updateItem(String nameEng, String nameKor, String asset, String image, ItemCategory itemCategory) { // for administrator
		this.nameEng = nameEng;
		this.nameKor = nameKor;
		this.asset = asset;
		this.image = image;
		this.itemCategory = itemCategory;
	}

	public void updateImage(String image) {
		this.image = image;
	}
}
