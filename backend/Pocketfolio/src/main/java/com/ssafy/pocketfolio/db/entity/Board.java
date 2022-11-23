package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;
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
@Table(name="board")
public class Board {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="board_seq", nullable=false, updatable=false)
	private long boardSeq;
	
	@Column(name="title", length=100, nullable=false)
	@NotNull
	private String title;

	@Column(name="content", nullable=false, columnDefinition = "text")
	@NotNull
	private String content;

	@Column(name="thumbnail", length=255)
	private String thumbnail;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_category_seq")
	private BoardCategory boardCategory;
	
	@Column(name="created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime created;
	
	@Column(name="updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime updated;
	
	public void updateBoard(String title, String content, String thumbnail, BoardCategory boardCategory) {
		this.title = title;
		this.content = content;
		this.thumbnail = thumbnail; // can be null
		this.boardCategory = boardCategory; // can be null
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
