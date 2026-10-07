'use client';

import { useState } from 'react';
import { XIcon, WhatsAppIcon, MailIcon, CheckCircleIcon } from './Icons';
import { companyData } from '@/data/companyData';
import { fleetList } from '@/data/fleetData';
import { packagesList } from '@/data/packagesData';
import { servicesList } from '@/data/servicesData';

export default function QuickBookingModal({ isOpen, onClose, defaultItem = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: defaultItem?.title || defaultItem?.name || 'Kerala Tour Package',
    travelDate: '',
    passengers: '2',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Strictly 10 digits only, block any non-digit and limit to 10 characters
      const cleanDigits = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleanDigits }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructMessage = () => {
    return (
      `*New Inquiry - Kerala Mirror Holidays*\n` +
      `--------------------------------\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Requirement:* ${formData.serviceType}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Guests/Passengers:* ${formData.passengers}\n` +
      `*Notes:* ${formData.notes || 'Looking for quote & itinerary'}\n`
    );
  };

  const validateInputs = () => {
    if (!formData.phone || formData.phone.length !== 10) {
      alert('Phone number must be exactly 10 digits. More or less than 10 digits is not allowed.');
      return false;
    }
    if (formData.email && !formData.email.toLowerCase().endsWith('@gmail.com')) {
      alert('Email must end with @gmail.com');
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    const msg = encodeURIComponent(constructMessage());
    const url = `https://wa.me/${companyData.whatsappRaw}?text=${msg}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    const subject = encodeURIComponent(`Booking Inquiry: ${formData.serviceType} - ${formData.name}`);
    const body = encodeURIComponent(constructMessage());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyData.email)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <XIcon size={20} />
        </button>

        <div style={{ marginBottom: '22px' }}>
          <span className="section-badge" style={{ marginBottom: '8px' }}>Direct Booking Inquiry</span>
          <h3 style={{ fontSize: '1.6rem', color: '#0f172a' }}>Plan Your Kerala Experience</h3>
          <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
            Get instant quotes & customized itineraries directly from our trip experts in Tripunithura, Ernakulam.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
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
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
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
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Select Package / Vehicle / Service *</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="form-select"
            >
              <optgroup label="Tour Packages">
                {packagesList.map((pkg) => (
                  <option key={pkg.id} value={`Tour Package: ${pkg.title}`}>
                    {pkg.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Luxury & Rental Fleet">
                {fleetList.map((car) => (
                  <option key={car.id} value={`Vehicle Rental: ${car.name}`}>
                    {car.name} ({car.tag})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Other Specialized Services">
                {servicesList.map((srv) => (
                  <option key={srv.id} value={`Service: ${srv.title}`}>
                    {srv.title}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="modal-grid-2">
            <div className="form-group">
              <label className="form-label">Estimated Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Number of Travelers</label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="form-select"
              >
                <option value="1-2 Guests (Couple)">1-2 Guests (Couple)</option>
                <option value="3-5 Guests (Family)">3-5 Guests (Family)</option>
                <option value="6-8 Guests (Small Group)">6-8 Guests (Small Group)</option>
                <option value="10-15 Guests (Force Traveller)">10-15 Guests (Traveller)</option>
                <option value="15-40+ Guests (Coach/Bus)">15-40+ Guests (Coach/Bus)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Additional Requirements / Pick-up Location</label>
            <textarea
              name="notes"
              rows={3}
              placeholder="e.g., Cochin Airport pick-up, Munnar-Alleppey 5-day tour, luxury wedding decor..."
              value={formData.notes}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
              <WhatsAppIcon size={18} />
              <span>Send Inquiry on WhatsApp (Instant Reply)</span>
            </button>

            <button type="button" onClick={handleEmailSubmit} className="btn btn-outline" style={{ width: '100%' }}>
              <MailIcon size={18} />
              <span>Send via Mail</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
