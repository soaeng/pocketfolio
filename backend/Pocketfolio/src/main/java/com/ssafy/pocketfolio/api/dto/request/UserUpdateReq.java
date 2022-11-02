package com.ssafy.pocketfolio.api.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "UserDto", description = "유저 Dto (res + req)")
public class UserUpdateReq {
    @Schema(description = "이름", nullable = false, maxLength = 12)
    private String name;

    @Schema(description = "자기소개", maxLength = 200)
    private String describe;

}
