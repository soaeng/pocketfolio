package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Arrange;
import com.ssafy.pocketfolio.db.entity.Portfolio;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "ArrangeRes", description = "배치 Response DTO")
public class ArrangeRes {
    @Schema(description = "배치 번호")
    private Long arrangeSeq;

    @Schema(description = "아이템", nullable = false)
    private ItemRes item;

    @Schema(description = "위치 ([0]:x / [1]:y / [2]:z)", nullable = false)
    private Double[] location;

    @Schema(description = "회전 각도", nullable = false)
    private Double rotation;

    @Schema(description = "포트폴리오 번호")
    private Long portSeq;

    public ArrangeRes(Arrange arrange) {
        arrangeSeq = arrange.getArrangeSeq();
        this.item = new ItemRes(arrange.getItem());
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

}
