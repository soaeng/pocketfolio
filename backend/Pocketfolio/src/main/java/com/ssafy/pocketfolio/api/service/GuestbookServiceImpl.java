package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;
import com.ssafy.pocketfolio.db.repository.GuestbookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuestbookServiceImpl implements GuestbookService {

    private final GuestbookRepository guestbookRepository;

    @Override
    public Long insertGuestbook(GuestbookReq req, long userSeq) {

        return null;
    }

    @Override
    public List<GuestbookRes> findGuestbookList(long roomSeq, long userSeq) {
        return null;
    }

    @Override
    public Boolean deleteGuestbook(long guestbookSeq, long userSeq) {
        return null;
    }

    @Override
    public Long insertGuestbookComment(GuestbookCommentReq req, long guestbookSeq, long userSeq) {
        return null;
    }

    @Override
    public Boolean deleteGuestbookComment(long guestbookSeq, long userSeq) {
        return null;
    }
}
