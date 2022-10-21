package com.ssafy.pocketfolio.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI openAPI(){
        Info info = new Info()
                .version("0.0.1-SNAPSHOT")
                .title("Pocket:folio");

        return new OpenAPI().info(info);
    }
}