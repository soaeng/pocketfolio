package com.ssafy.pocketfolio.api.service;

import com.ssafy.pocketfolio.api.dto.request.UserUpdateReq;
import com.ssafy.pocketfolio.api.dto.response.UserRes;
import com.ssafy.pocketfolio.db.entity.User;
import com.ssafy.pocketfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

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
        User user = userRepository.findById(userSeq).get();
        return new UserRes(user);
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
}
