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
	
	@Column(name="port_url", length=255, nullable=false)
	@NotNull
	private String portUrl;

	@Column(name="port_url_name", length=50) // remove if not needed
	private String portUrlName;
	
	@Column(name="port_url_type", nullable=false)
	@NotNull
	private int portUrlType;
	
	public void updateUrl(String portUrl) { // update URL only
		this.portUrl = portUrl;
	}
	
	public void updateUrlName(String portUrlName) { // can take null
		this.portUrlName = portUrlName;
	}
	
	public void updateUrlType(int portUrlType) {
		this.portUrlType = portUrlType;
	}
}
