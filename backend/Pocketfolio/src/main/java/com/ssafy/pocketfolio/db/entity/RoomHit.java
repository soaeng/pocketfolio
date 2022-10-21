package com.ssafy.pocketfolio.db.entity;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
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
name="room_hit",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ROOM_HIT", columnNames={"room_no", "user_no", "room_hit_date"})
} // user_no가 null이 되어서 유니크키가 제대로 작동하지 않을 경우 수정 필요
)
public class RoomHit {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_hit_no", nullable=false, updatable=false)
	private long roomHitNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no")
	private User user;
	
	@Column(name="room_hit_date", nullable=false, updatable=false, columnDefinition = "date DEFAULT (current_date)")
	@NotNull
	private LocalDate roomHitDate;
	
	@PrePersist
	public void createdAt() {
		this.roomHitDate = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDate();
	}
}
