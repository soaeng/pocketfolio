package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.api.util.MultipartFileHandler;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.db.view.UserView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final MultipartFileHandler fileHandler;

    @Override
    public UserRes findUser(long userSeq) {
        UserView userView = userRepository.findProfileById(userSeq).orElseThrow(() -> new IllegalArgumentException("유저가 존재하지 않습니다."));
        log.info("Service findUser: " + userView.getName() + ", " + userView.getProfilePic() + ", " + userView.getFollowerTotal() + ", " + userView.getFollowingTotal() + ", " + userView.getDescribe());
        return new UserRes(userView);
    }

    @Override
    @Transactional
    public UserRes updateUser(long userSeq, UserUpdateReq userUpdateReq, MultipartFile multipartFile) throws IOException {
        User user = userRepository.findById(userSeq).orElseThrow(() -> new IllegalArgumentException("유저가 존재하지 않습니다."));

        log.debug("user" + user.toString());

        String profilePicUrl = user.getProfilePic();

        // 저장할 프로필 사진 파일이 있다면 profilePic 수정
        if (multipartFile != null) {
            // 저장된 프로필 사진 주소가 있으면 해당 프로필 사진 삭제 후 새로 저장
            if (profilePicUrl != null) {
                fileHandler.deleteFile(profilePicUrl);
            }
            profilePicUrl = fileHandler.saveThumbnail(multipartFile, "profile");
            if(profilePicUrl == null) {
                log.error("프로필 사진이 저장되지 않았습니다.");
//                throw new IOException("프로필 사진이 저장되지 않았습니다.");
            }
        } else {
            // 프로필 사진 삭제 후 전송되고 이전에 프로필 사진 있었으면 프로필 사진 파일 삭제
            if (profilePicUrl != null) {
                fileHandler.deleteFile(profilePicUrl);
            }
        }

        user.updateUser(userUpdateReq.getName(), profilePicUrl, userUpdateReq.getDescribe());
        return new UserRes(user);
    }

    @Override
    public void deleteUser(long userSeq) {
        userRepository.deleteById(userSeq);
    }

    @Override // 12345
    public List<UserRes> findUserList(String type, String keyword, String sort) {
        return null;
    }

}
