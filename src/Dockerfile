# Use an official Maven image to build the application
FROM maven:3.8.4-openjdk-11-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file from the root folder (since Dockerfile is in /src)
COPY ../pom.xml .

# Copy the src directory (which contains the Java source code) from the root folder
COPY ../src /app/src

# Run Maven to build the project (offline mode to avoid network dependencies)
RUN mvn dependency:go-offline

# Stage 2: Build the runtime image
FROM openjdk:11-jre-slim

# Set the working directory inside the runtime container
WORKDIR /app

# Copy the built JAR file from the builder stage
COPY --from=builder /app/target/*.jar /app/app.jar

# Expose the application port (assuming it's 8080)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
