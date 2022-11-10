package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;
import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.GuestbookRepository;
import com.ssafy.pocketfolio.db.repository.RoomRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuestbookServiceImpl implements GuestbookService {

    private final UserRepository userRepository;
    private final GuestbookRepository guestbookRepository;

    @Override
    public Long insertGuestbook(GuestbookReq req, long userSeq) {
        log.debug("[POST] Service - insertGuestbook");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        try {
            Guestbook guestbook = GuestbookReq.toEntity(req, user);
            Long guestbookSeq = guestbookRepository.save(guestbook).getGuestbookSeq();
            log.debug("저장된 방명록 번호: " + guestbookSeq);
            return guestbookSeq;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    public List<GuestbookRes> findGuestbookList(long roomSeq, long userSeq) {
        log.debug("[POST] Service - findGuestbookList");
        List<GuestbookRes> guestbookResList;
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        try {
            guestbookResList = guestbookRepository.findAllByRoom_RoomSeq(roomSeq).stream().map(GuestbookRes::toDto).collect(Collectors.toList());
            log.debug("guestbooks size: " + guestbookResList.size());
        } catch (Exception e) {
            log.error(e.getMessage());
            guestbookResList = null;
        }
        return guestbookResList;
    }

    @Override
    public Boolean deleteGuestbook(long guestbookSeq, long userSeq) {
        log.debug("[POST] Service - deleteGuestbook");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        return null;
    }

    @Override
    public Long insertGuestbookComment(GuestbookCommentReq req, long guestbookSeq, long userSeq) {
        log.debug("[POST] Service - insertGuestbookComment");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        return null;
    }

    @Override
    public Boolean deleteGuestbookComment(long guestbookSeq, long userSeq) {
        log.debug("[POST] Service - deleteGuestbookComment");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        return null;
    }
}
