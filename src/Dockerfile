# Use the official Maven image for building Java projects
FROM maven:3.8.4-openjdk-11-slim as builder

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and other necessary files to build dependencies
COPY pom.xml .

# Download the dependencies without copying the whole project
RUN mvn dependency:go-offline

# Copy the project files
COPY src /app/src

# Build the project
RUN mvn clean package -DskipTests

# Create the final image based on OpenJDK image
FROM openjdk:11-jre-slim

# Set the working directory for the runtime
WORKDIR /app

# Copy the JAR file from the builder stage
COPY --from=builder /app/target/your-jar-file.jar /app/app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Run the Java application
ENTRYPOINT ["java", "-jar", "app.jar"]
