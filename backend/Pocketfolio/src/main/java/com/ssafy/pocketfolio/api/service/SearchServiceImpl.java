package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.SearchPortfolioListRes;
import com.ssafy.pocketfolio.api.dto.response.SearchRes;
import com.ssafy.pocketfolio.api.dto.response.SearchRoomListRes;
import com.ssafy.pocketfolio.api.dto.response.SearchUserListRes;
import com.ssafy.pocketfolio.db.repository.SearchRepository;
import com.ssafy.pocketfolio.db.view.SearchPortfolioListView;
import com.ssafy.pocketfolio.db.view.SearchRoomListView;
import com.ssafy.pocketfolio.db.view.SearchUserListView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {
    private final SearchRepository searchRepository;

    private final int SORT_ROOM_NUM_MAX = 3; // 각 sort 번호 최대값
    private final int SORT_ROOM_BY_LIKE = 1;
    private final int SORT_ROOM_BY_HIT = 2;
    private final int SORT_ROOM_BY_FOLLOWER = 3;

    private final int SORT_PORT_NUM_MAX = 2;
    private final int SORT_PORT_BY_UPDATED = 1;
    private final int SORT_PORT_BY_FOLLOWER = 2;

    private final int SORT_USER_NUM_MAX = 1; // 3?
    private final int SORT_USER_BY_FOLLOWER = 1;

    private final int CATEGORY_TOTAL = 11; // 카테고리 총 개수
    private final long CATEGORY_BINARY_MAX = Long.parseLong("1".repeat(CATEGORY_TOTAL), 2); // when All 카테고리 selected
    private final int SEARCH_DEFAULT_SIZE = 20; // 한 페이지에 띄워주는 개수 (프론트에서 안 넘겼을 시)

    @Override
    public SearchRes searchRoom(Long myUserSeq, String keyword, Integer sort, Long categorySeqBinary, Integer size, Integer page) {
        SearchRes result;

        if (myUserSeq == null) {
            myUserSeq = 0L;
        }

        if (keyword == null || keyword.isEmpty()) { // QueryDSL로 바꾸면 "like %%" 자체를 없애고 검색
            keyword = ""; // like %%
        }

        if (sort == null || sort < 1 || sort > SORT_ROOM_NUM_MAX) {
            sort = SORT_ROOM_BY_LIKE; // default
        }

        ArrayList<Long> categories = new ArrayList<>();
        boolean isAllCategory = false;
        if (categorySeqBinary == null || categorySeqBinary < 0 || categorySeqBinary >= CATEGORY_BINARY_MAX) {
            isAllCategory = true;
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

//        Pageable pageable = PageRequest.of(page, size, JpaSort.unsafe(Sort.Direction.DESC, "like"));
        Pageable pageable = PageRequest.of(page, size);
        Page<SearchRoomListView> viewPage;
        switch (sort) {
            case SORT_ROOM_BY_HIT:
                if (isAllCategory) {
                    viewPage = searchRepository.searchRoomByAllCategoryOrderByHit(myUserSeq, keyword, pageable);
                } else {
                    viewPage = searchRepository.searchRoomOrderByHit(myUserSeq, keyword, categories, pageable);
                }
                break;
            case SORT_ROOM_BY_FOLLOWER:
                if (isAllCategory) {
                    viewPage = searchRepository.searchRoomByAllCategoryOrderByFollowerTotal(myUserSeq, keyword, pageable);
                } else {
                    viewPage = searchRepository.searchRoomOrderByFollowerTotal(myUserSeq, keyword, categories, pageable);
                }
                break;
            default: // SORT_ROOM_BY_LIKE
                if (isAllCategory) {
                    viewPage = searchRepository.searchRoomByAllCategoryOrderByLike(myUserSeq, keyword, pageable);
                } else {
                    viewPage = searchRepository.searchRoomOrderByLike(myUserSeq, keyword, categories, pageable);
                }
                break;
        }

        List<SearchRoomListRes> list = new ArrayList<>();
        viewPage.getContent().forEach(e -> list.add(new SearchRoomListRes(e)));

        result = new SearchRes(list, viewPage.getTotalPages(), viewPage.getTotalElements());

        return result;
    }

    @Override
    public SearchRes searchPortfolio(String keyword, Integer sort, Integer size, Integer page) {
        SearchRes result;

        if (keyword == null || keyword.isEmpty()) { // QueryDSL로 바꾸면 "like %%" 자체를 없애고 검색
            keyword = ""; // like %%
        }

        if (sort == null || sort < 1 || sort > SORT_PORT_NUM_MAX) {
            sort = SORT_PORT_BY_UPDATED; // default
        }

        if (size == null || size < 1) {
            size = SEARCH_DEFAULT_SIZE;
        }

        if (page == null || page < 1) {
            page = 1;
        }
        page--;

        Pageable pageable = PageRequest.of(page, size);
        Page<SearchPortfolioListView> viewPage;
        switch (sort) {
            case SORT_PORT_BY_FOLLOWER:
                viewPage = searchRepository.searchPortfolioOrderByFollowerTotal(keyword, pageable);
                break;
            default: // SORT_PORT_BY_UPDATED
                viewPage = searchRepository.searchPortfolioOrderByUpdated(keyword, pageable);
                break;
        }

        List<SearchPortfolioListRes> list = new ArrayList<>();
        viewPage.getContent().forEach(e -> {
            if (e.getArrangeSeq() != null) {
                list.add(new SearchPortfolioListRes(e, searchRepository.searchPortfolioAddedRoom(e.getArrangeSeq()).orElse(null)));
            } else {
                list.add(new SearchPortfolioListRes(e));
            }
        });

        result = new SearchRes(list, viewPage.getTotalPages(), viewPage.getTotalElements());

        return result;
    }

    @Override
    public SearchRes searchUser(Long myUserSeq, String keyword, Integer sort, Integer size, Integer page) {
        SearchRes result;

        if (myUserSeq == null) {
            myUserSeq = 0L;
        }

        if (keyword == null || keyword.isEmpty()) { // QueryDSL로 바꾸면 "like %%" 자체를 없애고 검색
            keyword = ""; // like %%
        }

        if (sort == null || sort < 1 || sort > SORT_USER_NUM_MAX) {
            sort = SORT_USER_BY_FOLLOWER; // default
        }

        if (size == null || size < 1) {
            size = SEARCH_DEFAULT_SIZE;
        }

        if (page == null || page < 1) {
            page = 1;
        }
        page--;

        Pageable pageable = PageRequest.of(page, size);
        Page<SearchUserListView> viewPage;
        switch (sort) {
            default: // SORT_USER_BY_FOLLOWER
                viewPage = searchRepository.searchUserOrderByFollower(myUserSeq, keyword, pageable);
                break;
        }

        List<SearchUserListRes> list = new ArrayList<>();
        viewPage.getContent().forEach(e -> list.add(new SearchUserListRes(e)));

        result = new SearchRes(list, viewPage.getTotalPages(), viewPage.getTotalElements());

        return result;
    }
}
