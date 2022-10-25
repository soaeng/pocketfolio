FROM openjdk:11-jdk as builder
#FROM openjdk:8-jdk-slim as builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJar

#COPY --from=builder build/libs/*.jar app.jar
#VOLUME /tmp
ARG JAR_FILE=build/libs/Pocketfolio-0.0.1-SNAPSHOT.jar
COPY --from=builder build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar","-Dspring.profiles.active=gcp", "/app.jar"]
EXPOSE 8080
