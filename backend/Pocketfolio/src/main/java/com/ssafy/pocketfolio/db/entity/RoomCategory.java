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
@Entity
@Table(
name="room_category",
//indexes = @Index(name="IDX_CHATROOM_USER_CHATROOMNO", columnList="chatroom_seq"),
	uniqueConstraints = {
			@UniqueConstraint(name="UK_ROOM_CATEGORY", columnNames={"room_seq", "category_seq"})
	}
)
public class RoomCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_category_seq", nullable=false, updatable=false)
	private long roomCategorySeq;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="category_seq", nullable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Category category;

	public void updateCategory(Category category) {
		this.category = category;
	}
}
