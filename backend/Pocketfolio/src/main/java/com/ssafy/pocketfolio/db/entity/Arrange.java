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
	@JoinColumn(name="port_seq")
	private Portfolio portfolio;
	
	public void updateArrange(int locationX, int locationY, int locationZ) {
		this.locationX = locationX;
		this.locationY = locationY;
		this.locationZ = locationZ;
	}
	
	public void updatePortfolio(Portfolio portfolio) { // can take null
		this.portfolio = portfolio;
	}
}
