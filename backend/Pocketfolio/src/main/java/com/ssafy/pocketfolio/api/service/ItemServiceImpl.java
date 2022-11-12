package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.ItemCategoryListRes;
import com.ssafy.pocketfolio.api.dto.response.ItemRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.api.util.TranslateHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.ItemCategoryRepository;
import com.ssafy.pocketfolio.db.repository.ItemRepository;
import com.ssafy.pocketfolio.db.view.ItemCategoryListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final int SIZE_PER_PAGE = 24;

    private final long CATEGORY_ALL = 0;

    private final ItemRepository itemRepository;

    private final ItemCategoryRepository itemCategoryRepository;
    private final MultipartFileHandler fileHandler;
    private final TranslateHandler transHandler;

    @Override
    public List<ItemCategoryListRes> findItemCategoryList() {
        List<ItemCategoryListRes> result = new ArrayList<>();
        List<ItemCategoryListView> list = itemCategoryRepository.findItemCategoryList(SIZE_PER_PAGE);
        list.forEach(view -> result.add(new ItemCategoryListRes(view)));
        return result;
    }

    @Override
    public List<ItemRes> findItemList(long itemCategorySeq, int page) {
        if (itemCategorySeq < 0) {
            throw new IllegalArgumentException("카테고리 번호가 올바르지 않습니다.");
        }
        if (page < 1) {
            throw new IllegalArgumentException("페이지가 올바르지 않습니다.");
        }

        List<Item> itemPage;
        List<ItemRes> itemResList = new ArrayList<>();

        if (itemCategorySeq == CATEGORY_ALL) {
            itemPage = itemRepository.findAll(SIZE_PER_PAGE, (page - 1) * SIZE_PER_PAGE);
        } else {
            itemPage = itemRepository.findByCategorySeq(itemCategorySeq, SIZE_PER_PAGE, (page - 1) * SIZE_PER_PAGE);
        }

        if (itemPage.size() == 0) {
            throw new IllegalArgumentException("카테고리 이름이 잘못되었거나 초과한 페이지입니다.");
        }

        itemPage.forEach(item -> itemResList.add(new ItemRes(item)));
        return itemResList;
    }

    @Override
    public ItemRes findItem(long itemSeq) {
        return new ItemRes(itemRepository.findById(itemSeq).orElseThrow(() -> new IllegalArgumentException("아이템이 존재하지 않습니다.")));
    }

    @Override
    @Transactional
    // 일단 받은 asset으로만 등록, 이후 image로 patch 통해 추가
    public Boolean insertItem(String category, List<MultipartFile> files) {
        log.debug("[POST] Service - insertItem");

        try {
            for (MultipartFile file : files) {
                // 파일 저장
                String dest = fileHandler.saveFile(file, "item/" + category);
                String filename = file.getOriginalFilename();
                assert filename != null;
                int idx = filename.lastIndexOf(".");
                // 확장자 제외한 영문 이름 가져오기
                filename = filename.substring(0, idx);
                // 번역된 한글 이름
                String nameKor = transHandler.translate(filename);

                ItemCategory itemCategory = itemCategoryRepository.findByNameEngEquals(category);
                Item item = Item.builder()
                        .nameEng(filename)
                        .nameKor(nameKor)
                        .asset(dest)
                        .image(dest)
                        .itemCategory(itemCategory)
                        .build();
                log.debug("item: " + item.toString());
                itemRepository.save(item);
            }
            return true;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public Boolean updateImage(String category, List<MultipartFile> files) {
        log.debug("[PATCH] Service - updateImage");

        try {
            for (MultipartFile file : files) {
                // 파일 저장
                String dest = fileHandler.saveFile(file, "item/" + category + "/image");
                String filename = file.getOriginalFilename();
                assert filename != null;
                int idx = filename.lastIndexOf(".");
                // 확장자 제외한 영문 이름 가져오기
                filename = filename.substring(0, idx);

                Item item = itemRepository.findByNameEngEquals(filename);
                item.updateImage(dest);
            }
            return null;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

}
