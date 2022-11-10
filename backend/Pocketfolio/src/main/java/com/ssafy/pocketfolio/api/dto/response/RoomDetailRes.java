package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.api.dto.RoomDto;
import lombok.Builder;

@Builder
public class RoomDetailRes {
    private RoomDto room;
    private long hitCount;
    private long todayCount;
    private long likeCount;
}
