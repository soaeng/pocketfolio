package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.ItemCategoryListRes;
import com.ssafy.pocketfolio.api.dto.response.ItemRes;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ItemService {

    /**
     * 카테고리 목록 조회
     * @return 카테고리 목록
     */
    List<ItemCategoryListRes> findItemCategoryList();

    /**
     * 카테고리별 아이템 조회
     * @param itemCategorySeq 카테고리
     * @param page 페이지 번호
     * @return 아이템 목록
     */
    List<ItemRes> findItemList(long itemCategorySeq, int page);

    /**
     * 아이템 상세 조회
     * @param itemSeq 아이템 번호
     * @return 아이템 상세 내용
     */
    ItemRes findItem(long itemSeq);

    /**
     * 아이템 등록
     * @param category 아이템 카테고리 영문명
     * @param files 에셋 파일
     * @return 등록 여부
     * @throws IOException 등록 실패 시 던져짐
     */
    Boolean insertItem(String category, List<MultipartFile> files) throws IOException;

    /**
     * 에셋 이미지 등록
     * @param category 아이템 카테고리 영문명
     * @param images 에셋 이미지 파일
     * @return 등록 여부
     * @throws IOException 등록 실패 시 던져짐
     */
    Boolean updateImage(String category, List<MultipartFile> images) throws IOException;
}
