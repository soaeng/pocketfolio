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
@Table(name="board_comment")
public class BoardComment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="comment_seq", nullable=false, updatable=false)
	private long commentSeq;
	
	@Column(name="comment_content", length=1000, nullable=false, updatable=false)
	@NotNull
	private String commentContent;
	
	@Column(name="comment_is_public", length=1, nullable=false, updatable=false,
			columnDefinition = "char(1) CHECK (comment_is_public in ('T', 'F')) DEFAULT 'T'")
	@ColumnDefault("'T'")
	@NotNull
	private String commentIsPublic; // "T" or "F"
	
	@Column(name="comment_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime commentCreated;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Board board;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq")
	private User user;

	@PrePersist
	public void createdAt() {
		this.commentCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
