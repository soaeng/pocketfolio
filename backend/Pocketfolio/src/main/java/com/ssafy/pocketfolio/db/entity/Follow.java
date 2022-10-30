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
name="follow",
uniqueConstraints = {
		@UniqueConstraint(name="UK_FOLLOW", columnNames={"user_from", "user_to"})
}
)
public class Follow {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="follow_seq", nullable=false, updatable=false)
	private long followSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_from", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User userFrom;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_to", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User userTo;
}
