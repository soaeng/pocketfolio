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
@Table(name="guestbook_comment")
public class GuestbookComment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="comment_seq", nullable=false, updatable=false)
	private long commentSeq;
	
	@Column(name="content", length=1000, nullable=false)
	@NotNull
	private String content;
	
	@Column(name="is_public", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (is_public in ('T', 'F')) DEFAULT 'T'")
	@ColumnDefault("'T'")
	@NotNull
	private String isPublic; // "T" or "F"
	
	@Column(name="created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime created;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="guestbook_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Guestbook guestbook;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq")
	private User user;
	
//	public void updateContent(String content) { // update content only
//		this.content = content;
//	}
//	
//	public void changeIsPublic(String isPublic) { // change public only
//		this.isPublic = isPublic;
//	}
	
	@PrePersist
	public void createdAt() {
		this.created = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
