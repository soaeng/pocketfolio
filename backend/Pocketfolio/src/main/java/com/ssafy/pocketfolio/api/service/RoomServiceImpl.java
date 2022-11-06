package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import com.ssafy.pocketfolio.api.dto.response.RoomDetailRes;
import com.ssafy.pocketfolio.api.dto.RoomDto;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.*;
import com.ssafy.pocketfolio.db.repository.RoomHitRepository;
import com.ssafy.pocketfolio.db.repository.RoomLikeRepository;
import com.ssafy.pocketfolio.db.repository.RoomRepository;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final RoomHitRepository roomHitRepository;
    private final RoomLikeRepository roomLikeRepository;
    private final MultipartFileHandler fileHandler;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;
    @Value("${app.fileupload.uploadDir}")
    private String uploadDir;

    @Override
    @Transactional
    public long insertRoom(long userSeq, RoomReq req, MultipartFile thumbnail) throws IOException {
        log.debug("[GET] Service - insertRoom");
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        // 저장된 썸네일 주소
        String thumbnailUrl = null;

        // 저장할 썸네일 파일이 있다면
        if (thumbnail != null) {
            thumbnailUrl = fileHandler.saveThumbnail(thumbnail, "room" + File.separator + "thumbnail");
            if(thumbnailUrl == null) {
                return -1;
            }
        }
        Room room = RoomReq.toEntity(req, thumbnailUrl, user);
        long roomSeq = roomRepository.save(room).getRoomSeq();
        log.debug("저장된 방 번호: " + roomSeq);

        return roomSeq;
    }

    @Override
    public List<RoomDetailRes> findRoomList(long userSeq) {
        log.debug("[GET] Service - findRoomList");
        List<RoomDetailRes> roomDetailResList = new ArrayList<>();

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));
        List<Room> rooms = roomRepository.findAllByUser(user);

        for (Room room : rooms) {
            // TODO: room 기준으로 가져올 데이터 - 포트폴리오 목록, 마이룸 목록(썸네일, 마이룸 제목), 좋아요 수, 조회수, 방 주인
        }

        return roomDetailResList;
    }

    @Override
    public RoomDetailRes findRoom(long userSeq, long roomSeq) {
        log.debug("[GET] Service - findRoom");
        RoomDetailRes roomDetailRes = new RoomDetailRes();

        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다."));
        Room room = roomRepository.findById(roomSeq).orElseThrow(() -> new IllegalArgumentException("해당 방을 찾을 수 없습니다."));
        RoomDto roomRes = new RoomDto(room);

        // 본인 방이 아닌 경우 조회수 증가
        if(userSeq != room.getUser().getUserSeq() && !roomHitRepository.existsRoomHitByUserAnAndHitDateEquals(user, ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDate())) {
            roomHitRepository.save(RoomHit.builder().room(room).user(user).build());
        }
        return roomDetailRes;
    }


}
