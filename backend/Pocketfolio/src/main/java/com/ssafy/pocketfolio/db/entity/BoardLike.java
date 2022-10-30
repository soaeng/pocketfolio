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
name="board_like",
uniqueConstraints = {
		@UniqueConstraint(name="UK_BOARD_LIKE", columnNames={"board_seq", "user_seq"})
}
)
public class BoardLike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="board_like_seq", nullable=false, updatable=false)
	private long boardLikeSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Board board;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;

}
