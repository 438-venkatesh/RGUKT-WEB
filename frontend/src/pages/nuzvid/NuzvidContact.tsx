import { useState, useRef } from 'react';
import './NuzvidContact.css';

/* ─────────── data ─────────── */
const DEPTS = [
  { name: 'CSE',        hod: 'Dr. R Kiran',   phone: '+91-8656-235201', email: 'hod.cse@rguktn.ac.in'  },
  { name: 'ECE',        hod: 'Dr. S Naidu',   phone: '+91-8656-235202', email: 'hod.ece@rguktn.ac.in'  },
  { name: 'EEE',        hod: 'Dr. V Prasad',  phone: '+91-8656-235203', email: 'hod.eee@rguktn.ac.in'  },
  { name: 'Mechanical', hod: 'Dr. G Rao',     phone: '+91-8656-235204', email: 'hod.mech@rguktn.ac.in' },
  { name: 'Civil',      hod: 'Dr. T Reddy',   phone: '+91-8656-235205', email: 'hod.civil@rguktn.ac.in'},
  { name: 'Chemical',   hod: 'Dr. M Sarma',   phone: '+91-8656-235206', email: 'hod.chem@rguktn.ac.in' },
  { name: 'MME',        hod: 'Dr. A Devi',    phone: '+91-8656-235207', email: 'hod.mme@rguktn.ac.in'  },
];

const EMERGENCY = [
  { label: 'Hostel Warden',  phone: '+91-8656-235111' },
  { label: 'Medical Center', phone: '+91-8656-235122' },
  { label: 'Security',       phone: '+91-8656-235133' },
];

/* ─────────── component ─────────── */
export default function NuzvidContact() {
  const [sent,     setSent]     = useState(false);
  const [openDept, setOpenDept] = useState<number | null>(null);

  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const phoneRef   = useRef<HTMLInputElement>(null);
  const roleRef    = useRef<HTMLSelectElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef     = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="nzc-root">
      <div className="nzc-inner">
        <h1 className="nzc-h1">Contact Us</h1>

        {/* ── Address + Map / Contact form ── */}
        <div className="nzc-top-grid">

          {/* Left column */}
          <div>
            <div className="nzc-address-card">
              <div className="nzc-address-name">RGUKT Nuzvid</div>
              <p className="nzc-address-text">
                NH-9, Nuzvid, Krishna District,<br />
                Andhra Pradesh 521202
              </p>
              <p className="nzc-address-text">
                +91-8656-235092<br />
                info@rguktn.ac.in
              </p>
            </div>
            <div className="nzc-map-placeholder">
              <MapPinIcon />
              <span className="nzc-map-label">Google Maps — RGUKT Nuzvid</span>
            </div>
          </div>

          {/* Right column — form */}
          <form className="nzc-form" onSubmit={handleSubmit} noValidate>
            <div className="nzc-row-2">
              <div className="nzc-field">
                <label className="nzc-lbl">Full Name</label>
                <input ref={nameRef} required type="text" className="nzc-inp" />
              </div>
              <div className="nzc-field">
                <label className="nzc-lbl">Email</label>
                <input ref={emailRef} required type="email" className="nzc-inp" />
              </div>
            </div>
            <div className="nzc-row-2">
              <div className="nzc-field">
                <label className="nzc-lbl">Phone</label>
                <input ref={phoneRef} type="tel" className="nzc-inp" />
              </div>
              <div className="nzc-field">
                <label className="nzc-lbl">I am a</label>
                <select ref={roleRef} className="nzc-sel">
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Company</option>
                  <option>Media</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="nzc-field">
              <label className="nzc-lbl">Subject</label>
              <input ref={subjectRef} type="text" className="nzc-inp" />
            </div>
            <div className="nzc-field">
              <label className="nzc-lbl">Message</label>
              <textarea ref={msgRef} rows={4} className="nzc-textarea" />
            </div>
            <button type="submit" className="nzc-btn-submit">Send Message</button>
            {sent && (
              <p className="nzc-sent-msg">Thanks — your message has been sent.</p>
            )}
          </form>
        </div>

        {/* ── Department Directory ── */}
        <section className="nzc-section">
          <h2 className="nzc-h2">Department Directory</h2>
          <div className="nzc-accord">
            {DEPTS.map((d, i) => (
              <div key={d.name} className="nzc-dept">
                <button
                  className="nzc-dept-hd"
                  aria-expanded={openDept === i}
                  onClick={() => setOpenDept(o => o === i ? null : i)}
                >
                  <span>{d.name}</span>
                  <span className="nzc-chevron">{openDept === i ? '−' : '+'}</span>
                </button>
                {openDept === i && (
                  <div className="nzc-dept-body">
                    HOD: {d.hod} · {d.phone} · <a href={`mailto:${d.email}`} className="nzc-email-link">{d.email}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Emergency Contacts ── */}
        <section className="nzc-section">
          <h2 className="nzc-h2">Emergency Contacts</h2>
          <div className="nzc-emergency-wrap">
            <table className="nzc-emergency">
              <tbody>
                {EMERGENCY.map((e, i) => (
                  <tr key={e.label} className={i % 2 === 0 ? 'nzc-em-even' : 'nzc-em-odd'}>
                    <td className="nzc-em-label">{e.label}</td>
                    <td className="nzc-em-phone">{e.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
      stroke="#1565C0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
      <circle cx={12} cy={10} r={3} />
    </svg>
  );
}
