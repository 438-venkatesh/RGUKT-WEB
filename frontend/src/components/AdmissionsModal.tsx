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
        <p className="adm-modal-kicker">RGUKT-AP Admissions</p>
        <h2 id="adm-modal-title" className="adm-modal-title">UG Admissions 2026</h2>
        <p className="adm-modal-body">
          Applications are now open for the six-year integrated B.Tech programme for rural SSC graduates of Andhra Pradesh.
        </p>
        <div className="adm-modal-actions">
          <Link to="/admissions/2026" className="adm-modal-primary" onClick={dismiss}>
            Go to Admissions 2026 Page
          </Link>
          <button type="button" className="adm-modal-secondary" onClick={dismiss}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
