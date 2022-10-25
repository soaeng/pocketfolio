package com.ssafy.pocketfolio.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(
name="follow",
uniqueConstraints = {
		@UniqueConstraint(name="UK_FOLLOW", columnNames={"follow_from", "follow_to"})
}
)
public class Follow {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="follow_no", nullable=false, updatable=false)
	private long followNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="follow_from", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User followFrom;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="follow_to", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private User followTo;
}
