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
@Table(name="portfolio")
public class Portfolio {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="port_seq", nullable=false, updatable=false)
	private long portSeq;

	@Column(name="name", length=50)
	private String name;

	@Column(name="summary", length=2000)
	private String summary;
	
	@Column(name="thumbnail", length=255) // remove if not needed
	private String thumbnail;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	@Column(name="created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime created;
	
	@Column(name="updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime updated;
	
	public void updatePortfolio(String name, String summary, String thumbnail) {
		this.name = name;
		this.summary = summary;
		this.thumbnail = thumbnail;
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
