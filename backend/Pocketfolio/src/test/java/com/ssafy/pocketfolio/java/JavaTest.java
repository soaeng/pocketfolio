package com.ssafy.pocketfolio.java;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class JavaTest {

    @Test
    public void testValidate() throws Exception {
        String str = "81,2,5,123,314,123,2,14,1";
        String[] arr = str.split(",", 6);
        System.out.println(arr.length);
        Arrays.stream(arr).forEach(e -> System.out.println(e));
    }
}
