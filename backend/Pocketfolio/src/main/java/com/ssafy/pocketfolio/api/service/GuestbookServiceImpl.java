package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;
import com.ssafy.pocketfolio.db.entity.Guestbook;
import com.ssafy.pocketfolio.db.entity.GuestbookComment;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.GuestbookCommentRepository;
import com.ssafy.pocketfolio.db.repository.GuestbookRepository;
import com.ssafy.pocketfolio.db.repository.RoomRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuestbookServiceImpl implements GuestbookService {

    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final GuestbookRepository guestbookRepository;
    private final GuestbookCommentRepository guestbookCommentRepository;

    @Override
    @Transactional
    public Long insertGuestbook(GuestbookReq req, long roomSeq, long userSeq) {
        log.debug("[POST] Service - insertGuestbook");
        try {
            Guestbook guestbook = Guestbook.builder()
                    .content(req.getContent())
                    .isPublic(req.getIsPublic())
                    .room(roomRepository.getReferenceById(roomSeq))
                    .user(userRepository.getReferenceById(userSeq))
                    .build();
            Long guestbookSeq = guestbookRepository.save(guestbook).getGuestbookSeq();
            log.debug("저장된 방명록 번호: " + guestbookSeq);
            return guestbookSeq;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<GuestbookRes> findGuestbookList(long roomSeq, long userSeq) {
        log.debug("[POST] Service - findGuestbookList");
        List<GuestbookRes> guestbookResList;
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
    @Transactional
    public Boolean deleteGuestbook(long guestbookSeq, long userSeq) {
        log.debug("[POST] Service - deleteGuestbook");
        Guestbook guestbook = guestbookRepository.findById(guestbookSeq).orElseThrow(() -> new IllegalArgumentException("해당 방명록이 존재하지 않습니다."));
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        if (guestbook.getUser().getUserSeq() != userSeq) {
            log.error("권한 없음");
            return false;
        }
        try {
            guestbookRepository.deleteById(guestbookSeq);
            log.debug("삭제된 방명록 번호: " + guestbookSeq);
            return true;
        } catch (Exception e) {
            log.error(e.getMessage());
            return false;
        }
    }

    @Override
    @Transactional
    public Long insertGuestbookComment(GuestbookCommentReq req, long guestbookSeq, long userSeq) {
        log.debug("[POST] Service - insertGuestbookComment");
        try {
            GuestbookComment comment = GuestbookComment.builder()
                    .content(req.getContent())
                    .isPublic(req.getIsPublic())
                    .guestbook(guestbookRepository.getReferenceById(guestbookSeq))
                    .user(userRepository.getReferenceById(userSeq))
                    .build();
            Long commentSeq = guestbookCommentRepository.save(comment).getCommentSeq();
            log.debug("댓글 등록 완료: " + commentSeq);
            return commentSeq;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional
    public Boolean deleteGuestbookComment(long commentSeq, long userSeq) {
        log.debug("[POST] Service - deleteGuestbookComment");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        GuestbookComment comment = guestbookCommentRepository.findById(user.getUserSeq()).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 존재하지 않습니다."));
        if (comment.getUser().getUserSeq() != userSeq) {
            log.error("권한 없음");
            return false;
        }
        try {
            guestbookCommentRepository.deleteById(commentSeq);
            log.debug("댓글 삭제 완료: " + commentSeq);
            return true;
        } catch (Exception e) {
            log.error(e.getMessage());
            return false;
        }
    }
}
