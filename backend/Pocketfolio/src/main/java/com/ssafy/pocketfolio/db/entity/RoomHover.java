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
name="room_hover",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ROOM_HOVER", columnNames={"room_seq", "url"})
}
)
public class RoomHover {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_hover_seq", nullable=false, updatable=false)
	private long roomHoverSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@Column(name="url", length=255, nullable=false, updatable=false)
	@NotNull
	private String url;
	
}
