'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import PackageCard from '@/components/PackageCard';
import { packageCategories, packagesList } from '@/data/packagesData';
import { companyData } from '@/data/companyData';
import { WhatsAppIcon } from '@/components/Icons';

export default function PackagesPage() {
  const [selectedCat, setSelectedCat] = useState('All Packages');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleBook = (pkg) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  const filteredPackages = selectedCat === 'All Packages'
    ? packagesList
    : packagesList.filter((p) => p.category === selectedCat);

  return (
    <>
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <section style={{ background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)', color: '#ffffff', padding: '70px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#f5b041', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            Handcrafted Kerala Holidays
          </span>
          <h1 className="page-banner-title">Tour Packages in God’s Own Country</h1>
          <p className="page-banner-subtitle">
            Choose from romantic honeymoon escapes, lively group expeditions, rain-soaked monsoon journeys, wild elephant & nature safaris, and rejuvenating Ayurvedic retreats.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="filter-tabs">
            {packageCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`filter-tab ${selectedCat === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid-3">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onBook={handleBook} />
            ))}
          </div>

          {/* Destinations banner */}
          <div style={{ marginTop: '50px', textAlign: 'center', background: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '8px' }}>
              Want to customize your itinerary with specific destinations?
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.94rem', marginBottom: '18px' }}>
              Explore all 13 destinations: Kochi, Athirappilly, Munnar, Thekkadi, Vagamon, Kumarakom, Alleppey, Varkala, Trivandrum, Kovalam, Kanyakumari, Rameshwaram, and Madurai.
            </p>
            <a href="/destinations" className="btn btn-green" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
              Explore Destinations & Sightseeing Highlights
            </a>
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultItem={selectedPkg} />
    </>
  );
}
