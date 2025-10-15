#!/bin/bash
# Download images for Van with Man Dubai website

echo "Downloading images for Van with Man Dubai website..."

# Change to public directory
cd public

# Download images
echo "Downloading slide1.png..."
curl -L -o slide1.png "https://vanwithmandubai.com/images/slide1.png"

echo "Downloading pickup-truck-rental-dubai.jpeg..."
curl -L -o pickup-truck-rental-dubai.jpeg "https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg"

echo "Downloading hiace-delivery-van-dubai.jpg..."
curl -L -o hiace-delivery-van-dubai.jpg "https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg"

echo "Downloading 1-ton-pickup-truck-man-van-dubai.jpg..."
curl -L -o 1-ton-pickup-truck-man-van-dubai.jpg "https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg"

echo "✓ Image download complete!"
echo "All images have been saved to the public directory."