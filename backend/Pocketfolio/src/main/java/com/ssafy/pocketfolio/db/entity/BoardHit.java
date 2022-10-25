package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(
name="board_hit",
uniqueConstraints = {
		@UniqueConstraint(name="UK_BOARD_HIT", columnNames={"board_no", "user_no", "board_hit_date"})
} // user_no가 null이 되어서 유니크키가 제대로 작동하지 않을 경우 수정 필요
)
public class BoardHit {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="board_hit_no", nullable=false, updatable=false)
	private long boardHitNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="board_no", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Board board;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_no")
	private User user;
	
	@Column(name="board_hit_date", nullable=false, updatable=false, columnDefinition = "date DEFAULT (current_date)")
	@NotNull
	private LocalDate boardHitDate;
	
	@PrePersist
	public void createdAt() {
		this.boardHitDate = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDate();
	}
}
