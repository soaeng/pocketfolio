package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.GuestbookCommentReq;
import com.ssafy.pocketfolio.api.dto.request.GuestbookReq;
import com.ssafy.pocketfolio.api.dto.response.GuestbookRes;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.api.service.GuestbookService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "방명록 등록", description = "방명록 등록", responses = {
            @ApiResponse(responseCode = "201", description = "방명록 등록 성공", content = @Content(schema = @Schema(implementation = GuestbookReq.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PostMapping("/{roomSeq}")
    public ResponseEntity<Long> insertGuestbook(@PathVariable("roomSeq") Long roomSeq, @RequestBody GuestbookReq guestbook, HttpServletRequest request) {
        log.debug("[POST] Controller - insertGuestbook");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = guestbookService.insertGuestbook(guestbook, roomSeq, userSeq);
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

    @Operation(summary = "방명록 목록 조회", description = "방명록 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "방명록 목록 조회", content = @Content(schema = @Schema(implementation = GuestbookRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
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


    @Operation(summary = "방명록 삭제", description = "방명록 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "방명록 삭제 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @DeleteMapping("/{guestbookSeq}")
    public ResponseEntity<Boolean> deleteGuestbook(@PathVariable("guestbookSeq") Long guestbookSeq, HttpServletRequest request) {
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

    @Operation(summary = "방명록 댓글 등록", description = "방명록 댓글 등록", responses = {
            @ApiResponse(responseCode = "201", description = "방명록 댓글 등록 성공", content = @Content(schema = @Schema(implementation = GuestbookCommentReq.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
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

    @Operation(summary = "방명록 삭제", description = "방명록 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "방명록 삭제 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @DeleteMapping("/comment/{commentSeq}")
    public ResponseEntity<Boolean> deleteGuestbookComment(@PathVariable("commentSeq") Long commentSeq, HttpServletRequest request) {
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
