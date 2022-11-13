package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.entity.Image;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;

@Builder
@Tag(name = "ImageRes", description = "이미지 등록 후 Response")
public class ImageRes {
    @Schema(description = "이미지 번호")
    private Long imageSeq;
    @Schema(description = "이미지 이름")
    private String name;
    @Schema(description = "이미지 주소")
    private String url;

    public static ImageRes toDto(Long imageSeq, Image image) {
        return ImageRes.builder()
                .imageSeq(imageSeq)
                .name(image.getName())
                .url(image.getUrl())
                .build();
    }
}
