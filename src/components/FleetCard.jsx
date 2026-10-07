import { UsersIcon, LuggageIcon, CheckCircleIcon, ArrowUpRightIcon, CarIcon } from './Icons';

export default function FleetCard({ car, onBook }) {

  return (
    <div className="fleet-card">
      {/* Visual Slot */}
      <div className="fleet-img-slot" style={{ padding: 0, height: '220px', background: '#0b1912' }}>
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', padding: '16px' }}>
            <div className="fleet-car-icon">
              <CarIcon size={52} />
            </div>
          </div>
        )}
      </div>

      <div className="fleet-body">
        <span className="fleet-cat-label">{car.category}</span>
        <h3 className="fleet-name">{car.name}</h3>

        {/* Specifications */}
        <div className="fleet-specs-grid">
          <div className="spec-item">
            <span>Capacity</span>
            <span>{car.seats}</span>
          </div>
          <div className="spec-item">
            <span>Luggage</span>
            <span>{car.luggage}</span>
          </div>
          <div className="spec-item">
            <span>Air Cond.</span>
            <span>{car.ac ? 'Yes (AC)' : 'Non-AC'}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="fleet-highlights">
          {car.highlights.slice(0, 3).map((hl, i) => (
            <li key={i}>
              <CheckCircleIcon size={15} style={{ color: '#0d5c3a', flexShrink: 0 }} />
              <span>{hl}</span>
            </li>
          ))}
        </ul>

        <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '16px', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px' }}>
          <strong>Best For:</strong> {car.suitableFor}
        </div>

        {/* Action Buttons */}
        <div className="fleet-footer">
          <button
            onClick={() => onBook(car)}
            className="btn btn-green btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Book Now</span>
            <ArrowUpRightIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
