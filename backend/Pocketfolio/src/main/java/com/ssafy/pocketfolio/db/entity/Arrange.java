package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

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
	@Column(name="arrange_seq", nullable=false, updatable=false)
	private long arrangeSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="item_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Item item;
	
//	@Column(name="location_x", nullable=false, columnDefinition = "int CHECK (location_x >= 0)")
	@Column(name="location_x", nullable=false, columnDefinition = "decimal(15,8)")
	@NotNull
	private double locationX;
	
	@Column(name="location_y", nullable=false, columnDefinition = "decimal(15,8)")
	@NotNull
	private double locationY;
	
	@Column(name="location_z", nullable=false, columnDefinition = "decimal(15,8)")
	@NotNull
	private double locationZ;

	@Column(name="rotation", nullable=false, columnDefinition = "decimal(15,8)")
	@NotNull
	private double rotation;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="port_seq")
	private Portfolio portfolio;
	
	public void updateArrange(int locationX, int locationY, int locationZ, int rotation) {
		this.locationX = locationX;
		this.locationY = locationY;
		this.locationZ = locationZ;
		this.rotation = rotation;
	}
	
	public void updatePortfolio(Portfolio portfolio) { // can take null
		this.portfolio = portfolio;
	}
}
