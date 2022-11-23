package com.ssafy.pocketfolio.db.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="Image")
public class Image {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="image_seq", nullable=false, updatable=false)
    private Long imageSeq;

    @Column(name="name", length=20, nullable=false)
    @NotNull
    private String name;

    @Column(name="url", nullable = false)
    @javax.validation.constraints.NotNull
    private String url;
}
