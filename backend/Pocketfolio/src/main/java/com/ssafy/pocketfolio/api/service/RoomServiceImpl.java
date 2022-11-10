package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.CategoryRes;
import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.api.dto.response.RoomListRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final RoomRepository roomRepository;
    private final RoomHitRepository roomHitRepository;
    private final RoomLikeRepository roomLikeRepository;
    private final MultipartFileHandler fileHandler;

    @Override
    @Transactional
    public Long insertRoom(long userSeq, RoomReq req, MultipartFile thumbnail) throws IOException {
        log.debug("[POST] Service - insertRoom");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        // 저장된 썸네일 주소
        String thumbnailUrl = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            thumbnailUrl = fileHandler.saveFile(thumbnail, "room/thumbnail");
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        }
        Room room = RoomReq.toEntity(req, thumbnailUrl, user);
        long roomSeq = roomRepository.save(room).getRoomSeq();
        log.debug("저장된 방 번호: " + roomSeq);

        return roomSeq;
    }

    @Override
    @Transactional(readOnly = true)
    public List<RoomListRes> findMyRoomList(long userSeq) {
        log.debug("[GET] Service - findMyRoomList");
        List<RoomListRes> roomsResList;

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        try {
            List<Room> rooms = roomRepository.findAllByUser(user);
            roomsResList = getRoomListRes(rooms);
        } catch (Exception e) {
            log.error(e.getMessage());
            roomsResList = null;
        }

        return roomsResList;
    }

    @Override
    @Transactional(readOnly = true)
    public Map<String, Object> findRoomList(long userSeq) {
        log.debug("[GET] Service - findRoomList");
        Map<String, Object> map = new HashMap<>();

        try {
            List<Room> rooms = roomRepository.findAll();
            List<RoomListRes> roomListResList = getRoomListRes(rooms);
            List<CategoryRes> categories = categoryRepository.findAll().stream().map(CategoryRes::toDto).collect(Collectors.toList());

            map.put("rooms", roomListResList);
            map.put("categories", categories);
        } catch (Exception e) {
            log.error(e.getMessage());
            map = null;
        }
        return map;
    }

    @Override
    @Transactional
    public Map<String, Object> findRoom(long userSeq, long roomSeq) {
        log.debug("[GET] Service - findRoom");
        Map<String, Object> map = new HashMap<>();

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        // 본인 방이 아닌 경우 + 당일 방문하지 않은 경우 조회수 1 증가
        if (userSeq != room.getUser().getUserSeq() && !roomHitRepository.existsRoomHitByUserAndRoomAndHitDateEquals(user, room, ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDate())) {
            roomHitRepository.save(RoomHit.builder().room(room).user(user).build());
        }

        // 방 정보
        map.put("room", RoomDto.toDto(room));
        // 조회수
        map.put("hit", roomHitRepository.countAllByRoom_RoomSeq(room.getRoomSeq()));
        map.put("today", roomHitRepository.countRoomHitToday(roomSeq));
        map.put("like", roomLikeRepository.countAllByRoom_RoomSeq(room.getRoomSeq()));

        return map;
    }

    @Override
    @Transactional
    public Long updateRoom(long userSeq, long roomSeq, RoomReq req, MultipartFile thumbnail) throws IOException {
        log.debug("[PATCH] Service - updateRoom");
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        if (room.getUser().getUserSeq() != userSeq) {
            log.error("권한 없음");
            return null;
        }

        // 저장된 썸네일 주소
        String thumbnailUrl = room.getThumbnail();

        // 저장할 썸네일 파일이 있다면 thumbnail 수정
        if (thumbnail != null) {
            // 저장된 썸네일 주소가 있으면 해당 썸네일 삭제 후 새로 저장
            if (thumbnailUrl != null) {
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
            thumbnailUrl = fileHandler.saveFile(thumbnail, "room/thumbnail");
            if(thumbnailUrl == null) {
                log.error("썸네일 저장 실패");
                return null;
            }
        } else {
            // 썸네일 삭제 후 전송되고 이전에 썸네일 있었으면 썸네일 파일 삭제
            if (thumbnailUrl != null) {
                fileHandler.deleteFile(thumbnailUrl, "portfolio/thumbnail");
            }
        }

        try {
            room.updateRoom(req.getName(), thumbnailUrl);
            room.updateTheme(req.getTheme());
            room.updatePrivacy(req.getPrivacy());
            if(room.getIsMain().equals("F")) {
                // update (다른 T를 F로 변경하고 T로 해야)
                room.changeIsMain(req.getIsMain());
            }
            log.debug("저장된 방 번호: " + roomSeq);
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return roomSeq;
    }

    @Override
    @Transactional
    public Boolean deleteRoom(long userSeq, long roomSeq) {
        log.debug("[DELETE] Service - deleteRoom");
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        if (room.getUser().getUserSeq() != userSeq) {
            log.error("권한 없음");
            return false;
        }

        // 썸네일 삭제
        if (room.getThumbnail() != null) {
            fileHandler.deleteFile(room.getThumbnail(), "portfolio/thumbnail");
        }

        roomRepository.deleteById(roomSeq);
        return true;
    }

    @Override
    @Transactional
    public Boolean insertRoomLike(long userSeq, long roomSeq) {
        log.debug("[POST] Service - insertRoomLike");

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        // 본인 방이 아닌 경우 + 좋아요 이력 없는 경우 좋아요
        if (userSeq != room.getUser().getUserSeq()) {
            if (roomLikeRepository.existsByUser(user)) {
                log.error("이미 좋아요 추가한 방");
                return false;
            } else {
                try{
                    roomLikeRepository.save(RoomLike.builder().room(room).user(user).build());
                    return true;
                } catch (Exception e) {
                    log.error(e.getMessage());
                    return false;
                }
            }
        }
        return false;
    }

    @Override
    @Transactional
    public Boolean deleteRoomLike(long userSeq, long roomSeq) {
        log.debug("[DELETE] Service - deleteRoomLike");

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        // 본인 방이 아닌 경우 + 좋아요 이력 있는 경우 좋아요
        if (userSeq != room.getUser().getUserSeq()) {
            if (!roomLikeRepository.existsByUser(user)) {
                log.error("좋아요 이력 없음");
                return false;
            } else {
                try {
                    roomLikeRepository.deleteByRoomAndUser(room, user);
                    return true;
                } catch (Exception e) {
                    log.error(e.getMessage());
                    return false;
                }
            }
        }
        return false;
    }

    @Override
    @Transactional(readOnly = true) // 지연 조회 시점까지 세션 유지
    public List<RoomListRes> findRoomLikeList(long userSeq) {
        log.debug("[GET] Service - findRoomLikeList");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        try {
            List<Room> rooms = roomLikeRepository.findAllByUser(user).stream().map(RoomLike::getRoom).collect(Collectors.toList());
            return getRoomListRes(rooms);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<RoomListRes> findRoomBestList() {
        log.debug("[GET] Service - findRoomBestList");
        try {
            List<Long> roomSeqs = roomLikeRepository.findRoomBestList();
            List<Room> rooms = roomRepository.findAllByRoomSeqIn(roomSeqs);
            return getRoomListRes(rooms);
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public Long findRandomRoom() {
        log.debug("[GET] Service - findRandomRoom");
        List<Long> roomSeqs = roomRepository.findAllByPrivacy();
        Random rand = new Random();
        return roomSeqs.get(rand.nextInt(roomSeqs.size()));
    }

    public List<RoomListRes> getRoomListRes(List<Room> rooms) {
        return rooms.stream().map(room -> {
            int like = roomLikeRepository.countAllByRoom_RoomSeq(room.getRoomSeq()).intValue();
            int hit = roomHitRepository.countAllByRoom_RoomSeq(room.getRoomSeq()).intValue();
            return RoomListRes.toDto(room, like, hit);
        }).collect(Collectors.toList());
    }
}
