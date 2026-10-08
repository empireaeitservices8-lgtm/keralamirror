import Link from 'next/link';
import FooterLogo from './FooterLogo';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, ChevronRightIcon, FacebookIcon, InstagramIcon } from './Icons';
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

            {/* Social Media Follow Links */}
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', display: 'block', marginBottom: '10px' }}>
                Follow Our Social Pages
              </span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <a
                  href={companyData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kerala Mirror Holidays on Facebook"
                  title="Open Facebook Page"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '0.88rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1877f2';
                    e.currentTarget.style.borderColor = '#1877f2';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>

                <a
                  href={companyData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kerala Mirror Holidays on Instagram"
                  title="Open Instagram Page"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '0.88rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                    e.currentTarget.style.borderColor = '#e1306c';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
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
                <Link href="/destinations">
                  <ChevronRightIcon size={14} /> Destinations (13 Cities)
                </Link>
              </li>

              <li>
                <Link href="/fleet">
                  <ChevronRightIcon size={14} /> Luxury Car Rental & Fleet
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRightIcon size={14} /> Our Services
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <ChevronRightIcon size={14} /> Guest Reviews & Ratings
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
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-links">
              <li>
                <Link href="/destinations#kochi">
                  <ChevronRightIcon size={14} /> Kochi & Athirappilly Waterfalls
                </Link>
              </li>
              <li>
                <Link href="/destinations#munnar">
                  <ChevronRightIcon size={14} /> Munnar, Thekkadi & Vagamon
                </Link>
              </li>
              <li>
                <Link href="/destinations#alleppey">
                  <ChevronRightIcon size={14} /> Alleppey & Kumarakom Backwaters
                </Link>
              </li>
              <li>
                <Link href="/destinations#varkala">
                  <ChevronRightIcon size={14} /> Varkala & Kovalam Beaches
                </Link>
              </li>
              <li>
                <Link href="/destinations#trivandrum">
                  <ChevronRightIcon size={14} /> Trivandrum & Kanyakumari
                </Link>
              </li>
              <li>
                <Link href="/destinations#rameshwaram">
                  <ChevronRightIcon size={14} /> Rameshwaram & Madurai Temple Tour
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href={`mailto:${companyData.email}`} style={{ color: '#ffffff' }}>
                    {companyData.email}
                  </a>
                  <a href={`mailto:${companyData.saneeshEmail}`} style={{ color: '#d49a37', fontWeight: '500' }}>
                    {companyData.saneeshEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line & Multilingual details */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kerala Mirror Holidays. All Rights Reserved. Tripunithura, Ernakulam, Kerala.</p>
          <p style={{ marginTop: '6px', color: '#cbd5e1' }}>
            <strong style={{ color: '#f5b041' }}>Languages Supported:</strong> English • Malayalam (മലയാളം) • Hindi (हिन्दी) • Tamil (தமிழ்) • Arabic • Kannada | Registered Tour Operator & Luxury Mobility Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
