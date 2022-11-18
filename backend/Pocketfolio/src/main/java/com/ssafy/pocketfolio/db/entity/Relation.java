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
@Table(name="relation")
public class Relation {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="relation_seq", nullable=false, updatable=false)
    private Long relationSeq;

    @OneToOne
    @JoinColumn(name="user_seq", nullable=false, updatable=false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @NotNull
    private User userSeq;

    @Column(name="room_list", nullable = false)
    @NotNull
    private String roomList;
}
