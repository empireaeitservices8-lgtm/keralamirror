'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import {
  CheckCircleIcon,
  ArrowUpRightIcon,
  WhatsAppIcon,
  LuxuryCarIcon,
  WeddingRingIcon,
  CabServiceIcon,
  HouseboatIcon,
  HotelResortIcon,
  CorporateMiceIcon,
  AyurvedaSpaIcon
} from '@/components/Icons';
import { servicesList } from '@/data/servicesData';
import { companyData } from '@/data/companyData';

const serviceIconMap = {
  'luxury-car-rental': LuxuryCarIcon,
  'wedding-luxury-car-rental': WeddingRingIcon,
  'cab-booking-service': CabServiceIcon,
  'houseboat-booking': HouseboatIcon,
  'hotel-booking': HotelResortIcon,
  'corporate-meeting': CorporateMiceIcon,
  'ayurveda-treatment': AyurvedaSpaIcon,
};

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBook = (srv) => {
    setSelectedService(srv);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <section style={{ background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)', color: '#ffffff', padding: '70px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#f5b041', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            Hospitality & Mobility
          </span>
          <h1 className="page-banner-title">Our Comprehensive Services</h1>
          <p className="page-banner-subtitle">
            From luxury wedding car rentals and backwater houseboats to corporate MICE transport and Ayurvedic therapies in Kerala.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {servicesList.map((srv) => {
              const IconComp = serviceIconMap[srv.id] || LuxuryCarIcon;
              return (
                <div key={srv.id} className="service-card">
                  <div className="service-card-top-bar" style={{ background: srv.color }}></div>
                  <div
                    className="service-icon-box"
                    style={{
                      color: srv.color,
                      background: `linear-gradient(135deg, ${srv.color}14 0%, ${srv.color}24 100%)`,
                      border: `1px solid ${srv.color}2a`,
                      boxShadow: `0 8px 16px ${srv.color}18`,
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    <IconComp size={32} />
                  </div>
                  <h3>{srv.title}</h3>
                <div className="service-subtitle">{srv.subtitle}</div>
                <p className="service-desc">{srv.description}</p>

                <ul className="service-features">
                  {srv.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircleIcon size={16} style={{ color: srv.color, flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '16px' }}>
                  <span className="service-badge">{srv.highlight}</span>
                  <button
                    onClick={() => handleBook(srv)}
                    className="btn btn-sm btn-outline"
                    style={{ borderColor: srv.color, color: srv.color }}
                  >
                    <span>Inquire</span>
                    <ArrowUpRightIcon size={14} />
                  </button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultItem={selectedService} />
    </>
  );
}
