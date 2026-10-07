import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { companyData } from '@/data/companyData';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-cinzel',
  display: 'swap',
});

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
    'Luxury Car Rental Kerala',
    'Wedding Luxury Car Rental',
    'Honeymoon Tour Packages',
    'Monsoon Tour Packages',
    'Temple Tour Kerala',
    'Ayurveda Treatment Package',
    'Houseboat Booking Alleppey',
    'Toyota Vellfire Rental Kerala',
    'Innova Crysta Hycross Rental',
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
