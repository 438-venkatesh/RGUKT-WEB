import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Contact.css';

/* ─── Static data ─── */
const CAMPUS_CONTACTS = [
  {
    name:    'Nuzvid Campus',
    address: 'NH-9, Nuzvid, Krishna District, AP 521202',
    phone:   '+91-8656-235092',
    email:   'info@rguktn.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Nuzvid',
  },
  {
    name:    'RK Valley Campus',
    address: 'Idupulapaya, Kadapa District, AP 516330',
    phone:   '+91-8565-249202',
    email:   'info@rguktrkv.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+RK+Valley',
  },
  {
    name:    'Srikakulam Campus',
    address: 'Etcherla, Srikakulam District, AP 532410',
    phone:   '+91-8942-244102',
    email:   'info@rguktsklm.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Srikakulam',
  },
  {
    name:    'Ongole Campus',
    address: 'Vejendla, Prakasam District, AP 523272',
    phone:   '+91-8592-224302',
    email:   'info@rguktong.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Ongole',
  },
];

export default function Contact() {
  const { dark } = useDarkMode();
  const [sent, setSent]         = useState(false);
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [campus, setCampus]     = useState('');
  const [subject, setSubject]   = useState('');
  const [message, setMessage]   = useState('');

  const c = dark ? {
    primary:   '#0B141F',
    accent:    '#E8203C',
    surface:   '#112030',
    bg:        '#0B141F',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
  } : {
    primary:   '#0A2744',
    accent:    '#C8102E',
    surface:   '#FFFFFF',
    bg:        '#F2F5FA',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
  };

  const inputStyle = {
    border:     `1px solid ${c.border}`,
    background: c.surface,
    color:      c.text,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main
      className="contact-page"
      style={{ background: c.bg, color: c.text, fontFamily: 'Inter,system-ui,sans-serif' }}
    >
      <div className="contact-wrap">

        {/* ── Central office card ── */}
        <section
          className="contact-central"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="contact-central-name" style={{ color: c.text }}>
            RGUKT-AP Central Office
          </div>
          <p className="contact-central-detail" style={{ color: c.textMuted }}>
            RGUKT Head Office, Vijayawada, Andhra Pradesh · +91-863-2344700 · info@rgukt.ac.in
          </p>
        </section>

        {/* ── Campus contacts ── */}
        <section className="contact-section">
          <h2 className="contact-h2" style={{ color: c.text }}>Campus Contacts</h2>
          <div className="contact-campus-grid">
            {CAMPUS_CONTACTS.map(cm => (
              <div
                key={cm.name}
                className="contact-campus-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="contact-campus-name" style={{ color: c.text }}>
                  {cm.name}
                </div>
                <div className="contact-campus-info" style={{ color: c.textMuted }}>
                  {cm.address}<br />
                  {cm.phone}<br />
                  {cm.email}
                </div>
                <a
                  href={cm.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-maps-link"
                  style={{ color: c.primary }}
                >
                  View on Google Maps →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── General enquiry form ── */}
        <section
          className="contact-form-section"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <h2 className="contact-h2" style={{ color: c.text }}>General Enquiry</h2>
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* Row 1: Name + Email */}
            <input
              required
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="contact-input"
              style={inputStyle}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="contact-input"
              style={inputStyle}
            />

            {/* Row 2: Phone + Campus */}
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="contact-input"
              style={inputStyle}
            />
            <select
              value={campus}
              onChange={e => setCampus(e.target.value)}
              className="contact-select"
              style={inputStyle}
            >
              <option value="">Select Campus</option>
              <option>Nuzvid</option>
              <option>RK Valley</option>
              <option>Srikakulam</option>
              <option>Ongole</option>
            </select>

            {/* Full-width: Subject */}
            <input
              placeholder="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="contact-input contact-input--full"
              style={inputStyle}
            />

            {/* Full-width: Message */}
            <textarea
              placeholder="Message"
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="contact-textarea"
              style={inputStyle}
            />

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit-btn"
              style={{ background: c.primary }}
            >
              Send Message
            </button>

            {/* Success */}
            {sent && (
              <p className="contact-sent-msg" style={{ color: c.accent }}>
                Thanks — your message has been sent.
              </p>
            )}
          </form>
        </section>

      </div>
    </main>
  );
}
