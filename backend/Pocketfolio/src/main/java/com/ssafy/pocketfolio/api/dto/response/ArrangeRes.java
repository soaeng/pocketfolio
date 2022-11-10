package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Item;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "ArrangeRes", description = "배치 Response")
public class ArrangeRes {
    @Schema(description = "배치 번호", nullable = false)
    private Long arrangeSeq;

    @Schema(description = "아이템 번호", nullable = false)
    private Long itemSeq;

    @Schema(description = "아이템 이름", nullable = false, maxLength = 20)
    private String name;

    @Schema(description = "아이템 asset 파일 경로", nullable = false, maxLength = 255, example = "/upload/object/J2EeRo2d.obj")
    private String asset;

    @Schema(description = "아이템 이미지 파일 경로", nullable = false, maxLength = 255, example = "/upload/img/J2EeRo2d.jpg")
    private String image;

    public ArrangeRes(Item item) {
        itemSeq = item.getItemSeq();
        name = item.getName();
        asset = item.getAsset();
        image = item.getImage();
    }
}
