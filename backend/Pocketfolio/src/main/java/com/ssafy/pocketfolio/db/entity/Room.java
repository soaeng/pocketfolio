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
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
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
name="room"
//indexes = @Index(name="IDX_CHATROOM_USER_CHATROOMNO", columnList="chatroom_no")
)
public class Room {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_no", nullable=false, updatable=false)
	private long roomNo;
	
	@Column(name="room_name", length=20, nullable=false)
	@NotNull
	private String roomName;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	@Column(name="room_theme")
	private int roomTheme;
	
	@Column(name="room_thumbnail", length=255)
	private String roomThumbnail;

	@Column(name="room_is_main", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (room_is_main in ('T', 'F'))")
	@NotNull
	private String roomIsMain; // "T" or "F"

	@Column(name="room_public", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (room_public in ('O', 'S', 'C')) DEFAULT 'O'")
	@ColumnDefault("'O'")
	@NotNull
	private String roomPublic; // "O"는 Open(공개), "S"는 Shared(링크 공개), "C"는 Closed(비공개)

	@Column(name="room_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime roomCreated;
	
	@Column(name="room_updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime roomUpdated;
	
	public void updateRoom(String roomName, String roomThumbnail) { // update room info
		this.roomName = roomName;
		this.roomThumbnail = roomThumbnail;
	}
	
	public void updateRoomTheme(int roomTheme) { // update room theme only
		this.roomTheme = roomTheme;
	}

	public void changeMain(String roomIsMain) {
		this.roomIsMain = roomIsMain;
	}

	public void changePublic(String roomPublic) {
		this.roomPublic = roomPublic;
	}
	
	@PrePersist
	public void createdAt() {
		this.roomCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
		this.roomUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.roomUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
