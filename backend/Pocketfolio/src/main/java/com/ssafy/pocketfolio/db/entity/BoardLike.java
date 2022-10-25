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
@Table(
name="board_like",
uniqueConstraints = {
		@UniqueConstraint(name="UK_BOARD_LIKE", columnNames={"board_no", "user_no"})
}
)
public class BoardLike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="board_like_no", nullable=false, updatable=false)
	private long boardLikeNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Board board;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;
}
