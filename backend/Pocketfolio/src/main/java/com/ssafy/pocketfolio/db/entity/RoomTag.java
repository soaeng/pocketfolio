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
name="room_tag",
uniqueConstraints = {
		@UniqueConstraint(name="UK_ROOM_TAG", columnNames={"room_no", "tag_no"})
}
)
public class RoomTag {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_tag_no", nullable=false, updatable=false)
	private long roomTagNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="room_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Room room;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="tag_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Tag tag;

	@Column(name="tag_name", length=20, nullable=false, updatable=false) // 반정규화
	@NotNull
	private String tagName;
}
