package com.ssafy.pocketfolio.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

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
@Table(
name="item",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ITEM", columnNames={"item_key"})
}
)
public class Item {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="item_no", nullable=false, updatable=false)
	private long itemNo;
	
	@Column(name="item_name", length=20, nullable=false)
	@NotNull
	private String itemName;
	
	@Column(name="item_key", length=50, nullable=false)
	@NotNull
	private String itemKey;
	
	public void updateItem(String itemName, String itemKey) { // for administrator
		this.itemName = itemName;
		this.itemKey = itemKey;
	}
}
