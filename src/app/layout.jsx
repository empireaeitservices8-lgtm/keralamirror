import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { companyData } from '@/data/companyData';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-cinzel',
  display: 'swap',
});

import fs from 'fs';
import path from 'path';

// Synchronously ensure newly uploaded destination images are in public/
try {
  const brainDir = 'C:\\Users\\SONA\\.gemini\\antigravity-ide\\brain\\f00748b1-e5f0-491e-a8e4-520f02c52d1d';
  const publicDir = path.join(process.cwd(), 'public');
  const brainMap = {
    'dest-kochi.jpg': 'dest_kochi_1791433480451.jpg',
    'dest-varkala.jpg': 'dest_varkala_1791433499254.jpg',
    'dest-trivandrum.jpg': 'dest_trivandrum_1791433520469.jpg',
    'dest-kumarakom.jpg': path.join('.user_uploaded', 'media_1791438172815.jpg'),
    'dest-kovalam.jpg': path.join('.user_uploaded', 'media_1791439723281.png'),
    'dest-kanyakumari.jpg': path.join('.user_uploaded', 'media_1791439758621.jpg'),
    'dest-rameshwaram.jpg': path.join('.user_uploaded', 'media_1791439831626.png'),
    'dest-madurai.jpg': path.join('.user_uploaded', 'media_1791440370574.jpg'),
  };
  for (const [targetName, sourceFile] of Object.entries(brainMap)) {
    const srcPath = path.join(brainDir, sourceFile);
    const dstPath = path.join(publicDir, targetName);
    if (fs.existsSync(srcPath)) {
      if (!fs.existsSync(dstPath) || fs.statSync(srcPath).size !== fs.statSync(dstPath).size) {
        fs.copyFileSync(srcPath, dstPath);
      }
    }
  }
} catch (e) {
  // ignore
}

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Kerala Mirror Holidays | Premium Tour Packages & Luxury Car Rentals',
  description:
    'Experience God’s Own Country with Kerala Mirror Holidays. Luxury wedding car rentals (Mercedes, BMW, Jaguar, Vellfire), honeymoon tours, monsoon packages, temple pilgrimages, houseboat bookings, and authentic Ayurveda wellness in Kerala.',
  keywords: [
    'Kerala Mirror Holidays',
    'Kerala Tour Packages',
    'Kochi Athirappilly Munnar Tour',
    'Thekkadi Vagamon Kumarakom Packages',
    'Alleppey Varkala Kovalam Trivandrum',
    'Kanyakumari Rameshwaram Madurai Temple Tour',
    'Luxury Car Rental Kerala',
    'Wedding Luxury Car Rental',
    'Honeymoon Tour Packages',
    'Tripunithura Ernakulam Travel Agency'
  ],
  authors: [{ name: 'Kerala Mirror Holidays' }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Kerala Mirror Holidays | Gateway to God’s Own Country',
    description:
      'Premier Kerala Tour Packages & Luxury Car Rentals based in Tripunithura, Ernakulam. 24/7 service with verified chauffeurs & customized itineraries.',
    url: 'https://keralamirrorholidays.com',
    siteName: 'Kerala Mirror Holidays',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Kerala Mirror Holidays Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
