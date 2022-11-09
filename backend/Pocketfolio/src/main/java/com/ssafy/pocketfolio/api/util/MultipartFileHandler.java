package com.ssafy.pocketfolio.api.util;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class MultipartFileHandler {

    private final AmazonS3Client amazonS3Client;
    @Value("${cloud.aws.s3.bucket}")
    private String S3Bucket;

    // 파일 저장
    public String saveFile(MultipartFile file, String uploadDirName) throws IOException {
        // 저장되는 파일 경로
        String filePath;

        // 파일 확인
        String[] dirList = {"thumbnail","profile"};
        if (dirNameContainsStringList(uploadDirName, dirList)) {
            log.debug(uploadDirName + " 파일 확장자 확인...");
            // MultipartFile의 ContentType 확인을 위해 Tike 라이브러리 사용
            Tika tika = new Tika();
            if(!tika.detect(file.getInputStream()).contains("image")) {
                log.error("thumbnail 파일은 이미지 파일만 허용됨");
                return null;
            }
        }

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

        String uploadPath = uploadDirName + "/" + saveName;

        ObjectMetadata objectMetaData = new ObjectMetadata();
        objectMetaData.setContentType(file.getContentType());
        log.debug("objectMetaDate ContentType: " + objectMetaData.getContentType());
        objectMetaData.setContentLength(file.getSize());

        // S3에 업로드
        amazonS3Client.putObject(
                new PutObjectRequest(S3Bucket, uploadPath, file.getInputStream(), objectMetaData)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );

        filePath = amazonS3Client.getUrl(S3Bucket, saveName).toString(); // 접근가능한 URL 가져오기
        if (filePath != null ) {
            log.debug("파일 저장 성공");
        }
        return filePath;
    }

    // 해당 폴더 포함 여부를 확인
    public static boolean dirNameContainsStringList(String dirName, String[] list) {
        return Arrays.stream(list).anyMatch(dirName::contains);
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
