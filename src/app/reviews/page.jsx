'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuickBookingModal from '@/components/QuickBookingModal';
import {
  StarIcon,
  CheckCircleIcon,
  SparklesIcon,
  XIcon,
  PhoneIcon,
  MailIcon,
  CarIcon
} from '@/components/Icons';
import { reviewStats, reviewCategories, reviewsList } from '@/data/reviewsData';
import { companyData } from '@/data/companyData';

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Reviews');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [writeReviewModalOpen, setWriteReviewModalOpen] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    tour: '',
    rating: 5,
    title: '',
    review: ''
  });

  const [reviews, setReviews] = useState(reviewsList);

  const filteredReviews =
    selectedCategory === 'All Reviews'
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) {
      alert('Please fill in your name and review.');
      return;
    }

    const created = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'India',
      tour: newReview.tour || 'Kerala Tour Package',
      rating: Number(newReview.rating),
      date: 'Just now',
      category: 'Family & Group Tours',
      verified: true,
      title: newReview.title || 'Wonderful travel experience with Kerala Mirror Holidays',
      review: newReview.review,
      vehicle: 'Tour Vehicle'
    };

    setReviews([created, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setWriteReviewModalOpen(false);
      setNewReview({
        name: '',
        location: '',
        tour: '',
        rating: 5,
        title: '',
        review: ''
      });
    }, 2000);
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
            <span>4.9 / 5.0 Rated Across 480+ Verified Guest Reviews</span>
          </div>
          <h1 className="page-banner-title" style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: '16px' }}>
            Guest Reviews & Testimonials
          </h1>
          <p
            className="page-banner-subtitle"
            style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.08rem', color: '#cbd5e1', lineHeight: 1.6 }}
          >
            Discover real experiences from couples, families, and pilgrims who explored God’s Own Country and sacred South Indian circuits with Kerala Mirror Holidays.
          </p>
        </div>
      </section>

      {/* Rating Summary Card */}
      <section className="section-padding" style={{ background: '#f8fafc', paddingBottom: '30px' }}>
        <div className="container">
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'center',
              marginBottom: '50px'
            }}
          >
            {/* Overall Score */}
            <div style={{ textAlign: 'center', borderRight: '1px solid #f1f5f9', paddingRight: '20px' }}>
              <div style={{ fontSize: '4.2rem', fontWeight: '900', color: '#0d5c3a', lineHeight: 1 }}>
                {reviewStats.averageRating}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '12px 0 8px', color: '#f59e0b' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={24} />
                ))}
              </div>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>
                Based on <strong>{reviewStats.totalReviews}+</strong> verified reviews
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '4px 12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#059669',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}
              >
                99% Positive Recommendations
              </span>
            </div>

            {/* Rating Breakdown Bars */}
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '14px', fontWeight: '700' }}>
                Rating Distribution
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviewStats.ratingBreakdown[stars] || 0;
                  const pct = Math.round((count / reviewStats.totalReviews) * 100);
                  return (
                    <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem' }}>
                      <span style={{ width: '45px', color: '#475569', fontWeight: '600' }}>{stars} Star</span>
                      <div style={{ flex: 1, height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${pct}%`,
                            height: '100%',
                            background: stars >= 4 ? '#0d5c3a' : '#f59e0b',
                            borderRadius: '4px'
                          }}
                        />
                      </div>
                      <span style={{ width: '40px', textAlign: 'right', color: '#64748b', fontSize: '0.82rem' }}>
                        {pct}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.25rem', color: '#0f172a', margin: 0 }}>
                Traveled with Us Recently?
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0, maxWidth: '280px' }}>
                Share your journey feedback with the Kerala Mirror Holidays community.
              </p>
              <button
                onClick={() => setWriteReviewModalOpen(true)}
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '260px' }}
              >
                Write a Review
              </button>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0 }}>
                Verified Tripunithura, Ernakulam Operator
              </p>
            </div>
          </div>

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
            {reviewCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: selectedCategory === cat ? '2px solid #0d5c3a' : '1px solid #cbd5e1',
                  background: selectedCategory === cat ? '#0d5c3a' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  fontWeight: selectedCategory === cat ? '600' : '500',
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat ? '0 4px 12px rgba(13, 92, 58, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '26px'
            }}
          >
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease'
                }}
              >
                {/* Header: Stars & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} size={18} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '500' }}>
                    {rev.date}
                  </span>
                </div>

                {/* Tour & Vehicle Tag */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: 'rgba(13, 92, 58, 0.08)',
                      color: '#0d5c3a',
                      fontSize: '0.78rem',
                      fontWeight: '600'
                    }}
                  >
                    {rev.tour}
                  </span>
                  {rev.vehicle && (
                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.78rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CarIcon size={12} /> {rev.vehicle}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 style={{ fontSize: '1.08rem', color: '#0f172a', marginBottom: '10px', lineHeight: 1.4, fontWeight: '700' }}>
                  "{rev.title}"
                </h4>

                {/* Review Text */}
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                  {rev.review}
                </p>

                {/* Author Info */}
                <div
                  style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <h5 style={{ margin: 0, fontSize: '0.96rem', color: '#0f172a', fontWeight: '700' }}>
                      {rev.name}
                    </h5>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      {rev.location}
                    </span>
                  </div>
                  {rev.verified && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.8rem', fontWeight: '600' }}>
                      <CheckCircleIcon size={15} />
                      <span>Verified Guest</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Assistance Banner */}
          <div
            style={{
              marginTop: '60px',
              background: 'linear-gradient(135deg, #072316 0%, #0d462c 100%)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '8px', color: '#ffffff' }}>
                Ready to Experience 5-Star Kerala Hospitality?
              </h3>
              <p style={{ color: '#cbd5e1', maxWidth: '640px', fontSize: '0.98rem' }}>
                Book your dream holiday with Kerala Mirror Holidays. Clean fleet, courteous chauffeurs, and 24/7 dedicated travel support.
              </p>
              <p style={{ color: '#f5b041', marginTop: '8px', fontSize: '0.88rem' }}>
                Official Desk: {companyData.email} | {companyData.saneeshEmail}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="btn btn-primary"
              >
                Book Your Tour Now
              </button>
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Hello Kerala Mirror Holidays, I would like to book a tour/cab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Write a Review Modal */}
      {writeReviewModalOpen && (
        <div className="modal-backdrop" onClick={() => setWriteReviewModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <button className="modal-close-btn" onClick={() => setWriteReviewModalOpen(false)} aria-label="Close modal">
              <XIcon size={20} />
            </button>

            <div style={{ marginBottom: '20px' }}>
              <span className="section-badge" style={{ marginBottom: '8px' }}>Guest Feedback</span>
              <h3 style={{ fontSize: '1.6rem', color: '#0f172a' }}>Write a Review</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
                Tell us about your experience with Kerala Mirror Holidays.
              </p>
            </div>

            {submittedMessage ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ color: '#059669', marginBottom: '14px' }}>
                  <CheckCircleIcon size={52} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
                  Thank You for Your Review!
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                  Your feedback helps fellow travelers discover the beauty of Kerala.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">City / Country</label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmedabad / UAE"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rating *</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="form-select"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3 - Good)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Tour / Service Booked</label>
                  <input
                    type="text"
                    placeholder="e.g. Munnar Honeymoon / Fortuner Rental / Rameshwaram Tour"
                    value={newReview.tour}
                    onChange={(e) => setNewReview({ ...newReview, tour: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Review Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Highly recommend! Friendly driver & clean car"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Detailed Review *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share how your trip went, vehicle cleanliness, driver behavior, etc..."
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Publish Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />
      <FloatingWhatsApp />
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
