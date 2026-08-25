import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdmissionsModal.css';

const STORAGE_KEY = 'rgukt-adm2026-dismissed';

export default function AdmissionsModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== '1') {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  function dismiss() {
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch { /* */ }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="adm-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="adm-modal-title">
      <div className="adm-modal">
        <button type="button" className="adm-modal-close" aria-label="Close" onClick={dismiss}>×</button>
        <p className="adm-modal-kicker">RGUKT-AP Admissions 2026</p>
        <h2 id="adm-modal-title" className="adm-modal-title">Admissions Status Update</h2>
        <p className="adm-modal-body">
          Regular Admissions for AY 2026–27 are <strong>CLOSED EXCEPT SPORTS QUOTA</strong>. Candidates who applied under Special Category (Sports) should track provisional lists on the admissions portal.
        </p>
        <div className="adm-modal-actions">
          <Link to="/admissions/2026" className="adm-modal-primary" onClick={dismiss}>
            View Admissions 2026 Details
          </Link>
          <button type="button" className="adm-modal-secondary" onClick={dismiss}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
