package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import com.ssafy.pocketfolio.db.view.UserView;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Value("${app.fileupload.uploadDir}")
    private String uploadFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;

    @Override
    public UserRes findUser(long userSeq) {
        UserView userView = userRepository.findProfileById(userSeq).get();
        log.info("Service findUser: " + userView.getName() + ", " + userView.getProfilePic() + ", " + userView.getFollowerTotal() + ", " + userView.getFollowingTotal() + ", " + userView.getDescribe());
        return new UserRes(userView);
    }

    @Override
    @Transactional
    public UserRes updateUser(long userSeq, UserUpdateReq userUpdateReq, MultipartFile multipartFile) throws IOException {
        User user = userRepository.findById(userSeq).get();

        File uploadDir = new File(uploadPath + File.separator + uploadFolder);
        if (!uploadDir.exists()) uploadDir.mkdir();

        String fileName = multipartFile.getOriginalFilename();

        // Random File Id
        UUID uuid = UUID.randomUUID();

        //file extension
        String extension = FilenameUtils.getExtension(fileName); // vs FilenameUtils.getBaseName()

        String savingFileName = uuid + "." + extension;

        File destFile = new File(uploadPath + File.separator + uploadFolder + File.separator + savingFileName);

        System.out.println(uploadPath + File.separator + uploadFolder + File.separator + savingFileName);
        multipartFile.transferTo(destFile);

        String boardFileUrl = uploadFolder + "/" + savingFileName;


        user.updateUser(userUpdateReq.getName(), boardFileUrl, userUpdateReq.getDescribe());
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

    @Override
    @Transactional
    public void logout(long userSeq) {
        User user = userRepository.findById(userSeq).get();
        user.updateToken(null);
    }
}
