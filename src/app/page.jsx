'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  StarIcon,
  SparklesIcon,
  CarIcon,
  CalendarIcon,
  ArrowUpRightIcon,
  LuxuryCarIcon,
  WeddingRingIcon,
  CabServiceIcon,
  HouseboatIcon,
  HotelResortIcon,
  CorporateMiceIcon,
  AyurvedaSpaIcon,
  FleetOwnershipIcon,
  Support247Icon,
  DriverSteeringIcon,
  TransparentPricingIcon
} from '@/components/Icons';
import { companyData } from '@/data/companyData';
import { fleetList } from '@/data/fleetData';
import { packagesList } from '@/data/packagesData';
import { servicesList } from '@/data/servicesData';

const serviceIconMap = {
  'luxury-car-rental': LuxuryCarIcon,
  'wedding-luxury-car-rental': WeddingRingIcon,
  'cab-booking-service': CabServiceIcon,
  'houseboat-booking': HouseboatIcon,
  'hotel-booking': HotelResortIcon,
  'corporate-meeting': CorporateMiceIcon,
  'ayurveda-treatment': AyurvedaSpaIcon,
};

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState(null);
  const [animateHeading, setAnimateHeading] = useState(true);

  useEffect(() => {
    let hasScrolledDown = false;

    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      if (top > 250) {
        hasScrolledDown = true;
      } else if (top < 50 && hasScrolledDown) {
        hasScrolledDown = false;
        // Re-trigger animation when returning to top
        setAnimateHeading(false);
        setTimeout(() => {
          setAnimateHeading(true);
        }, 30);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick inquiry state
  const [quickService, setQuickService] = useState('Kerala Tour Package');
  const [quickDate, setQuickDate] = useState('');
  const [quickGuests, setQuickGuests] = useState('2 Guests');

  const openBooking = (item = null) => {
    setBookingItem(item);
    setBookingModalOpen(true);
  };

  const handleQuickCheck = (e) => {
    e.preventDefault();
    openBooking({ title: `${quickService} (Date: ${quickDate || 'Flexible'}, ${quickGuests})` });
  };

  return (
    <>
      {/* Navigation */}
      <Navbar onOpenBooking={() => openBooking({ title: 'Custom Kerala Vacation / Fleet Rental' })} />

      {/* Hero Section with Clean Kerala Backwaters Background */}
      <section className="hero-wrapper" id="home">
        <div className="container hero-content-center">
          <div className="hero-pill">
            <SparklesIcon size={16} />
            <span>God’s Own Country Experiences & Luxury Mobility</span>
          </div>

          <h1 className={`hero-title-luxury ${animateHeading ? 'animate-heading' : ''}`}>
            <span className="title-part-white">EXPERIENCE THE TIMELESS SPLENDOR OF KERALA WITH </span>
            <span className="title-part-gold">KERALA MIRROR HOLIDAYS</span>
          </h1>

          {/* 3 Badges horizontally in one line */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircleIcon size={17} style={{ color: '#f5b041' }} />
              <span>24/7 Concierge Support</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircleIcon size={17} style={{ color: '#f5b041' }} />
              <span>Verified Clean Vehicles</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircleIcon size={17} style={{ color: '#f5b041' }} />
              <span>Professional Uniformed Drivers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Strip */}
      <div className="container">
        <div className="quick-inquiry-bar">
          <form onSubmit={handleQuickCheck} className="inquiry-grid">
            <div className="inquiry-field">
              <label className="inquiry-label">Select Service / Fleet</label>
              <select
                value={quickService}
                onChange={(e) => setQuickService(e.target.value)}
                className="inquiry-select"
              >
                <option value="Honeymoon Tour Package">Honeymoon Tour Package</option>
                <option value="Group Tour Package">Group Tour Package</option>
                <option value="Monsoon Tour Package">Monsoon Tour Package</option>
                <option value="Wildlife Safari Package">Wildlife & Nature Safari Package</option>
                <option value="Hill Station Highlands Package">Hill Station & Wayanad Highlands Package</option>
                <option value="Ayurveda Treatment Package">Ayurveda Treatment Package</option>
                <option value="Luxury Car Rental (Mercedes / BMW / Vellfire)">Luxury Car Rental</option>
                <option value="Wedding Luxury Car Rental">Wedding Luxury Car Rental</option>
                <option value="Houseboat Booking">Alleppey Houseboat Booking</option>
                <option value="Airport Cab Booking">Airport Cab Pick & Drop</option>
                <option value="Corporate Meeting Travel">Corporate Meeting Mobility</option>
              </select>
            </div>

            <div className="inquiry-field">
              <label className="inquiry-label">Travel Date</label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="inquiry-input"
              />
            </div>

            <div className="inquiry-field">
              <label className="inquiry-label">Guests / Group</label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="inquiry-select"
              >
                <option value="1-2 Guests">1-2 Guests (Couple)</option>
                <option value="3-5 Guests">3-5 Guests (Family)</option>
                <option value="6-8 Guests">6-8 Guests (Innova)</option>
                <option value="10-17 Guests">10-17 Guests (Traveller)</option>
                <option value="20+ Guests">20+ Guests (Luxury Coach)</option>
              </select>
            </div>

            <div className="inquiry-field">
              <label className="inquiry-label">Instant Assistance</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 0' }}>
                <PhoneIcon size={16} style={{ color: '#0d5c3a' }} />
                <a href={`tel:${companyData.phoneRaw}`} style={{ fontWeight: '700', color: '#0d5c3a', fontSize: '0.92rem' }}>
                  {companyData.phone}
                </a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ height: '48px' }}>
              <span>Check Tariffs</span>
              <ArrowUpRightIcon size={15} />
            </button>
          </form>
        </div>
      </div>

      {/* About Us Section */}
      <section className="section-padding" id="about" style={{ background: '#ffffff', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="section-badge">Discover Kerala Mirror Holidays</span>
              <h2 className="about-hero-title">
                Your Trusted Travel Companion
              </h2>
            </div>

            {/* 3 Value Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}>
              <div style={{
                background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
                padding: '28px 24px',
                borderRadius: '16px',
                border: '1px solid rgba(15, 23, 42, 0.06)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(13, 92, 58, 0.1)',
                  color: '#0d5c3a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <SparklesIcon size={26} />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                  Handcrafted Holidays
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                  Romantic Munnar hill hideaways, serene backwater houseboat cruises in Alleppey, and wild elephant nature trails created with pure personal attention.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
                padding: '28px 24px',
                borderRadius: '16px',
                border: '1px solid rgba(15, 23, 42, 0.06)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(212, 154, 55, 0.12)',
                  color: '#b87c1c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <LuxuryCarIcon size={26} />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                  Chauffeur-Driven Luxury
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                  Travel in immaculate comfort with our private fleet of VIP Mercedes, BMW, Toyota Vellfire, Innova Crystas, and coaches with courteous chauffeurs.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
                padding: '28px 24px',
                borderRadius: '16px',
                border: '1px solid rgba(15, 23, 42, 0.06)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Support247Icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                  24/7 Dedicated Care
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                  Transparent tariffs, zero hidden surprises, and round-the-clock local support ensuring an effortless and unforgettable journey.
                </p>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              padding: '16px 20px',
              background: '#f8fafc',
              borderRadius: '14px',
              marginBottom: '28px',
              border: '1px dashed rgba(13, 92, 58, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d5c3a', fontWeight: '600', fontSize: '0.92rem' }}>
                <ShieldCheckIcon size={18} />
                <span>100% Certified Safe Travel</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d5c3a', fontWeight: '600', fontSize: '0.92rem' }}>
                <CheckCircleIcon size={18} />
                <span>All-Kerala Network Coverage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d5c3a', fontWeight: '600', fontSize: '0.92rem' }}>
                <FleetOwnershipIcon size={18} />
                <span>Direct Fleet Ownership</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b87c1c', fontWeight: '600', fontSize: '0.92rem' }}>
                <StarIcon size={18} />
                <span>5-Star Hospitality Experience</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-green">
                <span>Learn More About Us</span>
                <ArrowUpRightIcon size={15} />
              </Link>
              <Link href="/packages" className="btn btn-outline" style={{ borderColor: '#0d5c3a', color: '#0d5c3a' }}>
                <span>Explore Tour Packages</span>
                <ArrowUpRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="services" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From individual taxi rides and backwater voyages to full-scale corporate mobility and
              royal wedding entries, explore our signature hospitality services.
            </p>
          </div>

          <div className="grid-3">
            {servicesList.map((srv) => {
              const IconComp = serviceIconMap[srv.id] || CarIcon;
              return (
                <Link
                  key={srv.id}
                  href="/services"
                  className="service-card"
                  style={{
                    textAlign: 'center',
                    padding: '36px 22px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div className="service-card-top-bar" style={{ background: srv.color }}></div>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      color: srv.color,
                      background: `linear-gradient(135deg, ${srv.color}14 0%, ${srv.color}24 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: `0 8px 16px ${srv.color}18`,
                      border: `1px solid ${srv.color}2a`
                    }}
                  >
                    <IconComp size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.22rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px', lineHeight: 1.35 }}>
                    {srv.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: srv.color, background: `${srv.color}12`, padding: '4px 12px', borderRadius: '20px' }}>
                    {srv.highlight || 'Kerala Mirror Service'}
                  </span>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/services" className="btn btn-green">
              <span>View All Services</span>
              <ArrowUpRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="section-padding" id="packages">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Exclusive Kerala Tour Packages</h2>
            <p className="section-subtitle">
              Handcrafted holiday journeys created by regional destination specialists. Featuring
              scenic hill stations, tranquil backwaters, rain wonders, holy pilgrimages, and rejuvenating Ayurveda.
            </p>
          </div>

          {/* Cards with images and names only */}
          <div className="grid-3">
            {packagesList.map((pkg) => (
              <div
                key={pkg.id}
                className="package-card"
                style={{ overflow: 'hidden', padding: 0, borderRadius: 'var(--radius-lg)' }}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src={pkg.image || '/tour-munnar-hills.jpg'}
                    alt={pkg.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px 22px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.35 }}>
                    {pkg.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/packages" className="btn btn-green">
              <span>View All Tour Packages</span>
              <ArrowUpRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Visual Gallery Showcase */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Glimpses of Kerala</span>
            <h2 className="section-title">Experience God’s Own Country</h2>
            <p className="section-subtitle">
              From the mist-crowned heights of Munnar tea plantations to wild elephant herds in pristine rain sanctuaries — witness the beauty that awaits you on our tours.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card" onClick={() => openBooking({ title: 'Munnar Mist Hill Station Tour' })}>
              <img src="/tour-munnar-hills.jpg" alt="Munnar Mist Valleys & Rolling Tea Hills" />
              <div className="gallery-overlay">
                <h4>Munnar Tea Hills</h4>
                <p>Mist Valleys & Rolling Peaks</p>
              </div>
            </div>

            <div className="gallery-card" onClick={() => openBooking({ title: 'Kerala Wildlife Safari & Elephants' })}>
              <img src="/tour-wildlife-elephants.jpg" alt="Wild Elephant Herd in Kerala Hills" />
              <div className="gallery-overlay">
                <h4>Wildlife Safaris</h4>
                <p>Wild Elephant Herds in Natural Habitats</p>
              </div>
            </div>

            <div className="gallery-card" onClick={() => openBooking({ title: 'Monsoon Tea Plantation Hill Drive' })}>
              <img src="/tour-misty-roads.png" alt="Misty Hill Plantation Road Drive" />
              <div className="gallery-overlay">
                <h4>Misty Mountain Drives</h4>
                <p>Winding Tea Trails in Fog & Rain</p>
              </div>
            </div>

            <div className="gallery-card" onClick={() => openBooking({ title: 'Mystic Night Forest & Campfire Tour' })}>
              <img src="/tour-night-forest.png" alt="Mystic Night Forest with Radiant Light Beams in Mist" />
              <div className="gallery-overlay">
                <h4>Mystic Night Trails</h4>
                <p>Radiant Beams & Mountain Mist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Fleet & Vehicles Section */}
      <section className="section-padding" id="fleet" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Luxury Fleet & Rental Cabs</h2>
          </div>

          {/* Cards with images and names only */}
          <div className="grid-3">
            {fleetList.map((car) => (
              <div
                key={car.id}
                className="fleet-card"
                style={{ overflow: 'hidden', padding: 0, borderRadius: 'var(--radius-lg)' }}
              >
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#0a1e14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={car.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                      <CarIcon size={56} style={{ color: '#10b981', marginBottom: '8px' }} />
                      <span style={{ fontSize: '0.82rem', letterSpacing: '0.5px' }}>Kerala Mirror Holidays Fleet</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px 22px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.35 }}>
                    {car.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/fleet" className="btn btn-green">
              <span>View Vehicle Fleet & Details</span>
              <ArrowUpRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#f5b041', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              The Kerala Mirror Advantage
            </span>
            <h2 className="section-title">Why Travel With Kerala Mirror Holidays?</h2>
            <p className="section-subtitle">
              Uncompromising service standards, personalized local care, and seamless travel logistics throughout Kerala.
            </p>
          </div>

          <div className="grid-4">
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
              <h4>Direct Ownership & Quality</h4>
              <p>We manage our own fleet of vehicles and partner directly with certified resorts and houseboats, avoiding middlemen.</p>
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
              <h4>Punctual 24/7 Support</h4>
              <p>Round-the-clock telephone and WhatsApp helpline. Your airport pickups and day trips will always be prompt and stress-free.</p>
            </div>

            <div className="why-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  color: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                <DriverSteeringIcon size={28} />
              </div>
              <h4>Expert Local Drivers</h4>
              <p>Courteous, seasoned chauffeurs familiar with every mountain bend of Munnar and secret backwater canals of Alleppey.</p>
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
              <h4>Transparent Pricing</h4>
              <p>No unexpected hidden taxes or driver batas. Clear, honest, and competitive tariffs backed by verified invoices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenBooking={() => openBooking({ title: 'Kerala Mirror Holidays Booking' })} />

      {/* Booking Modal */}
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultItem={bookingItem}
      />
    </>
  );
}
