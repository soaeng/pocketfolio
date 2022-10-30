package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(
name="oauth",
uniqueConstraints = {
		@UniqueConstraint(name="UK_OAUTH_KEY", columnNames={"key"}),
		@UniqueConstraint(name="UK_OAUTH_USER_FROM", columnNames={"user_seq", "from"})
}
)
public class Oauth {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="oauth_seq", nullable=false, updatable=false)
	private long oauthSeq;
	
	@Column(name="key", length=127, nullable=false, updatable=false)
	@NotNull
	private String key;

	@Column(name="from", length=30, nullable=false, updatable=false)
	@NotNull
	private String from;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
}
