# Stage 1: Build the application
# Use an official Maven image with OpenJDK 17 to build the application (as OpenJDK 21 build image is not found)
FROM maven:3.8.4-openjdk-17-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file from the root folder
COPY pom.xml .

# Copy the src directory (which contains the Java source code) from the root folder
COPY src /app/src

# Run Maven to build the project (offline mode to avoid network dependencies)
RUN mvn dependency:go-offline

# Run Maven build to compile the code and package it as a JAR
RUN mvn clean package -DskipTests

# Stage 2: Build the runtime image
# Use OpenJDK 21 JDK slim for the runtime image
FROM openjdk:21-jdk-slim

# Set the working directory inside the runtime container
WORKDIR /app

# Copy the built JAR file from the builder stage
COPY --from=builder /app/target/*.jar /app/app.jar

# Expose the application port (assuming it's 8080)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
