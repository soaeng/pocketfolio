package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(
name="room"
//indexes = @Index(name="IDX_CHATROOM_USER_CHATROOMNO", columnList="chatroom_seq")
)
public class Room {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_seq", nullable=false, updatable=false)
	private long roomSeq;
	
	@Column(name="name", length=20, nullable=false)
	@NotNull
	private String name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	@Column(name="theme")
	private String theme;
	
	@Column(name="thumbnail", length=255)
	private String thumbnail;

	@Column(name="is_main", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (is_main in ('T', 'F'))")
	@NotNull
	private String isMain; // "T" or "F"

	@Column(name="privacy", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (privacy in ('O', 'S', 'C')) DEFAULT 'O'")
	@ColumnDefault("'O'")
	@NotNull
	private String privacy; // "O"는 Open(공개), "S"는 Shared(링크 공개), "C"는 Closed(비공개)

	@Column(name="created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime created;
	
	@Column(name="updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime updated;
	
	public void updateRoom(String name, String thumbnail) { // update room info
		this.name = name;
		this.thumbnail = thumbnail;
	}
	
	public void updateTheme(String theme) { // update room theme only
		this.theme = theme;
	}

	public void changeIsMain(String isMain) {
		this.isMain = isMain;
	}

	public void updatePrivacy(String privacy) {
		this.privacy = privacy;
	}
	
	@PrePersist
	public void createdAt() {
		this.created = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
		this.updated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.updated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
