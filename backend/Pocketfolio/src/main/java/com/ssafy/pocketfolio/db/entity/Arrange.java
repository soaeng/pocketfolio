package com.ssafy.pocketfolio.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
@Table(name="arrange")
public class Arrange {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="arrange_no", nullable=false, updatable=false)
	private long arrangeNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="item_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Item item;
	
//	@Column(name="location_x", nullable=false, columnDefinition = "int CHECK (location_x >= 0)")
	@Column(name="location_x", nullable=false)
	@NotNull
	private int locationX;
	
	@Column(name="location_y", nullable=false)
	@NotNull
	private int locationY;
	
	@Column(name="location_z", nullable=false)
	@NotNull
	private int locationZ;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="port_no")
	private Portfolio portfolio;
	
	public void updateArrange(int locationX, int locationY, int locationZ) {
		this.locationX = locationX;
		this.locationY = locationY;
		this.locationZ = locationZ;
	}
	
	public void updateArrangePortfolio(Portfolio portfolio) { // can take null
		this.portfolio = portfolio;
	}
}
