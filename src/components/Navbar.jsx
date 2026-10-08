'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, ArrowUpRightIcon, WhatsAppIcon, FacebookIcon, InstagramIcon } from './Icons';
import { companyData } from '@/data/companyData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateHeight = () => {
      if (headerRef.current) {
        if (window.scrollY <= 20) {
          setSpacerHeight(headerRef.current.offsetHeight);
        }
      }
    };

    updateHeight();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeight);

    // Initial delayed measure in case images/fonts load
    const timer = setTimeout(updateHeight, 250);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Services', href: '/services' },
    { label: 'Luxury Fleet', href: '/fleet' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Fixed Full Header */}
      <header
        ref={headerRef}
        className={`site-header-fixed ${isScrolled ? 'scrolled' : ''}`}
      >
        {/* Main Navbar */}
        <div className="container nav-container">
          <Link href="/" className="brand-link" title="Kerala Mirror Holidays Home">
            {/* Transparent enlarged brand logo with visible text */}
            <img
              src="/logo-transparent.png"
              alt="Kerala Mirror Holidays"
              className="brand-logo-img"
              width="280"
              height="105"
            />
          </Link>

          {/* Right-aligned Navigation & Action */}
          <div className="nav-right-wrap">
            <nav>
              <ul className="nav-links">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* BOOK NOW Button */}
            <button
              onClick={() => {
                if (onOpenBooking) onOpenBooking();
                else window.location.href = '/contact';
              }}
              className="btn btn-primary nav-book-btn"
              id="navbar-book-now"
              aria-label="Book Now"
            >
              BOOK NOW
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
              aria-label="Open mobile menu"
            >
              <MenuIcon size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Header Spacer to prevent content overlay */}
      <div
        className="header-fixed-spacer"
        style={spacerHeight ? { height: `${spacerHeight}px` } : undefined}
      />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <img
                src="/logo-transparent.png"
                alt="Kerala Mirror Holidays"
                style={{ height: '82px', width: 'auto', objectFit: 'contain' }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569' }}
                aria-label="Close menu"
              >
                <XIcon size={26} />
              </button>
            </div>

            <ul className="mobile-drawer-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ color: isActive ? '#0d5c3a' : '#1e293b' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Languages & Dual Emails */}
            <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', fontSize: '0.84rem', margin: '14px 0' }}>
              <div style={{ marginBottom: '6px' }}>
                <strong style={{ color: '#0d5c3a' }}>Languages Spoken:</strong><br />
                English • മലയാളം • हिन्दी • Tamil
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '6px', color: '#475569' }}>
                <span>✉️ {companyData.email}</span>
                <span style={{ color: '#0d5c3a', fontWeight: '500' }}>✉️ {companyData.saneeshEmail}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <a
                  href={companyData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1877f2', fontWeight: '600', fontSize: '0.82rem' }}
                >
                  <FacebookIcon size={14} /> Facebook
                </a>
                <a
                  href={companyData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e1306c', fontWeight: '600', fontSize: '0.82rem' }}
                >
                  <InstagramIcon size={14} /> Instagram
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                BOOK NOW
              </button>
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=Hello%20Kerala%20Mirror%20Holidays`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <WhatsAppIcon size={18} />
                WhatsApp: {companyData.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
