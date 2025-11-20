# Van with Man Dubai Website

A modern website for Van with Man Dubai - Professional Man & Van Services in Dubai.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/remix-starter-template)

## Overview

This is a Remix application deployed to Cloudflare Workers, featuring:
- Modern, responsive design with Tailwind CSS
- Professional service showcase
- Contact integration (phone, email, WhatsApp)
- Vehicle fleet display
- SEO optimized

## Setup

### 1. Install Dependencies
```sh
npm install
```

### 2. Download Images
Before running the development server, you need to download the required images:

**Option A: Using the provided script (Linux/Mac)**
```sh
chmod +x download-images.sh
./download-images.sh
```

**Option B: Using curl manually**
```sh
cd public
curl -L -o slide1.png "https://vanwithmandubai.com/images/slide1.png"
curl -L -o pickup-truck-rental-dubai.jpeg "https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg"
curl -L -o hiace-delivery-van-dubai.jpg "https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg"
curl -L -o 1-ton-pickup-truck-man-van-dubai.jpg "https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg"
```

**Option C: Using PowerShell (Windows)**
```powershell
cd public
Invoke-WebRequest -Uri "https://vanwithmandubai.com/images/slide1.png" -OutFile "slide1.png"
Invoke-WebRequest -Uri "https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg" -OutFile "pickup-truck-rental-dubai.jpeg"
Invoke-WebRequest -Uri "https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg" -OutFile "hiace-delivery-van-dubai.jpg"
Invoke-WebRequest -Uri "https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg" -OutFile "1-ton-pickup-truck-man-van-dubai.jpg"
```

**Option D: Manual Download**
Visit each URL below and save the images to the `public` directory:
- https://vanwithmandubai.com/images/slide1.png
- https://vanwithmandubai.com/images/pickup-truck-rental-dubai.jpeg
- https://vanwithmandubai.com/images/hiace-delivery-van-dubai.jpg
- https://vanwithmandubai.com/images/1-ton-pickup-truck-man-van-dubai.jpg

## Development

Run the dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm start
```

## Contact Information

The website includes contact details for Van with Man Dubai:
- **Phone:** +971 52 806 5642
- **Email:** manwithavanindubai@gmail.com
- **WhatsApp:** +971 52 806 5642
- **Location:** Al Quoz Industrial Area 2, Dubai
- **Hours:** 9:00 AM - 7:00 PM

## Features

- **Responsive Design:** Works on all device sizes
- **Service Showcase:** Vehicle fleet with real images
- **Contact Integration:** Click-to-call, email, and WhatsApp
- **SEO Optimized:** Proper meta tags and structured content
- **Professional Layout:** Clean, modern design inspired by industry standards

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to build your app:

```sh
npm run build
```

And deploy it:

```sh
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
