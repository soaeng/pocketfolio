package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.HitStatListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Builder
@Tag(name = "HitStatRes", description = "일주일 방문자 Response")
public class HitStatRes {
    @Schema(description = "일주일 방문자 통계")
    private Map<String, Long> hitStat;

    public static HitStatRes toDto(List<HitStatListView> hitStatList) {
        Map<String, Long> hitStat = new LinkedHashMap<>();

        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        // 오늘 날짜
        hitStat.put(sdf.format(cal.getTime()), 0L);
        // 일주일 날짜
        for(int i=0; i<6; i++) {
            cal.add(Calendar.DAY_OF_WEEK, -1);
            log.debug("date: " + sdf.format(cal.getTime()));
            hitStat.put(sdf.format(cal.getTime()), 0L);
        }

        for(
                HitStatListView hitStatDate : hitStatList) {
            hitStat.put(hitStatDate.getDate(), hitStatDate.getCount());
        }

        return HitStatRes.builder()
                .hitStat(hitStat)
                .build();
    }


}
