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
import javax.persistence.PreUpdate;
import javax.persistence.Table;

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
@Table(name="portfolio")
public class Portfolio {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="port_no", nullable=false, updatable=false)
	private long portNo;

	@Column(name="port_name", length=50)
	private String portName;

	@Column(name="port_summary", length=2000)
	private String portSummary;
	
	@Column(name="port_thumbnail", length=255) // remove if not needed
	private String portThumbnail;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
	
	@Column(name="port_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime portCreated;
	
	@Column(name="port_updated", nullable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime portUpdated;
	
	public void updatePortfolio(String portName, String portSummary, String portThumbnail) {
		this.portName = portName;
		this.portSummary = portSummary;
		this.portThumbnail = portThumbnail;
	}
	
	@PrePersist
	public void createdAt() {
		this.portCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
		this.portUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
	
	@PreUpdate
	public void updatedAt() {
		this.portUpdated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
