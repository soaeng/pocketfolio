package com.ssafy.pocketfolio.api.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "RoomArrangeReq", description = "포켓 업데이트 Request DTO")
public class RoomArrangeReq {
    @Schema(description = "포켓 테마", maxLength = 20)
    private String theme;

    @Schema(description = "배치 정보 리스트")
    private List<ArrangeReq> arranges;

}
