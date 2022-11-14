package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.api.dto.request.RoomArrangeReq;
import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.*;
import com.ssafy.pocketfolio.api.service.PortfolioService;
import com.ssafy.pocketfolio.api.service.RoomService;
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
import org.webjars.NotFoundException;

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

    private final RoomService roomService;
    private final PortfolioService portfolioService;

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

//    @Operation(summary = "마이룸 전체 목록 조회", description = "마이룸 전체 목록 조회", responses = {
//            @ApiResponse(responseCode = "200", description = "마이룸 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomListRes.class))),
//            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
//            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
//    })
//    @GetMapping
//    public ResponseEntity<Map<String, Object>> findRoomAll(HttpServletRequest request) {
//        log.debug("[GET] Controller - findRoomList");
//        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
//        Map<String, Object> response = new HashMap<>();
//
//        try{
//            long userSeq = (Long) request.getAttribute("userSeq");
//
//            response = roomService.findRoomAll(userSeq);
//            status = HttpStatus.OK;
//        } catch (Exception e) {
//            log.error(e.getMessage());
//        }
//
//        return new ResponseEntity<>(response, status);
//    }
    @Operation(summary = "마이룸 조회", description = "마이룸 조회", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 조회 성공", content = @Content(schema = @Schema(implementation = RoomDto.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Error.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = Error.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/{roomSeq}")
    public ResponseEntity<Map<String, Object>> findRoom(@PathVariable(value = "roomSeq") Long roomSeq, HttpServletRequest request){
        log.debug("[GET] Controller - findRoom");
        Map<String, Object> response = new HashMap<>();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            log.debug("userSeq: " + userSeq);
            if (userSeq >= 0) { // Guest (userSeq == 0) 포함
                response = roomService.findRoom(userSeq, roomSeq);
                status = HttpStatus.OK;
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (NotFoundException e) {
            log.error(e.getMessage());
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "마이룸 정보 수정", description = "마이룸 정보 수정", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 수정 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @PatchMapping("/info/{roomSeq}")
    public ResponseEntity<Long> updateRoomInfo(@PathVariable(value = "roomSeq") Long roomSeq, @RequestPart(value = "room") RoomReq roomReq, @RequestPart(value = "thumbnail", required = false) MultipartFile thumbnail, HttpServletRequest request){
        log.debug("[PATCH] Controller - updateRoomInfo");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.updateRoomInfo(userSeq, roomSeq, roomReq, thumbnail);
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

    @Operation(summary = "마이룸 꾸미기", description = "마이룸 꾸미기", responses = {
            @ApiResponse(responseCode = "201", description = "마이룸 꾸미기 성공", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = ItemRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Long.class)))
    })
    @PatchMapping("/{roomSeq}")
    public ResponseEntity<Long> updateRoom(@PathVariable Long roomSeq, @RequestBody RoomArrangeReq roomArrangeReq, HttpServletRequest request){
        log.debug("[PATCH] Controller - updateRoom");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                response = roomService.updateRoom(userSeq, roomSeq, roomArrangeReq);
                if (response > 0) {
                    status = HttpStatus.CREATED;
                }
            } else {
                log.error("사용 불가능 토큰");
                status = HttpStatus.FORBIDDEN;
            }
        } catch (IllegalArgumentException e) {
            log.error(e.getMessage());
            status = HttpStatus.NOT_FOUND;
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

    @Operation(summary = "내 마이룸 및 포트폴리오 목록 조회", description = "내 마이룸 및 포트폴리오 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomListRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/my")
    public ResponseEntity<Map<String, Object>> findMyRoomList(HttpServletRequest request) {
        log.debug("[GET] Controller - findMyRoomList");
        List<RoomListRes> rooms;
        List<PortfolioListRes> portfolios;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        Map<String, Object> response = new HashMap<>();

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            if (userSeq > 0) {
                // 마이룸 목록
                rooms = roomService.findMyRoomList(userSeq);
                // 포트폴리오 목록
                portfolios = portfolioService.findPortfolioList(userSeq);
                response.put("rooms", rooms);
                response.put("portfolios", portfolios);
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

    @Operation(summary = "마이룸 좋아요 목록", description = "마이룸 좋아요 목록", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 좋아요 목록 조회 완료", content = @Content(schema = @Schema(implementation = RoomListRes.class))),
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

    @Operation(summary = "베스트 마이룸 목록 조회", description = "마이룸 좋아요 순 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "마이룸 좋아요 순 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomListRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/best")
    public ResponseEntity<List<RoomListRes>> findRoomBestList(HttpServletRequest request) {
        log.debug("[GET] Controller - findRoomBestList");
        List<RoomListRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            response = roomService.findRoomBestList();
            status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "파도타기", description = "privacy=O인 마이룸 랜덤 조회", responses = {
            @ApiResponse(responseCode = "200", description = "랜덤 방 번호 조회 완료", content = @Content(schema = @Schema(implementation = Long.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/random/{roomSeq}")
    public ResponseEntity<Long> findRandomRoom(@PathVariable("roomSeq") Long roomSeq, HttpServletRequest request) {
        log.debug("[GET] Controller - findRandomRoom");
        Long response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            long userSeq = (Long) request.getAttribute("userSeq");
            // 사용자, 방문자의 경우 서비스 단으로
            if (userSeq >= 0) {
                response = roomService.findRandomRoom(roomSeq, userSeq);
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

    @Operation(summary = "최근 방문자 목록", description = "최근 방문자 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "최근 방문자 목록 조회 성공", content = @Content(schema = @Schema(implementation = RoomListRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/guests/{roomSeq}")
    public ResponseEntity<Map<String, Object>> findGuestList(@PathVariable("roomSeq") Long roomSeq, HttpServletRequest request) {
        log.debug("[GET] Controller - findGuestList");
        Map<String, Object> response = new HashMap<>();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try {
            response = roomService.findGuestList(roomSeq);
            status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return new ResponseEntity<>(response, status);
    }

    @Operation(summary = "카테고리 목록", description = "카테고리 목록 조회", responses = {
            @ApiResponse(responseCode = "200", description = "카테고리 목록 조회 성공", content = @Content(schema = @Schema(implementation = CategoryRes.class))),
            @ApiResponse(responseCode = "403", description = "사용 불가능 토큰", content = @Content(schema = @Schema(implementation = UserRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/category")
    public ResponseEntity<List<CategoryRes>> findCategoryList(HttpServletRequest request) {
        log.debug("[GET] Controller - findCategoryList");
        List<CategoryRes> response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try {
            response = roomService.findCategoryList();
            status = response != null ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return new ResponseEntity<>(response, status);
    }
}
