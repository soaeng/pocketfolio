package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.PortfolioUrlDto;
import com.ssafy.pocketfolio.api.dto.request.ItemReq;
import com.ssafy.pocketfolio.api.dto.request.PortfolioReq;
import com.ssafy.pocketfolio.api.dto.response.ItemCategoryListRes;
import com.ssafy.pocketfolio.api.dto.response.ItemRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.ItemCategoryRepository;
import com.ssafy.pocketfolio.db.repository.ItemRepository;
import com.ssafy.pocketfolio.db.view.ItemCategoryListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
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
    // 일단 받은 asset으로만 등록, 이후 image로 patch 통해 추가
    public Boolean insertItem(ItemReq req, List<MultipartFile> files) {
        log.debug("[POST] Service - insertItem");

        try {
            for (MultipartFile file : files) {
                String dest = fileHandler.saveFile(file, "item/" + req.getCategory());
                int idx = file.getName().lastIndexOf(".");
                log.debug("file.getName: " + file.getName());
                log.debug("file.getOriginalFileName: " + file.getOriginalFilename());
                ItemCategory category = itemCategoryRepository.findByNameEngEquals(req.getCategory());
                log.debug("category: " + category.toString());
                String filename = file.getOriginalFilename();
                assert filename != null;
                Item item = Item.builder()
                        .name(filename.substring(0, idx))
                        .asset(dest)
                        .image("")
                        .itemCategory(category)
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
}
