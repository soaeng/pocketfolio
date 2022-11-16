package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.SearchRes;
import com.ssafy.pocketfolio.api.dto.response.SearchRoomListRes;
import com.ssafy.pocketfolio.db.repository.SearchRepository;
import com.ssafy.pocketfolio.db.view.SearchRoomListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {
    private final SearchRepository searchRepository;

    // 각 sort 번호 최대값
    private final int SORT_ROOM_NUM_MAX = 3;
    private final int SORT_PORT_NUM_MAX = 2;
    private final int SORT_USER_NUM_MAX = 1; // 3?
    private final int CATEGORY_TOTAL = 11;
    private final long CATEGORY_BINARY_MAX = Long.parseLong("1".repeat(CATEGORY_TOTAL), 2);
    private final int SEARCH_DEFAULT_SIZE = 20;

    @Override
    public SearchRes searchRoom(Long myUserSeq, String keyword, Integer sort, Long categorySeqBinary, Integer size, Integer page) {
        SearchRes result = null;

        if (myUserSeq == null) {
            myUserSeq = 0L;
        }

        if (keyword == null || keyword.isEmpty()) { // QueryDSL로 바꾸면 "like %%" 자체를 없애고 검색
            keyword = ""; // like %%
        }

        if (sort == null || sort < 1 || sort > SORT_ROOM_NUM_MAX) {
            sort = 1;
        }

        ArrayList<Long> categories = new ArrayList<>();
        if (categorySeqBinary == null || categorySeqBinary < 0 || categorySeqBinary >= CATEGORY_BINARY_MAX) {
            categorySeqBinary = CATEGORY_BINARY_MAX;
        } else {
            char[] categoryBinary = Long.toBinaryString(categorySeqBinary).toCharArray();
            for (int i = categoryBinary.length - 1; i >= 0; i--) {
                if (categoryBinary[i] == '1') {
                    categories.add(Long.valueOf(i + 1));
                }
            }
        }

        if (size == null || size < 1) {
            size = SEARCH_DEFAULT_SIZE;
        }

        if (page == null || page < 1) {
            page = 1;
        }
        page--;

        Pageable pageable = PageRequest.of(page, size, Sort.by("room_seq").descending());
//        Pageable pageable = PageRequest.of(page, size, JpaSort.unsafe(Sort.Direction.DESC, "like.like"));
//        Pageable pageable = PageRequest.of(page, size, Sort.by("room_seq").descending());

        Page<SearchRoomListView> viewPage = searchRepository.searchRoom(myUserSeq, keyword, categories, pageable);

        List<SearchRoomListRes> list = new ArrayList<>();
        viewPage.getContent().forEach(e -> list.add(new SearchRoomListRes(e)));

        result = new SearchRes(list, viewPage.getTotalPages(), viewPage.getTotalElements());

        return result;
    }
}
