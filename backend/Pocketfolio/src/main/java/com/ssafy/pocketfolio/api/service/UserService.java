package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserService {
    UserRes findUser(long userSeq);
    UserRes updateUser(long userSeq, UserUpdateReq userUpdateReq, MultipartFile multipartFile) throws IOException;
    void deleteUser(long userSeq);
}
