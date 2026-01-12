#!/bin/bash
echo "Building HMRS Application..."
./mvnw clean package -DskipTests
echo "Build completed!"
