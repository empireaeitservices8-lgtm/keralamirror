'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, ArrowUpRightIcon, WhatsAppIcon } from './Icons';
import { companyData } from '@/data/companyData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Luxury Fleet', href: '/fleet' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className="navbar-sticky">
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
