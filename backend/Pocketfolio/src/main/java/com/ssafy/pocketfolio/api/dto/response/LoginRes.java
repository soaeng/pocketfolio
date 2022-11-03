package com.ssafy.pocketfolio.api.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "LoginRes", description = "로그인 Res")
public class LoginRes {
    @Schema(description = "액세스 토큰")
    private String accessToken;

    @Schema(description = "리프레쉬 토큰")
    private String refreshToken;

}
