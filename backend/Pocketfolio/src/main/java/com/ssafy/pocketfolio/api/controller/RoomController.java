package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.RoomDetailRes;
import com.ssafy.pocketfolio.api.service.RoomServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomServiceImpl roomService;

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

    @GetMapping
    public ResponseEntity<List<RoomDetailRes>> findRoomList(HttpServletRequest request) {
        log.debug("[GET] Controller - findRoomList");
        List<RoomDetailRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            response = roomService.findRoomList(userSeq);
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

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

    @PatchMapping("/{roomSeq}")
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

    @GetMapping("/like")
    public ResponseEntity<List<RoomDetailRes>> findRoomLikeList(HttpServletRequest request) {
        List<RoomDetailRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.findRoomLikeList(userSeq);
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
}
