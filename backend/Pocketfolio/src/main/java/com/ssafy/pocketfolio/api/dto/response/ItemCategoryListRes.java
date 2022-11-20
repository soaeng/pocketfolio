package com.ssafy.pocketfolio.api.dto.response;

import com.ssafy.pocketfolio.db.view.ItemCategoryListView;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Tag(name = "ItemCategoryListRes", description = "아이템 카테고리 리스트 Response")
public class ItemCategoryListRes {
    @Schema(description = "아이템 카테고리 번호", nullable = false)
    private Long itemCategorySeq;

    @Schema(description = "카테고리 한글 이름", nullable = false, maxLength = 20)
    private String nameKor;

    @Schema(description = "해당 카테고리의 아이템 리스트 마지막 페이지", nullable = false)
    private Integer lastPage;

    public ItemCategoryListRes(ItemCategoryListView view) {
        itemCategorySeq = view.getItemCategorySeq();
        nameKor = view.getNameKor();
        lastPage = view.getLastPage();
    }
}
