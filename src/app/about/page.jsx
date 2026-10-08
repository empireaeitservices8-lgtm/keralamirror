'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  StarIcon,
  CarIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  FleetOwnershipIcon,
  Support247Icon,
  TransparentPricingIcon
} from '@/components/Icons';
import { companyData } from '@/data/companyData';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      {/* About Us Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)', color: '#ffffff', padding: '80px 0 70px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="page-banner-title">About Us</h1>
          <p className="page-banner-subtitle">
            Rooted in Tripunithura, Ernakulam. Delivering handcrafted Kerala vacation packages,
            luxury wedding mobility, and authentic hospitality across God’s Own Country.
          </p>
        </div>
      </section>

      {/* Main About Us Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="section-badge">Our Story & Mission</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>Mirrored Excellence in Every Kerala Journey</h2>
            </div>
              
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '18px', textAlign: 'justify' }}>
              Welcome to Kerala Mirror Holidays, your premier travel management and luxury car rental partner based in Eroor South P.O., Tripunithura, Ernakulam.
            </p>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.8', marginBottom: '18px', textAlign: 'justify' }}>
              We were founded with a singular passion: to offer travelers an authentic, stress-free, and luxurious window into the unmatched landscapes, backwaters, hill stations, and rich cultural traditions of Kerala.
            </p>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.8', marginBottom: '32px', textAlign: 'justify' }}>
              Whether you are planning a romantic honeymoon through Munnar and Alleppey, a large family or college group tour, a monsoon waterfall expedition, a wild elephant nature safari, or an authentic Ayurvedic rejuvenation retreat — we orchestrate every single detail with flawless precision.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheckIcon size={22} style={{ color: '#0d5c3a' }} />
                <span style={{ fontWeight: '600', fontSize: '0.94rem' }}>Government Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircleIcon size={22} style={{ color: '#0d5c3a' }} />
                <span style={{ fontWeight: '600', fontSize: '0.94rem' }}>All-Kerala Network</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CarIcon size={22} style={{ color: '#0d5c3a' }} />
                <span style={{ fontWeight: '600', fontSize: '0.94rem' }}>Own Vehicle Fleet</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <StarIcon size={22} style={{ color: '#d49a37' }} />
                <span style={{ fontWeight: '600', fontSize: '0.94rem' }}>5-Star Hospitality</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn btn-green">
                <span>Plan Your Journey</span>
                <ArrowUpRightIcon size={16} />
              </button>
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=Hello%20Kerala%20Mirror%20Holidays`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp: {companyData.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#f5b041', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              Core Values
            </span>
            <h2 className="section-title">What Defines Kerala Mirror Holidays</h2>
            <p className="section-subtitle">
              We stand apart through our direct fleet ownership, experienced local chauffeurs, and round-the-clock personal assistance.
            </p>
          </div>

          <div className="grid-3">
            <div className="why-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                <FleetOwnershipIcon size={28} />
              </div>
              <h4>Direct Fleet Ownership</h4>
              <p>
                From Toyota Vellfire, Mercedes-Benz, BMW, and Jaguar to Innova Crysta, Hycross, Ertiga, and Bharat Benz coaches — we maintain our own fleet in showroom condition.
              </p>
            </div>
            <div className="why-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  border: '1px solid rgba(14, 165, 233, 0.25)',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Support247Icon size={28} />
              </div>
              <h4>24/7 Dedicated Concierge</h4>
              <p>
                Whether it's a midnight airport arrival at Cochin Airport (COK) or a change in your daily itinerary, our trip coordinators are available 24 hours a day.
              </p>
            </div>
            <div className="why-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(20, 184, 166, 0.12)',
                  border: '1px solid rgba(20, 184, 166, 0.25)',
                  color: '#2dd4bf',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                <TransparentPricingIcon size={28} />
              </div>
              <h4>Transparent, Fair Pricing</h4>
              <p>
                No hidden charges, no surprises. All tolls, permits, driver allowances, and taxes are clearly disclosed with official receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations We Cover Visual Gallery */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Signature Kerala Destinations</span>
            <h2 className="section-title">Where We Take You</h2>
            <p className="section-subtitle">
              Every itinerary is designed to give you unforgettable memories of Kerala’s misty mountains, verdant tea trails, and thriving wildlife.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card" onClick={() => setModalOpen(true)}>
              <img src="/tour-munnar-hills.jpg" alt="Munnar Tea Plantations" />
            </div>

            <div className="gallery-card" onClick={() => setModalOpen(true)}>
              <img src="/tour-wildlife-elephants.jpg" alt="Kerala Wildlife Safari" />
            </div>

            <div className="gallery-card" onClick={() => setModalOpen(true)}>
              <img src="/tour-misty-roads.png" alt="Misty Hill Drives" />
            </div>

            <div className="gallery-card" onClick={() => setModalOpen(true)}>
              <img src="/tour-night-forest.png" alt="Mystic Night Trails" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/destinations" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              <span>Explore Destinations</span>
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Headquarters Contact Quick Box */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '44px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <span style={{ color: '#f5b041', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Visit Our Office
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '1.9rem', marginTop: '6px' }}>
                Tripunithura, Ernakulam Headquarters
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', maxWidth: '620px', marginTop: '8px' }}>
                Eroor South P.O., Tripunithura, Ernakulam - 682 306. Call us at <strong>{companyData.phoneRaw}</strong> or WhatsApp <strong>{companyData.whatsappRaw}</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Page
              </Link>
              <Link href="/fleet" className="btn btn-outline-white">
                View Luxury Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
