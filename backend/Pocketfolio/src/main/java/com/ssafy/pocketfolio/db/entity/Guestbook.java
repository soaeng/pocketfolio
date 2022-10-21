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
@Table(name="guestbook")
public class Guestbook {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="guestbook_no", nullable=false, updatable=false)
	private long guestbookNo;
	
	@Column(name="guestbook_content", length=1000, nullable=false)
	@NotNull
	private String guestbookContent;
	
	@Column(name="guestbook_is_public", nullable=false,
			columnDefinition = "char(1) CHECK (guestbook_is_public in ('T', 'F')) DEFAULT 'T'")
	@ColumnDefault("'T'")
	@NotNull
	private String guestbookIsPublic; // "T" or "F"
	
	@Column(name="guestbook_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime guestbookCreated;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
//	public void updateGuestbookContent(String guestbookContent) { // update content only
//		this.guestbookContent = guestbookContent;
//	}
//	
//	public void updateGuestbookIsPublic(String guestbookIsPublic) { // change public only
//		this.guestbookIsPublic = guestbookIsPublic;
//	}
	
	@PrePersist
	public void createdAt() {
		this.guestbookCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
