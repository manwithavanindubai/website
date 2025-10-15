# Download images for Van with Man Dubai website
$images = @{
    "slide1.png" = "https://vanwithmandubai.com/images/slide1.png"
    "pickup-truck-rental-dubai.jpeg" = "https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg"
    "hiace-delivery-van-dubai.jpg" = "https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg"
    "1-ton-pickup-truck-man-van-dubai.jpg" = "https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg"
}

$publicDir = "public"

foreach ($filename in $images.Keys) {
    $url = $images[$filename]
    $outputPath = Join-Path $publicDir $filename
    
    Write-Host "Downloading $filename from $url"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "✓ Downloaded $filename"
    }
    catch {
        Write-Host "✗ Failed to download $filename : $_"
    }
}

Write-Host "Image download complete!"