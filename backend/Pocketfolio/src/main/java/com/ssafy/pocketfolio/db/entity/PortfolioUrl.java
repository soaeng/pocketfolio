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
@Table(name="portfolio_url")
public class PortfolioUrl {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="port_url_seq", nullable=false, updatable=false)
	private long portUrlSeq;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="port_seq", nullable=false, updatable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@NotNull
	private Portfolio portfolio;
	
	@Column(name="url", length=255, nullable=false)
	@NotNull
	private String url;

	@Column(name="name", length=50) // remove if not needed
	private String name;
	
	@Column(name="type", nullable=false)
	@NotNull
	private int type;
	
	public void updateUrl(String url) { // update URL only
		this.url = url;
	}
	
	public void updateName(String name) { // can take null
		this.name = name;
	}
	
	public void updateType(int type) {
		this.type = type;
	}
}
