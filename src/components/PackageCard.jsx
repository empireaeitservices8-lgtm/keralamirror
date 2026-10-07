import { CalendarIcon, CheckCircleIcon, WhatsAppIcon, ArrowUpRightIcon, SparklesIcon } from './Icons';
import { companyData } from '@/data/companyData';

export default function PackageCard({ pkg, onBook }) {
  const waUrl = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(
    `Hello Kerala Mirror Holidays! I am interested in booking the "${pkg.title}" (${pkg.duration}). Please send me the complete day-wise itinerary and quote.`
  )}`;

  return (
    <div className="package-card">
      {/* Real Scenic Kerala Photo Header */}
      {pkg.image ? (
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <img
            src={pkg.image}
            alt={pkg.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          />
          <span className="package-badge" style={{ position: 'absolute', top: '14px', right: '14px' }}>
            {pkg.badge}
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(7, 35, 22, 0.95) 0%, rgba(7, 35, 22, 0.4) 65%, transparent 100%)',
              padding: '28px 20px 12px',
              color: '#ffffff'
            }}
          >
            <div className="package-duration" style={{ marginBottom: '6px' }}>
              <CalendarIcon size={13} />
              <span>{pkg.duration}</span>
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', lineHeight: '1.25' }}>{pkg.title}</h3>
          </div>
        </div>
      ) : (
        <div className="package-header" style={{ background: pkg.gradient }}>
          <span className="package-badge">{pkg.badge}</span>
          <div className="package-duration">
            <CalendarIcon size={14} />
            <span>{pkg.duration}</span>
          </div>
          <h3 className="package-title">{pkg.title}</h3>
        </div>
      )}

      <div className="package-body">
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
