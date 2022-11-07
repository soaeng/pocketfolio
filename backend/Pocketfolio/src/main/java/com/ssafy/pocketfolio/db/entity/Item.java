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
		@UniqueConstraint(name="UK_ITEM_CATEGORY", columnNames={"category", "name"}),
		@UniqueConstraint(name="UK_ITEM_IMAGE", columnNames={"image"})
}
)
public class Item {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="item_seq", nullable=false, updatable=false)
	private long itemSeq;
	
	@Column(name="name", length=20, nullable=false)
	@NotNull
	private String name;

	@Column(name="asset", length=255, nullable=false)
	@NotNull
	private String asset;

	@Column(name="image", length=255, nullable=false)
	@NotNull
	private String image;

	@Column(name="category", length=30, nullable=false)
	@NotNull
	private String category;

	public void updateItem(String name, String asset, String image, String category) { // for administrator
		this.name = name;
		this.asset = asset;
		this.image = image;
		this.category = category;
	}
}
