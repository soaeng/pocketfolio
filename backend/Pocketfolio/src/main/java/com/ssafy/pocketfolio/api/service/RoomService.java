package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.RoomReq;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface RoomService {
    /**
     * 방 생성
     * @param userSeq 생성 회원 번호
     * @param req 방 정보
     * @return 생성된 방 번호
     */
    long insertRoom(long userSeq, RoomReq req, MultipartFile thumbnail) throws IOException;

}
