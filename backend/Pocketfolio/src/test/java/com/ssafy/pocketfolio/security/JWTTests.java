package com.ssafy.pocketfolio.security;

import com.ssafy.pocketfolio.security.util.JWTUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class JWTTests {
    private JWTUtil jwtUtil;

    @BeforeEach
    public void testBefore() {
        System.out.println("testBefore..........");
        jwtUtil = new JWTUtil();
    }

//    @Test
//    public void testEncode() throws Exception {
//        String key = Long.toString(3L);
//        String str = jwtUtil.generateAccessToken(key);
//        System.out.println(str);
//    }

    @Test
    public void testValidate() throws Exception {
        String key = Long.toString(1039L);
        String str = jwtUtil.generateAccessToken(key);
        Thread.sleep(5000);
        long userSeq = jwtUtil.validateAndExtractUserSeq(str);
        System.out.println(userSeq);
    }
}
