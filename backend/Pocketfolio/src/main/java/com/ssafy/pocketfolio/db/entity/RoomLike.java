package com.ssafy.pocketfolio.db.entity;

import java.time.LocalDateTime;
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
name="room_like",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ROOM_LIKE", columnNames={"room_no", "user_no"})
}
)
public class RoomLike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_like_no", nullable=false, updatable=false)
	private long roomLikeNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	@Column(name="room_like_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime roomLikeCreated;
	
	@PrePersist
	public void createdAt() {
		this.roomLikeCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
