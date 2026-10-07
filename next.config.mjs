import fs from 'fs';
import path from 'path';

// Synchronously ensure all user uploaded fleet images are in public/
try {
  const userUploadedDir = 'C:\\Users\\SONA\\.gemini\\antigravity-ide\\brain\\57ea2a5b-2661-4a69-a191-670619a278f4\\.user_uploaded';
  const publicDir = path.join(process.cwd(), 'public');
  const imageMap = {
    'fleet-mercedes.png': 'media_1791363001951.png',
    'fleet-bmw.png': 'media_1791363013771.png',
    'fleet-jaguar.png': 'media_1791363024834.png',
    'fleet-bharatbenz.png': 'media_1791363116435.png',
    'fleet-forcetraveller.png': 'media_1791363043647.png',
    'fleet-vellfire.png': 'media_1791363129269.png',
    'tour-resort-stay.png': 'media_1791365128371.png',
    'tour-tea-slopes.jpg': 'media_1791365140117.jpg',
    'tour-night-forest.png': 'media_1791365152992.png',
    'tour-mountain-bridge.jpg': 'media_1791365162460.jpg',
    'tour-waterfalls.jpg': 'media_1791365170877.jpg',
    'fleet-etios.png': 'media_1791368569806.png',
    'fleet-ertiga.png': 'media_1791368606731.png',
    'fleet-dzire.png': 'media_1791368619794.png',
    'fleet-innova.png': 'media_1791368637272.png',
    'fleet-crysta.png': 'media_1791368648105.png',
    'tour-green-hills.jpg': 'media_1791369085869.jpg',
    'fleet-fortuner.png': 'media_1791369340986.png',
    'fleet-hycross.png': 'media_1791369414768.png',
  };
  for (const [targetName, sourceFile] of Object.entries(imageMap)) {
    const srcPath = path.join(userUploadedDir, sourceFile);
    const dstPath = path.join(publicDir, targetName);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
} catch (e) {
  // ignore
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
