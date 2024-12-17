# Stage 1: Build the application
FROM maven:3.8.4-openjdk-11-slim AS builder

WORKDIR /app

COPY pom.xml .
COPY src /app/src

RUN mvn dependency:go-offline
RUN mvn clean package -DskipTests

# Stage 2: Build the runtime image
FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=builder /app/target/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
