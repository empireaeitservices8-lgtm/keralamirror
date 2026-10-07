import Link from 'next/link';
import FooterLogo from './FooterLogo';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, ChevronRightIcon } from './Icons';
import { companyData } from '@/data/companyData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info & Address */}
          <div className="footer-brand">
            <div className="footer-logo-box" style={{ background: 'transparent', padding: 0, marginBottom: '18px' }}>
              <FooterLogo />
            </div>
            <p>
              Your premier gateway to God’s Own Country. Delivering bespoke Kerala holiday packages,
              luxury wedding car rentals, executive MICE mobility, houseboat journeys, and certified Ayurveda wellness retreats.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">
                  <ChevronRightIcon size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRightIcon size={14} /> Our Services
                </Link>
              </li>
              <li>
                <Link href="/packages">
                  <ChevronRightIcon size={14} /> Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Luxury Car Rental & Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <ChevronRightIcon size={14} /> Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  style={{ background: 'none', border: 'none', color: '#d49a37', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.92rem', fontWeight: '600' }}
                >
                  <ChevronRightIcon size={14} /> Book a Cab or Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Fleet & Services Highlights */}
          <div>
            <h4 className="footer-heading">Luxury Fleet & Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Mercedes Benz & BMW Rentals
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Toyota Vellfire & Fortuner
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Toyota Innova Crysta & Hycross
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Force Traveller & Bharat Benz
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRightIcon size={14} /> Wedding Luxury Car Rental
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRightIcon size={14} /> Alleppey Luxury Houseboat
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div>
            <h4 className="footer-heading">Reach Out To Us</h4>
            <ul className="footer-links" style={{ gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0' }}>
                <MapPinIcon size={20} style={{ color: '#d49a37', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Kerala Mirror Holidays</strong><br />
                  Eroor South P.O., Tripunithura<br />
                  Ernakulam, Kerala - 682 306
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneIcon size={18} style={{ color: '#d49a37', flexShrink: 0 }} />
                <a href={`tel:${companyData.phoneRaw}`} style={{ color: '#ffffff', fontWeight: '600' }}>
                  Mobile: {companyData.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <WhatsAppIcon size={18} style={{ color: '#25d366', flexShrink: 0 }} />
                <a href={companyData.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: '600' }}>
                  WhatsApp: {companyData.whatsappRaw}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MailIcon size={18} style={{ color: '#d49a37', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <a href={`mailto:${companyData.email}`} style={{ color: '#ffffff' }}>
                    {companyData.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kerala Mirror Holidays. All Rights Reserved. Tripunithura, Ernakulam, Kerala.</p>
          <p>
            Language: English | Registered Tour Operator & Luxury Car Rental Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
