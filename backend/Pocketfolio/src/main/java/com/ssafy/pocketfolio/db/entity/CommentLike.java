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
name="comment_like",
uniqueConstraints = {
		@UniqueConstraint(name="UK_COMMENT_LIKE", columnNames={"comment_seq", "user_seq"})
}
)
public class CommentLike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="comment_like_seq", nullable=false, updatable=false)
	private long commentLikeSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="comment_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private BoardComment boardComment;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User user;

}
