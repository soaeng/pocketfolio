package com.ssafy.pocketfolio.api.dto;

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
@Tag(name = "ArrangeDto", description = "배치 Request/Response DTO")
public class ArrangeDto {
    @Schema(description = "배치 번호", nullable = false)
    private Long arrangeSeq;

    @Schema(description = "아이템 번호", nullable = false)
    private Long itemSeq;

    @Schema(description = "위치 ([0]:x / [1]:y / [2]:z)", nullable = false)
    private Double[] location;

    @Schema(description = "회전 각도", nullable = false)
    private Double rotation;

    @Schema(description = "포트폴리오 번호")
    private Long portSeq;

    public ArrangeDto(Arrange arrange) {
        arrangeSeq = arrange.getArrangeSeq();
        itemSeq = arrange.getItem().getItemSeq();
        Double[] locationXYZ = new Double[3];
        locationXYZ[0] = arrange.getLocationX();
        locationXYZ[1] = arrange.getLocationY();
        locationXYZ[2] = arrange.getLocationZ();
        location = locationXYZ;
        rotation = arrange.getRotation();
        Portfolio portfolio = arrange.getPortfolio();
        if (portfolio != null) {
            portSeq = portfolio.getPortSeq();
        }
    }

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
