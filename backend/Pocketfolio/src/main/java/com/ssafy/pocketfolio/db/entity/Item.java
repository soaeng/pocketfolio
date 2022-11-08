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
	
	@Column(name="name", length=20, nullable=false)
	@NotNull
	private String name;

	@Column(name="asset", length=255, nullable=false)
	@NotNull
	private String asset;

	@Column(name="image", length=255, nullable=false)
	@NotNull
	private String image;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="item_category_seq")
	private ItemCategory itemCategory;

	public void updateItem(String name, String asset, String image, ItemCategory itemCategory) { // for administrator
		this.name = name;
		this.asset = asset;
		this.image = image;
		this.itemCategory = itemCategory;
	}
}
