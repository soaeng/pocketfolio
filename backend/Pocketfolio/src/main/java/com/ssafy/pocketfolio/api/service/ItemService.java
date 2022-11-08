package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.ItemRes;

import java.util.List;

public interface ItemService {

    /**
     * 카테고리 목록 조회
     * @return 카테고리 목록
     */
    List<String> findItemCategoryList();

    /**
     * 카테고리별 아이템 조회
     * @param category 카테고리
     * @return 아이템 목록
     */
    List<ItemRes> findItemList(String category, int page);

    /**
     * 아이템 상세 조회
     * @param itemSeq 아이템 번호
     * @return 아이템 상세 내용
     */
    ItemRes findItem(long itemSeq);

}
