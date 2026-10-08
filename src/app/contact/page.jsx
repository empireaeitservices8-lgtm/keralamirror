'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, ShieldCheckIcon } from '@/components/Icons';
import { companyData } from '@/data/companyData';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleGmailSend = (e) => {
    if (e) e.preventDefault();
    const form = document.querySelector('.contact-form-card form');
    const name = form?.name?.value?.trim() || '';
    const phone = form?.phone?.value ? form.phone.value.replace(/\D/g, '') : '';
    const email = form?.email?.value?.trim() || '';
    const req = form?.service?.value || 'Tour / Travel Booking';
    const msg = form?.message?.value?.trim() || '';

    const subject = encodeURIComponent(`Kerala Travel Inquiry: ${req}${name ? ` - ${name}` : ''}`);
    const bodyText = `Hello Kerala Mirror Holidays,\n\nName: ${name || 'Customer'}\nPhone: ${phone || 'Not provided'}\nEmail: ${email || 'Not provided'}\nRequirement: ${req}\n\nMessage / Itinerary Details:\n${msg || 'I would like to inquire about tour packages / car rental tariffs.'}\n\nThank you.`;
    const body = encodeURIComponent(bodyText);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyData.email)}&cc=${encodeURIComponent(companyData.saneeshEmail)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <section style={{ background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)', color: '#ffffff', padding: '70px 0 60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="page-banner-title">Contact Kerala Mirror Holidays</h1>
          <p className="page-banner-subtitle">
            We are based in Tripunithura, Ernakulam. Connect with our dedicated trip planning team for bookings, fleet tariffs, and custom itineraries.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Info Card */}
            <div className="contact-card-info">
              <h3>Head Office & Travel Desk</h3>
              <p>Reach out directly for customized tour packages, luxury wedding cars, and houseboat reservations.</p>

              <div className="contact-detail-items">
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <MapPinIcon size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Office Address</h5>
                    <p>
                      <strong>Kerala Mirror Holidays</strong><br />
                      Eroor South P.O.<br />
                      Tripunithura, Ernakulam<br />
                      Kerala - 682 306, India
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <PhoneIcon size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Direct Mobile</h5>
                    <p>
                      <a href={`tel:${companyData.phoneRaw}`}>{companyData.phoneRaw}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon" style={{ background: '#25d366' }}>
                    <WhatsAppIcon size={22} style={{ color: '#ffffff' }} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Official WhatsApp</h5>
                    <p>
                      <a href={companyData.whatsappLink} target="_blank" rel="noopener noreferrer">
                        {companyData.whatsappRaw}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <MailIcon size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Official Email Desk</h5>
                    <p style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
                      <a href={`mailto:${companyData.saneeshEmail}`} style={{ color: '#0d5c3a', fontWeight: '500' }}>
                        {companyData.saneeshEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: '#0f172a' }}>Send Us a Message</h3>
              <p style={{ color: '#64748b', fontSize: '0.94rem', marginBottom: '24px' }}>
                Receive instant quotes and customized Kerala itineraries straight to your phone.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const phone = form.phone.value.replace(/\D/g, '');
                  const email = form.email.value.trim();
                  const req = form.service.value;
                  const msg = form.message.value;

                  if (phone.length !== 10) {
                    alert('Phone number must be exactly 10 digits. More or less than 10 digits is not allowed.');
                    return;
                  }
                  if (!email.toLowerCase().endsWith('@gmail.com')) {
                    alert('Email address must end with @gmail.com');
                    return;
                  }

                  const waText = encodeURIComponent(
                    `*Contact Page Inquiry - Kerala Mirror Holidays*\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nRequirement: ${req}\nMessage: ${msg}`
                  );
                  window.open(`https://wa.me/${companyData.whatsappRaw}?text=${waText}`, '_blank');
                }}
              >
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="form-input" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      title="Phone number must be exactly 10 digits"
                      placeholder="Phone number"
                      className="form-input"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
                      title="Email must end with @gmail.com"
                      placeholder="name@gmail.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select name="service" className="form-select">
                    <option value="Tour Package Booking">Tour Package Booking</option>
                    <option value="Luxury Car Rental">Luxury Car Rental</option>
                    <option value="Wedding Luxury Car Rental">Wedding Luxury Car Rental</option>
                    <option value="Houseboat Booking">Houseboat Booking</option>
                    <option value="Cab Service">Cab Booking</option>
                    <option value="Ayurveda Package">Ayurveda Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message / Itinerary Requirements</label>
                  <textarea name="message" rows={4} placeholder="Tell us how we can help you..." className="form-textarea" required></textarea>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-whatsapp" style={{ flex: 1 }}>
                    <WhatsAppIcon size={18} />
                    <span>Send on WhatsApp</span>
                  </button>
                  <button type="button" onClick={handleGmailSend} className="btn btn-outline" style={{ flex: 1 }}>
                    <MailIcon size={18} />
                    <span>Send via Mail</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
