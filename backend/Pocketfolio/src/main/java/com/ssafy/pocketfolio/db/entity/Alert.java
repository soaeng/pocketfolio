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
	@Column(name="alert_no", nullable=false, updatable=false)
	private long alertNo;

	@Column(name="alert_text", length=255, nullable=false)
	@NotNull
	private String alertText;
	
	@Column(name="alert_url", length=255)
	private String alertUrl;

	@Column(name="alert_confirm", length=1, nullable=false,
			columnDefinition = "char(1) CHECK (`alert_confirm` in ('T', 'F')) default 'F'")
	@ColumnDefault("'T'")
	@NotNull
	private String alertConfirm; // "T" or "F"

	@Column(name="alert_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime alertCreated;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	public void updateAlertText(String alertText) { // for system or administrator
		this.alertText = alertText;
	}
	
	public void updateAlertUrl(String alertUrl) { // for system or administrator
		this.alertUrl = alertUrl;
	}
	
	public void checkConfirm() {
		this.alertConfirm = "T";
	}

	@PrePersist
	public void createdAt() {
		this.alertCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
