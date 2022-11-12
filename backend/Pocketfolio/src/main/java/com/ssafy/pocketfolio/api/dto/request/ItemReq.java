package com.ssafy.pocketfolio.api.dto.request;

import com.ssafy.pocketfolio.db.entity.Item;
import com.ssafy.pocketfolio.db.entity.ItemCategory;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;

@Getter
@Tag(name = "ItemReq", description = "아이템 Request")
public class ItemReq {
    private String category;

    public static Item toEntity(String name, String assetUrl, ItemCategory category) {
        return Item.builder()
                .name(name)
                .asset(assetUrl)
                .itemCategory(category)
                .build();
    }
}
