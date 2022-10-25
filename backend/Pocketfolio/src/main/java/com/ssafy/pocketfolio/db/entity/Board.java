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
	@Column(name="board_no", nullable=false, updatable=false)
	private long boardNo;
	
	@Column(name="board_title", length=100, nullable=false)
	@NotNull
	private String boardTitle;

	@Column(name="board_content", nullable=false, columnDefinition = "text")
	@NotNull
	private String boardContent;

	@Column(name="board_thumbnail", length=255)
	private String boardThumbnail;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_category_no")
	private BoardCategory boardCategory;
	
	@Column(name="board_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime boardCreated;
	
	@Column(name="board_updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime boardUpdated;
	
	public void updateBoard(String boardTitle, String boardContent, String boardThumbnail, BoardCategory boardCategory) {
		this.boardTitle = boardTitle;
		this.boardContent = boardContent;
		this.boardThumbnail = boardThumbnail; // can be null
		this.boardCategory = boardCategory; // can be null
	}
	
	@PrePersist
	public void createdAt() {
		this.boardCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
		this.boardUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.boardUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
