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
@Tag(name = "ItemRes", description = "아이템 Response")
public class ItemRes {
    @Schema(description = "아이템 번호", nullable = false)
    private Long itemSeq;

    @Schema(description = "아이템 영어 이름", nullable = false, maxLength = 30)
    private String nameEng;
    
    @Schema(description = "아이템 한글 이름", nullable = false, maxLength = 20)
    private String nameKor;

    @Schema(description = "아이템 asset 파일 경로", nullable = false, maxLength = 255, example = "/upload/object/J2EeRo2d.obj")
    private String asset;

    @Schema(description = "아이템 이미지 파일 경로", nullable = false, maxLength = 255, example = "/upload/img/J2EeRo2d.jpg")
    private String image;

    public ItemRes(Item item) {
        itemSeq = item.getItemSeq();
        nameEng = item.getNameEng();
        nameKor = item.getNameKor();
        asset = item.getAsset();
        image = item.getImage();
    }
}
