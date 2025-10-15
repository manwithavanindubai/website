// Download images for Van with Man Dubai website
const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    'slide1.png': 'https://vanwithmandubai.com/images/slide1.png',
    'pickup-truck-rental-dubai.jpeg': 'https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg',
    'hiace-delivery-van-dubai.jpg': 'https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg',
    '1-ton-pickup-truck-man-van-dubai.jpg': 'https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg'
};

const publicDir = path.join(__dirname, 'public');

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(publicDir, filename);
        const file = fs.createWriteStream(filepath);
        
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete the file on error
            console.error(`✗ Failed to download ${filename}:`, err.message);
            reject(err);
        });
    });
}

async function downloadAllImages() {
    console.log('Starting image downloads...');
    
    for (const [filename, url] of Object.entries(images)) {
        try {
            await downloadImage(url, filename);
        } catch (error) {
            console.error(`Failed to download ${filename}:`, error.message);
        }
    }
    
    console.log('Image download complete!');
}

downloadAllImages();