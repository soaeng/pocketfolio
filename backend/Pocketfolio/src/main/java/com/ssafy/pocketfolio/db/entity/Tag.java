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
name="tag",
uniqueConstraints = {
		@UniqueConstraint(name="UK_TAG", columnNames={"port_seq", "tag_name"})
}
)
public class Tag {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="tag_seq", nullable=false, updatable=false)
	private long tagSeq;

	@Column(name="tag_name", length=20, nullable=false, updatable=false)
	@NotNull
	private String tagName;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="port_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Portfolio portfolio;
}
