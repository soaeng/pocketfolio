package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;
import com.ssafy.pocketfolio.api.service.GuestbookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/guests")
@RequiredArgsConstructor
public class GuestController {

    private final GuestbookService guestbookService;

    @PostMapping("/{roomSeq}")
    public ResponseEntity<Long> insertGuestbook(@PathVariable("roomSeq") Long roomSeq, @RequestBody GuestbookReq guestbook, HttpServletRequest request) {
        log.debug("[POST] Controller - insertGuestbook");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.insertGuestbook(guestbook, userSeq);
                status = (response > 0) ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @GetMapping("/{roomSeq}")
    public ResponseEntity<List<GuestbookRes>> findGuestbookList(@PathVariable("roomSeq") Long roomSeq, HttpServletRequest request) {
        List<GuestbookRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.findGuestbookList(roomSeq, userSeq);
                status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @DeleteMapping("/{guestbookSeq}")
    public ResponseEntity<Boolean > deleteGuestbook(@PathVariable("guestbookSeq") Long guestbookSeq, @RequestBody GuestbookReq guestbook, HttpServletRequest request) {
        Boolean  response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.deleteGuestbook(guestbookSeq, userSeq);
                status = response ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @PostMapping("/comment/{guestbookSeq}")
    public ResponseEntity<Long> insertGuestbookComment(@PathVariable("guestbookSeq") Long guestbookSeq, @RequestBody GuestbookCommentReq comment, HttpServletRequest request) {
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.insertGuestbookComment(comment, guestbookSeq, userSeq);
                status = (response > 0) ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @DeleteMapping("/comment/{commentSeq}")
    public ResponseEntity<Boolean> deleteGuestbookComment(@PathVariable("commentSeq") Long commentSeq, @RequestBody GuestbookReq guestbook, HttpServletRequest request) {
        Boolean response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.deleteGuestbookComment(commentSeq, userSeq);
                status = response ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

}
