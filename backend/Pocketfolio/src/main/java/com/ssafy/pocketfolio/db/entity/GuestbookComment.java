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
@Table(name="guestbook_comment")
public class GuestbookComment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="comment_no", nullable=false, updatable=false)
	private long commentNo;
	
	@Column(name="comment_content", length=1000, nullable=false)
	@NotNull
	private String commentContent;
	
	@Column(name="comment_is_public", nullable=false,
			columnDefinition = "char(1) CHECK (comment_is_public in ('T', 'F')) DEFAULT 'T'")
	@ColumnDefault("'T'")
	@NotNull
	private String commentIsPublic; // "T" or "F"
	
	@Column(name="comment_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime commentCreated;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="guestbook_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Guestbook guestbook;
	
//	public void updateCommentContent(String commentContent) { // update content only
//		this.commentContent = commentContent;
//	}
//	
//	public void updateGuestbookIsPublic(String commentIsPublic) { // change public only
//		this.commentIsPublic = commentIsPublic;
//	}
	
	@PrePersist
	public void createdAt() {
		this.commentCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
