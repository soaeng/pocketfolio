package com.ssafy.pocketfolio.api.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Slf4j
@Component
public class MultipartFileHandler {

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;
    @Value("${app.fileupload.uploadDir}")
    private String uploadDir;

    // 썸네일 저장
    public String saveThumbnail(MultipartFile thumbnail, String uploadDirName) throws IOException {
        // 파일 저장
        File dest = saveFile(thumbnail, uploadDirName);
        if (dest != null) {
            log.debug("썸네일 이미지 저장 성공");
            return dest.getPath();
        } else {
            log.error("썸네일 이미지 저장 실패");
            return null;
        }
    }

    // 이미지 파일 체크
    private boolean checkImageType(Path filePath) {
        try {
            String contentType = Files.probeContentType(filePath);
            return contentType.startsWith("image");
        }catch(IOException e) {
            e.printStackTrace();
        }
        log.debug("이미지 파일이 아닙니다.");
        return false;
    }

    // 파일 저장
    public File saveFile(MultipartFile file, String uploadDirName) throws IOException {
        // Random uuid
        UUID uuid = UUID.randomUUID();
        // 원래 파일명
        String fileName = file.getOriginalFilename();
        log.debug("파일명: " + fileName);
        // 파일 확장자
        assert fileName != null;
        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1);
        log.debug("파일 확장자: " + fileExt);

        // uuid + 확장자로 저장
        String saveName = uuid + "." + fileExt;
        log.debug("saveName: " + saveName);

        // 파일 저장 위치 지정 (없는 경우 폴더 생성)
        File upload = new File(uploadPath + File.separator + uploadDir + File.separator + uploadDirName);
        if (!upload.exists()){
            if (!upload.mkdir()) {
                log.debug("폴더 생성 실패");
                return null;
            } else {
                log.debug("폴더 생성 성공");
            }
        }

        File dest = new File(upload.getPath() + File.separator + saveName);
        log.debug(dest.getPath());

        if (uploadDirName.contains("thumbnail")) {
            log.debug("thumbnail 파일 확장자 확인");
            if(!checkImageType(Paths.get(dest.getPath()))){
                log.error("thumbnail 파일은 이미지 파일만 허용됨");
                return null;
            }
        }

        if (uploadDirName.contains("profile")) {
            log.debug("profile 파일 확장자 확인");
            if(!checkImageType(Paths.get(dest.getPath()))){
                log.error("profile 파일은 이미지 파일만 허용됨");
                return null;
            }
        }

        file.transferTo(dest);
        log.debug("파일 저장 완료");
        return dest;
    }

    // 파일 삭제
    public void deleteFile(String filePath) {
        File file = new File(filePath);
        if (file.exists()){
            boolean result = file.delete();
            if (!result) {
                log.debug("파일 삭제 실패");
            }
            log.debug("파일 삭제 성공");
        }
    }
}
