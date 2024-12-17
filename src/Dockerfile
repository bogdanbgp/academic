# Use Maven to build the project
FROM maven:3.8.4-openjdk-11-slim AS builder

WORKDIR /app

# Copy the pom.xml and source code into the container
COPY pom.xml ./
COPY src ./src

# Run Maven to build the application
RUN mvn clean install

# Use OpenJDK image to run the Java application
FROM openjdk:11-jre-slim

WORKDIR /app

# Copy the compiled .jar file from the builder image
COPY --from=builder /app/target/academic-0.0.1-SNAPSHOT.jar /app/academic-0.0.1-SNAPSHOT.jar

# Run the application
CMD ["java", "-jar", "academic-0.0.1-SNAPSHOT.jar"]
