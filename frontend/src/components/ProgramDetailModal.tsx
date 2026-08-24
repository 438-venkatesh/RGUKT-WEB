import { useEffect, type FC } from 'react';
import { X, CheckCircle, Award, Compass, BookOpen } from 'lucide-react';
import type { UGProgram } from '../data/undergraduatePrograms';
import type { PGProgram } from '../data/postgraduatePrograms';
import './ProgramDetailModal.css';

interface ProgramDetailModalProps {
  program: UGProgram | PGProgram | null;
  type: 'UG' | 'PG';
  onClose: () => void;
}

export const ProgramDetailModal: FC<ProgramDetailModalProps> = ({
  program,
  type,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  const isUG = type === 'UG';
  const ugProg = isUG ? (program as UGProgram) : null;
  const pgProg = !isUG ? (program as PGProgram) : null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">
              {isUG ? `B.Tech Specialisation • ${ugProg?.code}` : `Postgraduate • ${pgProg?.degree}`}
            </span>
            <h2 className="modal-title">{isUG ? ugProg?.name : pgProg?.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Banner Image */}
          <div className="modal-banner">
            <img
              src={program.image}
              alt={isUG ? ugProg?.name : pgProg?.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/gallery/gallery-7.jpg';
              }}
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="modal-section-title">
              <BookOpen size={16} color="#C8102E" />
              <span>Academic Overview</span>
            </h3>
            <p className="modal-desc">{program.fullDescription}</p>
          </div>

          {/* PG specific Research & Industry Focus */}
          {pgProg && (
            <div className="modal-list-box" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
              <h3 className="modal-section-title" style={{ color: '#15803D' }}>
                <Compass size={16} color="#15803D" />
                <span>Research &amp; Industry Thrust</span>
              </h3>
              <p className="modal-desc" style={{ color: '#166534' }}>
                {pgProg.researchAndIndustryFocus}
              </p>
            </div>
          )}

          {/* Dual Columns: Key Areas / Curriculum & Career Paths */}
          <div className="modal-grid-2">
            <div className="modal-list-box">
              <h3 className="modal-section-title">
                <CheckCircle size={16} color="#C8102E" />
                <span>{isUG ? 'Key Curricular Domains' : 'Core Skills Developed'}</span>
              </h3>
              <ul className="modal-list">
                {(isUG ? ugProg?.keyAreas : pgProg?.keySkillsDeveloped)?.map((item, idx) => (
                  <li key={idx} className="modal-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-list-box">
              <h3 className="modal-section-title">
                <Award size={16} color="#C8102E" />
                <span>Career Trajectories</span>
              </h3>
              <ul className="modal-list">
                {(isUG ? ugProg?.careerDirections : pgProg?.careerTrajectories)?.map((item, idx) => (
                  <li key={idx} className="modal-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Computational / Lab Infrastructure */}
          <div className="modal-list-box">
            <h3 className="modal-section-title">
              <span>{isUG ? 'Laboratory Infrastructure' : 'Computational Tools & Platforms'}</span>
            </h3>
            <div className="modal-campus-tags">
              {(isUG ? ugProg?.laboratoryInfrastructure : pgProg?.computationalTools)?.map(
                (tool, idx) => (
                  <span
                    key={idx}
                    className="modal-campus-tag"
                    style={{ background: '#EEF2FF', color: '#4338CA' }}
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Campus Availability */}
          <div>
            <h3 className="modal-section-title">
              <span>Verified Constituent Campus Availability</span>
            </h3>
            <div className="modal-campus-tags">
              <span
                className={`modal-campus-tag ${
                  program.campusAvailability.nuzvid ? 'available' : 'not-available'
                }`}
              >
                Nuzvid Campus {program.campusAvailability.nuzvid ? '✓' : '—'}
              </span>
              <span
                className={`modal-campus-tag ${
                  program.campusAvailability.rkValley ? 'available' : 'not-available'
                }`}
              >
                RK Valley Campus {program.campusAvailability.rkValley ? '✓' : '—'}
              </span>
              <span
                className={`modal-campus-tag ${
                  program.campusAvailability.srikakulam ? 'available' : 'not-available'
                }`}
              >
                Srikakulam Campus {program.campusAvailability.srikakulam ? '✓' : '—'}
              </span>
              <span
                className={`modal-campus-tag ${
                  program.campusAvailability.ongole ? 'available' : 'not-available'
                }`}
              >
                Ongole Campus {program.campusAvailability.ongole ? '✓' : '—'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            className="doc-glass-btn-secondary"
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            Close Details
          </button>
          <a
            href={isUG ? '/admissions/2026' : 'https://admissions.rgukt.in'}
            target={isUG ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="modal-cta-btn"
          >
            {isUG ? 'UG Admissions 2026 →' : 'PG Admissions Portal ↗'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;
