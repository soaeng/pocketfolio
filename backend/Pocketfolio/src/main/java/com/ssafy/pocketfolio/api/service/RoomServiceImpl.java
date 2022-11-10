package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.ArrangeDto;
import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.api.dto.request.RoomArrangeReq;
import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.CategoryRes;
import com.ssafy.pocketfolio.api.dto.response.GuestRoomRes;
import com.ssafy.pocketfolio.api.dto.response.RoomListRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final RoomRepository roomRepository;
    private final RoomCategoryRepository roomCategoryRepository;
    private final RoomHitRepository roomHitRepository;
    private final RoomLikeRepository roomLikeRepository;
    private final PortfolioRepository portfolioRepository;
    private final ItemRepository itemRepository;
    private final ArrangeRepository arrangeRepository;
    private final MultipartFileHandler fileHandler;
    private final FollowRepository followRepository;

    @Override
    @Transactional
    public Long insertRoom(long userSeq, RoomReq req, MultipartFile thumbnail) throws IOException {
        log.debug("[POST] Service - insertRoom");
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
        Room room = RoomReq.toEntity(req, thumbnailUrl, userRepository.getReferenceById(userSeq));
        long roomSeq = roomRepository.save(room).getRoomSeq();
        log.debug("저장된 방 번호: " + roomSeq);
        RoomCategory roomCategory = RoomCategory.builder()
                .category(categoryRepository.getReferenceById(req.getCategory()))
                .room(roomRepository.getReferenceById(roomSeq))
                .build();
        roomCategoryRepository.save(roomCategory);
        return roomSeq;
    }

    @Override
    @Transactional(readOnly = true)
    public List<RoomListRes> findMyRoomList(long userSeq) {
        log.debug("[GET] Service - findMyRoomList");
        List<RoomListRes> roomsResList;

        try {
            List<Room> rooms = roomRepository.findAllByUser_UserSeq(userSeq);
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
            List<RoomListRes> roomListResList = getRoomListRes(roomRepository.findAll());
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
    public Map<String, Object> findRoom(long userSeq, long roomSeq) { // TODO: 게스트 로직 추가
        log.debug("[GET] Service - findRoom");
        Map<String, Object> map = new HashMap<>();

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));
        RoomCategory roomCategory = roomCategoryRepository.findCategorySeqByRoom_RoomSeq(room.getRoomSeq());
        log.debug("roomCategory: " + roomCategory);

        // 본인 방이 아닌 경우 + 당일 방문하지 않은 경우 조회수 1 증가
        if (userSeq != room.getUser().getUserSeq() && !roomHitRepository.existsRoomHitByUser_UserSeqAndRoom_RoomSeqAndHitDateEquals(userSeq, roomSeq, ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDate())) {
            roomHitRepository.save(RoomHit.builder().room(room).user(user).build());
        }

        log.debug(roomCategory.getCategory().toString());
        // 방 정보
        map.put("room", RoomDto.toDto(room, CategoryRes.toDto(roomCategory.getCategory())));
        // 조회수
        map.put("hitCount", roomHitRepository.countAllByRoom_RoomSeq(roomSeq));
        map.put("likeCount", roomLikeRepository.countAllByRoom_RoomSeq(roomSeq));
        // Item
        map.put("follow", followRepository.existsByUserFrom_UserSeqAndUserTo_UserSeq(userSeq, room.getUser().getUserSeq()));
        map.put("like", roomLikeRepository.existsByUser_UserSeqAndRoom_RoomSeq(userSeq, roomSeq));

        List<ArrangeDto> arranges = new ArrayList<>();
        List<Arrange> arrangeList = arrangeRepository.findByRoom_RoomSeq(roomSeq);
        arrangeList.forEach(arrange -> arranges.add(new ArrangeDto(arrange)));
        map.put("arranges", arranges);

        return map;
    }


    @Override
    @Transactional
    public Long updateRoomInfo(long userSeq, long roomSeq, RoomReq req, MultipartFile thumbnail) throws IOException {
        log.debug("[PATCH] Service - updateRoomInfo");
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));
        RoomCategory roomCategory = roomCategoryRepository.findByRoom_RoomSeqAndCategory_CategorySeq(roomSeq, req.getCategory());

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
            roomCategory.updateCategory(categoryRepository.getReferenceById(req.getCategory()));
            if (req.getPrivacy() != null) {
                room.updatePrivacy(req.getPrivacy());
            }
            if(req.getIsMain() != null && req.getIsMain().equals("T") && room.getIsMain().equals("F")) {
                // update (다른 T를 F로 변경하고 T로 해야)
                Room originMain = roomRepository.findRoomByUser_UserSeqAndIsMain(userSeq, "T");
                originMain.changeIsMain("F");
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
    public Long updateRoom(long userSeq, long roomSeq, RoomArrangeReq roomArrangeReq) {
        // 수정하는 메소드. 성능 상 삭제 후 삽입도 고려해 볼 만함.
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 포켓이 존재하지 않습니다."));

        HashSet<Long> arrangeSeqSet = arrangeRepository.findArrangeSeqByRoom_RoomSeq(roomSeq); // 리스트만 되면 변환 필요

        room.updateTheme(roomArrangeReq.getTheme());

        roomArrangeReq.getArranges().forEach(arrangeDto -> {
            Portfolio portfolio;
            try {
                portfolio = portfolioRepository.getReferenceById(arrangeDto.getPortSeq());
            } catch (EntityNotFoundException e) {
                log.error("포트폴리오 번호 없어서 포트폴리오 연결 없이 진행");
                portfolio = null;
            }
            long arrangeSeq = arrangeDto.getArrangeSeq();
            if (arrangeSeqSet.contains(arrangeSeq)) { // 원래 있던 Arrange (UPDATE)
                arrangeRepository.findById(arrangeSeq).get().updateArrangeAll(arrangeDto.getLocation(), arrangeDto.getRotation(), portfolio);
                arrangeSeqSet.remove(arrangeSeq);
            } else { // 기존에 없던 Arrange (INSERT)
                Arrange arrange = arrangeDto.toEntity(room, itemRepository.getReferenceById(arrangeDto.getItemSeq()), portfolio);
                arrangeRepository.save(arrange);
            }
        });

        arrangeSeqSet.forEach(arrangeSeq -> arrangeRepository.deleteById(arrangeSeq));

        return room.getRoomSeq();
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
            if (roomLikeRepository.existsByUser_UserSeq(userSeq)) {
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

        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));

        // 본인 방이 아닌 경우 + 좋아요 이력 있는 경우 좋아요
        if (userSeq != room.getUser().getUserSeq()) {
            if (!roomLikeRepository.existsByUser_UserSeq(userSeq)) {
                log.error("좋아요 이력 없음");
                return false;
            } else {
                try {
                    roomLikeRepository.deleteByRoom_RoomSeqAndUser_UserSeq(roomSeq, userSeq);
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
        try {
            List<Room> rooms = roomLikeRepository.findAllByUser_UserSeq(userSeq).stream().map(RoomLike::getRoom).collect(Collectors.toList());
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
            List<Long> roomSeqs = roomLikeRepository.findRoomBestList(); // TODO: JOIN으로 한 번에 처리하기
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

    @Override
    @Transactional(readOnly = true)
    public Map<String, Object> findGuestList(long roomSeq) {
        log.debug("[GET] Service - findGuestList");
        try {
            Map<String, Object> map = new HashMap<>();
            List<GuestRoomRes> guests = roomHitRepository.findGuest(roomSeq).stream().map(x -> {
                int like = roomLikeRepository.countAllByRoom_RoomSeq(roomSeq).intValue();
                int hit = roomHitRepository.countAllByRoom_RoomSeq(roomSeq).intValue();
                return GuestRoomRes.toDto(x, like, hit);
            }).collect(Collectors.toList());
            map.put("guests", guests);
            map.put("today", roomHitRepository.countRoomHitToday(roomSeq));
            return map;
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<CategoryRes> findCategoryList() {
        log.debug("[GET] Service - findCategoryList");
        try {
            return categoryRepository.findAll().stream().map(CategoryRes::toDto).collect(Collectors.toList());
        } catch (Exception e) {
            log.error(e.getMessage());
            return null;
        }
    }

    public List<RoomListRes> getRoomListRes(List<Room> rooms) {
        return rooms.stream().map(room -> {
            int like = roomLikeRepository.countAllByRoom_RoomSeq(room.getRoomSeq()).intValue();
            int hit = roomHitRepository.countAllByRoom_RoomSeq(room.getRoomSeq()).intValue();
            return RoomListRes.toDto(room, like, hit);
        }).collect(Collectors.toList());
    }
}
