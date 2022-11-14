package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Arrange;
import com.ssafy.pocketfolio.db.entity.Item;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import com.ssafy.pocketfolio.db.entity.Room;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "ArrangeReq", description = "배치 Request DTO")
public class ArrangeReq {
    @Schema(description = "배치 번호")
    private Long arrangeSeq;

    @Schema(description = "아이템 번호", nullable = false)
    private Long itemSeq;

    @Schema(description = "위치 ([0]:x / [1]:y / [2]:z)", nullable = false)
    private Double[] location;

    @Schema(description = "회전 각도", nullable = false)
    private Double rotation;

    @Schema(description = "포트폴리오 번호")
    private Long portSeq;

    public Arrange toEntity(Room room, Item item) {
        return this.toEntity(room, item, null);
    }

    public Arrange toEntity(Room room, Item item, Portfolio portfolio) {
        return Arrange.builder()
                .room(room)
                .item(item)
                .locationX(this.location[0])
                .locationY(this.location[1])
                .locationZ(this.location[2])
                .rotation(this.rotation)
                .portfolio(portfolio)
                .build();
    }

}
