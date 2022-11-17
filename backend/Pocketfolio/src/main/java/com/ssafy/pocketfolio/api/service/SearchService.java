package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.response.SearchRes;

public interface SearchService {

    SearchRes searchRoom(Long myUserSeq, String keyword, Integer sort, Long categorySeqBinary, Integer size, Integer page);

    SearchRes searchPortfolio(String keyword, Integer sort, Integer size, Integer page);


}
