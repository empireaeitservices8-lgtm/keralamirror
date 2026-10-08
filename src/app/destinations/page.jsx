'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import {
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  PhoneIcon,
  WhatsAppIcon,
  CalendarIcon,
  UsersIcon
} from '@/components/Icons';
import { destinationCategories, destinationsList } from '@/data/destinationsData';
import { companyData } from '@/data/companyData';

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Destinations');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState(null);

  const filteredDestinations =
    selectedCategory === 'All Destinations'
      ? destinationsList
      : destinationsList.filter((d) => d.category === selectedCategory);

  const openBooking = (dest) => {
    setBookingItem({
      title: `Tour Package / Cab to ${dest.name}`
    });
    setBookingModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)',
          color: '#ffffff',
          padding: '70px 0 60px',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(212, 154, 55, 0.18)',
              color: '#f5b041',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '16px',
              border: '1px solid rgba(212, 154, 55, 0.35)'
            }}
          >
            <SparklesIcon size={16} />
            <span>13 Handcrafted Destinations Across Kerala & Tamil Nadu</span>
          </div>
          <h1 className="page-banner-title" style={{ fontSize: 'clamp(1.85rem, 5vw, 2.6rem)', fontWeight: 800, marginBottom: '16px' }}>
            Explore Our Signature Destinations
          </h1>
          <p
            className="page-banner-subtitle"
            style={{ maxWidth: '820px', margin: '0 auto', fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', color: '#cbd5e1', lineHeight: 1.6 }}
          >
            From the roaring cascades of Athirappilly and mist-drenched peaks of Munnar to the holy corridors of Rameshwaram and vibrant temples of Madurai, experience seamless private cab tours and personalized itineraries with Kerala Mirror Holidays.
          </p>

          {/* Multilingual Chauffeur Strip */}
          <div
            style={{
              marginTop: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.92rem',
              color: '#f8fafc',
              maxWidth: '100%'
            }}
          >
            <strong style={{ color: '#f5b041' }}>Chauffeur Languages:</strong>
            <span>English • Malayalam • Hindi • Tamil • Arabic (on request)</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '36px'
            }}
          >
            {destinationCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '30px',
                  border: selectedCategory === cat ? '2px solid #0d5c3a' : '1px solid #cbd5e1',
                  background: selectedCategory === cat ? '#0d5c3a' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  fontWeight: selectedCategory === cat ? '600' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat ? '0 4px 12px rgba(13, 92, 58, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Destinations Grid - Fully Responsive */}
          <div className="destinations-grid">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                id={dest.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Destination Image */}
                <div
                  style={{
                    position: 'relative',
                    height: 'clamp(200px, 40vw, 240px)',
                    width: '100%',
                    background: '#072316',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    onError={(e) => {
                      if (e.target.src !== dest.fallbackImage) {
                        e.target.src = dest.fallbackImage;
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                </div>

                {/* Content Details */}
                <div style={{ padding: 'clamp(18px, 4vw, 24px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', fontWeight: '700', margin: '0 0 8px 0', color: '#0f172a' }}>
                    {dest.name}
                  </h3>

                  <p
                    style={{
                      color: '#d49a37',
                      fontSize: '0.86rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}
                  >
                    {dest.tagline}
                  </p>

                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '18px' }}>
                    {dest.description}
                  </p>

                  {/* Top Attractions List */}
                  <div style={{ marginBottom: '20px' }}>
                    <h5
                      style={{
                        fontSize: '0.88rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: '#0f172a',
                        marginBottom: '10px',
                        fontWeight: '700'
                      }}
                    >
                      Key Highlights & Sightseeing:
                    </h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {dest.topAttractions.map((attraction, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.87rem',
                            color: '#334155'
                          }}
                        >
                          <CheckCircleIcon size={15} style={{ color: '#0d5c3a', flexShrink: 0, marginTop: '2px' }} />
                          <span>{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Tour Routes */}
                  {dest.popularCombinations && (
                    <div
                      style={{
                        marginTop: 'auto',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: '#f1f5f9',
                        marginBottom: '20px'
                      }}
                    >
                      <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Popular Combinations:
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '500' }}>
                        {dest.popularCombinations.join(' • ')}
                      </span>
                    </div>
                  )}

                  {/* Booking Button */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <button
                      onClick={() => openBooking(dest)}
                      className="btn btn-green"
                      style={{ flex: 1, padding: '12px 16px', fontSize: '0.92rem' }}
                    >
                      <span>Book Now</span>
                      <ArrowUpRightIcon size={16} />
                    </button>
                    <a
                      href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(`Hello Kerala Mirror Holidays, I would like to plan a tour/cab booking to ${dest.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '12px 16px' }}
                      title="Quick Inquiry on WhatsApp"
                    >
                      <WhatsAppIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />
      <FloatingWhatsApp />
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultItem={bookingItem}
      />
    </>
  );
}
