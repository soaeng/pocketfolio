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
import javax.persistence.UniqueConstraint;

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
@Table(
name="room_hover",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ROOM_HOVER", columnNames={"room_seq", "room_hover_url"})
}
)
public class RoomHover {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_hover_seq", nullable=false, updatable=false)
	private long roomHoverSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@Column(name="room_hover_url", length=255, nullable=false, updatable=false)
	@NotNull
	private String roomHoverUrl;
	
}
