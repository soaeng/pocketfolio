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
@Table(name="alert")
public class Alert {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="alert_seq", nullable=false, updatable=false)
	private long alertSeq;

	@Column(name="text", length=255, nullable=false)
	@NotNull
	private String text;
	
	@Column(name="url", length=255)
	private String url;

	@Column(name="is_confirmed", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (`is_confirmed` in ('T', 'F')) default 'F'")
	@ColumnDefault("'F'")
	@NotNull
	private String isConfirmed; // "T" or "F"

	@Column(name="created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	private LocalDateTime created;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	public void updateText(String text) { // for system or administrator
		this.text = text;
	}
	
	public void updateUrl(String url) { // for system or administrator
		this.url = url;
	}
	
	public void changeIsConfirmed() {
		this.isConfirmed = "T";
	}

	@PrePersist
	public void createdAt() {
		this.created = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
