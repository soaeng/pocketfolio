package com.ssafy.pocketfolio.api.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "UserUpdateReq", description = "유저 업데이트 Request DTO")
public class UserUpdateReq {
    @Schema(description = "이름", maxLength = 12)
    private String name;

    @Schema(description = "자기소개", maxLength = 200)
    private String describe;

    @Schema(description = "생년월일", example = "yyyy-MM-dd / 2001-01-01")
//    @DateTimeFormat(pattern = "yyyy-MM-dd") // 여기 변환 안 되면 수정
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private String birth;

}
