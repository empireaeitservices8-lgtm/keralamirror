'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import FleetCard from '@/components/FleetCard';
import { fleetCategories, fleetList } from '@/data/fleetData';
import { companyData } from '@/data/companyData';
import { WhatsAppIcon } from '@/components/Icons';

export default function FleetPage() {
  const [selectedCat, setSelectedCat] = useState('All Vehicles');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBook = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const filteredFleet = selectedCat === 'All Vehicles'
    ? fleetList
    : fleetList.filter((c) => c.category === selectedCat);

  return (
    <>
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <section style={{ background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)', color: '#ffffff', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#ffffff', margin: 0 }}>Luxury Car Rental & Tourist Vehicles</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="filter-tabs">
            {fleetCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`filter-tab ${selectedCat === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fleet Grid */}
          <div className="grid-3">
            {filteredFleet.map((car) => (
              <FleetCard key={car.id} car={car} onBook={handleBook} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '16px' }}>
              Looking for special wedding car floral decorations or custom outstation rates?
            </p>
            <a
              href={`https://wa.me/${companyData.whatsappRaw}?text=Hello%20Kerala%20Mirror%20Holidays,%20I%20need%20a%20quote%20for%20luxury%20car%20rental.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={18} />
              <span>Inquire via WhatsApp: {companyData.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultItem={selectedCar} />
    </>
  );
}
