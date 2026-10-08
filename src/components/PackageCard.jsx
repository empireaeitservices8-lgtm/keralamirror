import { CalendarIcon, CheckCircleIcon, WhatsAppIcon, ArrowUpRightIcon, SparklesIcon } from './Icons';
import { companyData } from '@/data/companyData';

export default function PackageCard({ pkg, onBook }) {
  const waUrl = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(
    `Hello Kerala Mirror Holidays! I am interested in booking the "${pkg.title}" (${pkg.duration}). Please send me the complete day-wise itinerary and quote.`
  )}`;

  return (
    <div className="package-card">
      {/* Real Scenic Kerala Photo Header - Clean without text overlay */}
      {pkg.image && (
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <img
            src={pkg.image}
            alt={pkg.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          />
        </div>
      )}

      <div className="package-body">
        {/* Header Details in Body */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <div style={{ color: '#0d5c3a', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
              <CalendarIcon size={14} />
              <span>{pkg.duration}</span>
            </div>
            {pkg.badge && (
              <span className="package-badge" style={{ position: 'static' }}>
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 style={{ color: '#0f172a', fontSize: '1.25rem', lineHeight: '1.3', margin: 0, fontWeight: '700' }}>
            {pkg.title}
          </h3>
        </div>
        {/* Destinations */}
        <div style={{ marginBottom: '14px' }}>
          <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#64748b', display: 'block', marginBottom: '6px' }}>
            Destinations Covered:
          </span>
          <div className="package-destinations">
            {pkg.destinations.map((dest, i) => (
              <span key={i} className="dest-pill">
                {dest}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <ul className="package-highlights">
          {pkg.highlights.slice(0, 3).map((hl, i) => (
            <li key={i}>
              <SparklesIcon size={15} style={{ color: '#d49a37', flexShrink: 0, marginTop: '2px' }} />
              <span>{hl}</span>
            </li>
          ))}
        </ul>

        {/* Inclusions summary */}
        <div className="package-inclusions">
          <div className="inclusions-title">Package Inclusions:</div>
          <div className="inclusions-list">
            {pkg.inclusions.map((inc, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircleIcon size={12} style={{ color: '#0d5c3a' }} />
                {inc}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <button
            onClick={() => onBook(pkg)}
            className="btn btn-green btn-sm"
            style={{ width: '100%' }}
          >
            <span>Book Package</span>
            <ArrowUpRightIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
