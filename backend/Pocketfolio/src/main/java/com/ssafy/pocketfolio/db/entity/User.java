package com.ssafy.pocketfolio.db.entity;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import javax.persistence.*;

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
@Table(
name="user",
uniqueConstraints = {
		@UniqueConstraint(name="UK_USER_EMAIL", columnNames="user_email")
}
)
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_seq", nullable=false, updatable=false)
	private long userSeq;

	@Column(name="user_email", length=50, nullable=false)
	@NotNull
	private String userEmail;
	
	@Column(name="user_name", length=12, nullable=false)
	@NotNull
	private String userName;
	
	@Column(name="user_profile", length=255)
	private String userProfile;
	
	@Column(name="user_desc", length=200)
	private String userDesc;
	
	@Column(name="user_created", nullable=false, updatable=false, columnDefinition = "datetime DEFAULT (current_time)")
	@NotNull
	private LocalDateTime userCreated;

	@Column(name="user_token", length=1000)
	private String userToken;
	
//	@Column(name="user_point", nullable=false, columnDefinition = "int CHECK (user_point >= 0)")
//	@ColumnDefault("0")
//	private int userPoint;

	public void updateUser(String userName, String userProfile, String userDesc) {
		this.userName = userName;
		this.userProfile = userProfile;
		this.userDesc = userDesc;
	}

	public void updateUserToken(String userToken) {
		this.userToken = userToken;
	}

	public void updateUserEmail(String userEmail) { // need duplicate check
		this.userEmail = userEmail;
	}
	
	@PrePersist
	public void createdAt() {
		this.userCreated = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();
	}
}
