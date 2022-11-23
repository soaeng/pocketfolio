package com.ssafy.pocketfolio.api.util;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;

@Slf4j
@Component
public class TranslateHandler {
    @Value("${naver.api.url}")
    private String API_URL;

    @Value("${naver.client.id}")
    private String CLIENT_ID;

    @Value("${naver.client.secret}")
    private String CLIENT_PW;

    public String translate(String eng) {
        log.debug("[Util] translateHandler");
        String text;
        text = URLEncoder.encode(eng, StandardCharsets.UTF_8);
        log.debug("eng: " + eng);

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", CLIENT_ID);
        requestHeaders.put("X-Naver-Client-Secret", CLIENT_PW);

        String response = post(requestHeaders, text, API_URL);
        log.debug("response: " + response);
        Gson gson = new Gson();
        JsonObject json = gson.fromJson(response, JsonObject.class);
        json = json.get("message").getAsJsonObject();
        json = json.get("result").getAsJsonObject();
        String kor = json.get("translatedText").getAsString();

        log.debug("kor: " + kor);

        return kor;
    }

    private static String post(Map<String, String> requestHeaders, String text, String apiUrl){
        log.debug("[Util] TranslateHandler - post");
        HttpURLConnection con = connect(apiUrl);
        String postParams = "source=en&target=ko&text=" + text;
        try {
            con.setRequestMethod("POST");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }

            con.setDoOutput(true);
            try (DataOutputStream wr = new DataOutputStream(con.getOutputStream())) {
                wr.write(postParams.getBytes());
                wr.flush();
            }

            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 응답
                return readBody(con.getInputStream());
            } else {  // 에러 응답
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }

    private static HttpURLConnection connect(String apiUrl){
        log.debug("[Util] TranslateHandler - connect");
        try {
            URL url = new URL(apiUrl);
            log.debug(url.toString());
            return (HttpURLConnection)url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }

    private static String readBody(InputStream body){
        log.debug("[Util] TranslateHandler - readBody");
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();

            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
}
