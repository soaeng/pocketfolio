package com.ssafy.pocketfolio.security.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.DefaultClaims;
import io.jsonwebtoken.impl.DefaultJws;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;

import java.time.ZonedDateTime;
import java.util.Date;


@Log4j2
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    private long expire = 60 * 24 * 2;
    private long refreshExpire = expire * 15;

    public String generateAccessToken(String userSeqStr) throws Exception {
        return generateToken(userSeqStr, "accessToken", expire);
    }

    public String generateRefreshToken(String userSeqStr) throws Exception {
        return generateToken(userSeqStr, "refreshToken", refreshExpire);
    }

    private String generateToken(String uid, String subject, long expire) throws Exception {

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(expire).toInstant()))
                //.setExpiration(Date.from(ZonedDateTime.now().plusSeconds(1).toInstant()))
                .setSubject(subject)
                .claim("uid", uid)
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))
                .compact();
    }

    public long validateAndExtractUserSeq(String tokenStr) {

        long userSeq;

        try {
            DefaultJws defaultJws = (DefaultJws) Jwts.parser()
                    .setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(tokenStr);

            log.info(defaultJws);

            log.info(defaultJws.getBody().getClass());

            DefaultClaims claims = (DefaultClaims) defaultJws.getBody();

            log.info("------------------------");

//            contentValue = claims.getSubject();
            userSeq = Long.parseLong((String) claims.get("uid"));

        } catch (Exception e) {
            log.error(e.getMessage());
            userSeq = -1L;
        }
        return userSeq;
    }

}
