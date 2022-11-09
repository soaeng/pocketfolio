package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.*;
import com.ssafy.pocketfolio.api.service.PortfolioServiceImpl;
import com.ssafy.pocketfolio.api.service.RoomServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
@Tag(name = "RoomController", description = "마이룸 API")
public class RoomController {

    private final RoomServiceImpl roomService;
    private final PortfolioServiceImpl portfolioService;

    @Operation(summary = "마이룸 등록", description = "마이룸 등록", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 등록 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PostMapping
    public ResponseEntity<Long> insertRoom(@RequestPart(value = "room") RoomReq roomReq, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, HttpServletRequest request){
        log.debug("[POST] Controller - insertRoom");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.insertRoom(userSeq, roomReq, thumbnail);
                if (response > 0) {
                    status = HttpStatus.CREATED;
                }
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 목록 조회", description = "마이룸 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomDetailRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping
    public ResponseEntity<Map<String, Object>> findRoomList(HttpServletRequest request) {
        log.debug("[GET] Controller - findRoomList");
        List<RoomListRes> rooms;
        List<PortfolioListRes> portfolios;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        Map<String, Object> response = new HashMap<>();

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            // 마이룸 목록
            rooms = roomService.findMyRoomList(userSeq);
            // 포트폴리오 목록
            portfolios = portfolioService.findPortfolioList(userSeq);
            response.put("rooms", rooms);
            response.put("portfolios", portfolios);
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 조회", description = "마이룸 조회", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 조회 성공", content = @Content(schema = @Schema(implementation = RoomDetailRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/{roomSeq}")
    public ResponseEntity<RoomDetailRes> findRoom(@PathVariable(value = "roomSeq") Long roomSeq, HttpServletRequest request){
        log.debug("[GET] Controller - findRoom");
        RoomDetailRes response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            log.debug("userSeq: " + userSeq);
            if (userSeq > 0) {
                response = roomService.findRoom(userSeq, roomSeq);
                status = HttpStatus.OK;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 수정", description = "마이룸 수정", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 수정 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PatchMapping("/info/{roomSeq}")
    public ResponseEntity<Long> updateRoom(@PathVariable(value = "roomSeq") Long roomSeq, @RequestPart(value = "room") RoomReq roomReq, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, HttpServletRequest request){
        log.debug("[PATCH] Controller - updateRoom");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.updateRoom(userSeq, roomSeq, roomReq, thumbnail);
                if (response > 0) {
                    status = HttpStatus.CREATED;
                }
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 삭제", description = "마이룸 삭제", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 삭제 성공", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @DeleteMapping("/{roomSeq}")
    public ResponseEntity<Boolean> deleteRoom(@PathVariable(value = "roomSeq") Long roomSeq, HttpServletRequest request){
        log.debug("[DELETE] Controller - deleteRoom");
        Boolean response = false;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.deleteRoom(userSeq, roomSeq);
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

    @Operation(summary = "마이룸 좋아요", description = "마이룸 좋아요", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 좋아요 완료", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PostMapping("/like/{roomSeq}")
    public ResponseEntity<Boolean> insertRoomLike(@PathVariable(value = "roomSeq") Long roomSeq, HttpServletRequest request){
        log.debug("[POST] Controller - insertRoomLike");
        Boolean response = false;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.insertRoomLike(userSeq, roomSeq);
                status = response ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 좋아요 취소", description = "마이룸 좋아요 취소", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 좋아요 취소 완료", content = @Content(schema = @Schema(implementation = Boolean.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @DeleteMapping("/like/{roomSeq}")
    public ResponseEntity<Boolean> deleteRoomLike(@PathVariable(value = "roomSeq") Long roomSeq, HttpServletRequest request){
        log.debug("[DELETE] Controller - deleteRoomLike");
        Boolean response = false;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.deleteRoomLike(userSeq, roomSeq);
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

    @Operation(summary = "마이룸 좋아요 목록", description = "마이룸 좋아요 목록", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 좋아요 목록 조회 완료", content = @Content(schema = @Schema(implementation = RoomDetailRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/like")
    public ResponseEntity<List<RoomListRes>> findRoomLikeList(HttpServletRequest request) {
        log.debug("[GET] Controller - findRoomLikeList");
        List<RoomListRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.findRoomLikeList(userSeq);
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

    @Operation(summary = "마이룸 좋아요 순 목록 조회", description = "마이룸 좋아요 순 목록 조회", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 좋아요 순 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomDetailRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/best")
    public ResponseEntity<List<RoomListRes>> findRoomBestList(HttpServletRequest request) {
        log.debug("[GET] Controller - findRoomBestList");
        List<RoomListRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.findRoomBestList();
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
}
