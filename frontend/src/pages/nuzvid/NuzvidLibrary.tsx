import { useLocation } from 'react-router-dom';
import {
  BookOpen,
  Search,
  ExternalLink,
  Wifi,
  Printer,
  Droplets,
  Layers,
  Building,
  Laptop,
  Unlock,
  Award,
  Sparkles,
  Clock,
  Users,
  UserCheck,
  Cpu,
  Globe,
  Microscope,
  FileText,
  Compass,
  Newspaper,
  MessagesSquare,
  Armchair,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Database,
  CheckCircle2,
} from 'lucide-react';
import {
  LIBRARY_OBJECTIVES,
  LIBRARY_FACILITIES,
  E_RESOURCES,
  CONTENT_DOMAIN_LINKS,
  OPAC_CONFIG,
  FLOOR_PLANS,
  GENERAL_RULES,
  CIRCULATION_TIMINGS,
  CIRCULATION_RULES,
  CIRCULATION_POLICIES,
  LIBRARY_STAFF,
  LIBRARY_CONTACT,
} from '../../data/libraryData';
import './NuzvidLibrary.css';

interface NuzvidLibraryProps {
  section?: string;
}

export default function NuzvidLibrary({ section }: NuzvidLibraryProps) {
  const location = useLocation();

  // Determine section from props or pathname
  let currentSection = section || 'home';
  const path = location.pathname.toLowerCase();

  if (path.includes('circulation')) currentSection = 'circulation';
  else if (path.includes('opac')) currentSection = 'opac';
  else if (path.includes('facilities')) currentSection = 'facilities';
  else if (path.includes('floorwise') || path.includes('floor-plan')) currentSection = 'floorwise-plan';
  else if (path.includes('general-rules') || path.includes('rules')) currentSection = 'general-rules';
  else if (path.includes('staff-details') || path.includes('staff')) currentSection = 'staff-details';
  else if (path.includes('contact-us') || path.includes('contact')) currentSection = 'contact-us';
  else if (path.includes('rgukt-content') || path.includes('content-domain')) currentSection = 'rgukt-content';

  return (
    <div className="nzlib-page">
      <div className="nzlib-container">

        {/* ════════════════════════════════════════════════════════════
            1. LIBRARY HOME / OVERVIEW
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'home' && (
          <div>
            {/* Breadcrumb */}
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Library Home</span>
            </div>

            {/* Intro Header */}
            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">University Library</h1>
              <p className="nzlib-sec-desc">
                The Central Library of Rajiv Gandhi University of Knowledge Technologies, Nuzvid Campus.
              </p>
            </div>

            {/* Intro Section: Text Left, Image Right */}
            <div className="nzlib-intro-card">
              <div className="nzlib-intro-left">
                <div className="nzlib-intro-badge">
                  <Sparkles size={14} />
                  <span>Central Library Portal</span>
                </div>
                <h2 className="nzlib-intro-heading">Welcome to RGUKT Nuzvid Central Library</h2>

                <ul className="nzlib-bullets-list">
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>The Central Library supports the teaching and research programmes of the Institute.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>It provides facilities for general reading and disseminates information according to user requirements.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>The Library is housed in a separate building with a plinth area of <strong>85,289 Sq. ft.</strong></span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>It provides access to knowledge through electronic resources and printed copies.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>The Library is developed to meet the needs of students and faculty.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>Students have open access to the Library to make use of books.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>Online resources are also produced by RGUKT to serve the needs of students.</span>
                  </li>
                  <li className="nzlib-bullet-item">
                    <span className="nzlib-bullet-icon">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>Video Recordings are prepared in well-established studios within RGUKT.</span>
                  </li>
                </ul>
              </div>

              <div className="nzlib-intro-right">
                <div className="nzlib-img-frame">
                  <img
                    src="/gallery/nuzvid-library-intro.jpeg"
                    alt="Central Library RGUKT Nuzvid"
                    className="nzlib-img-element"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="nzlib-img-caption">
                    Central Library • RGUKT Nuzvid (85,289 Sq. Ft.)
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="nzlib-sec-block-header">
              <h3 className="nzlib-sec-block-title">Objectives of Library</h3>
              <p className="nzlib-sec-block-sub">
                Official institutional objectives guiding collection development, academic enrichment, and study culture.
              </p>
            </div>

            <div className="nzlib-obj-grid">
              {LIBRARY_OBJECTIVES.map((obj, idx) => (
                <div key={idx} className={`nzlib-obj-box grad-${idx % 4}`}>
                  <div className="nzlib-obj-icon">
                    {obj.icon === 'award' && <Award size={20} />}
                    {obj.icon === 'book-open' && <BookOpen size={20} />}
                    {obj.icon === 'sparkles' && <Sparkles size={20} />}
                    {obj.icon === 'clock' && <Clock size={20} />}
                    {obj.icon === 'users' && <Users size={20} />}
                    {obj.icon === 'user-check' && <UserCheck size={20} />}
                    {obj.icon === 'cpu' && <Cpu size={20} />}
                    {obj.icon === 'globe' && <Globe size={20} />}
                    {obj.icon === 'microscope' && <Microscope size={20} />}
                  </div>
                  <h4>{obj.title}</h4>
                  <p>{obj.detail}</p>
                </div>
              ))}
            </div>

            {/* E-Resources Section */}
            <div className="nzlib-sec-block-header">
              <h3 className="nzlib-sec-block-title">Digital & E-Resources</h3>
              <p className="nzlib-sec-block-sub">
                Verified electronic repositories, subscribed national courseware, and international peer-reviewed journals.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {E_RESOURCES.map((res, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--lib-surface)',
                    border: '1px solid var(--lib-border)',
                    borderRadius: '10px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--lib-shadow-sm)',
                    backgroundImage: `var(--grad-${['cyan-blue', 'purple-cyan', 'green-cyan', 'pink-purple'][idx % 4]})`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', background: 'rgba(10,39,68,0.08)', color: 'var(--lib-primary)' }}>
                        {res.badge}
                      </span>
                      {res.category === 'journal' && <BookOpen size={16} style={{ color: 'var(--lib-accent)' }} />}
                      {res.category === 'ebook' && <Layers size={16} style={{ color: 'var(--lib-gold)' }} />}
                      {res.category === 'courseware' && <Laptop size={16} style={{ color: 'var(--lib-primary)' }} />}
                      {res.category === 'repository' && <Globe size={16} style={{ color: 'var(--lib-primary)' }} />}
                    </div>
                    <h4 style={{ fontSize: '15.5px', fontWeight: 700, margin: '0 0 4px', color: 'var(--lib-text)' }}>
                      {res.name}
                    </h4>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--lib-text-light)', marginBottom: '8px' }}>
                      {res.provider}
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--lib-text-muted)', lineHeight: '1.5', margin: '0 0 16px' }}>
                      {res.description}
                    </p>
                  </div>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 14px',
                      background: 'var(--lib-surface)',
                      color: 'var(--lib-primary)',
                      border: '1px solid var(--lib-border)',
                      borderRadius: '6px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Access Resource →</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            2. CIRCULATION SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'circulation' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Circulation</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Circulation</h1>
              <p className="nzlib-sec-desc">
                Operating hours, borrowing quotas, book issue and return guidelines, and overdue policy.
              </p>
            </div>

            {/* Operating Hours Cards */}
            <div className="nzlib-hours-grid">
              {CIRCULATION_TIMINGS.map((t, idx) => (
                <div key={idx} className="nzlib-hour-card">
                  <div className="nzlib-hour-days">{t.days}</div>
                  <div className="nzlib-hour-time">{t.timing}</div>
                  <div className="nzlib-hour-note">{t.note}</div>
                </div>
              ))}
            </div>

            {/* Borrowing Quotas Table */}
            <div className="nzlib-table-container">
              <div className="nzlib-table-head">
                <h4>Borrowing Entitlement and Renewal Periods</h4>
              </div>
              <table className="nzlib-data-table">
                <thead>
                  <tr>
                    <th>Member Category</th>
                    <th>Eligible User Group</th>
                    <th>Books Issued</th>
                    <th>1st Renewal (Online)</th>
                    <th>2nd Renewal (In Person)</th>
                  </tr>
                </thead>
                <tbody>
                  {CIRCULATION_RULES.map((r, idx) => (
                    <tr key={idx}>
                      <td><strong>{r.memberCategory}</strong></td>
                      <td>{r.eligibleGroup}</td>
                      <td><strong style={{ color: 'var(--lib-accent)' }}>{r.booksIssued} Books</strong></td>
                      <td>{r.firstRenewalOnline}</td>
                      <td>{r.secondRenewalInPerson}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Circulation Policies */}
            <div className="nzlib-rules-cards-grid">
              {CIRCULATION_POLICIES.map((p, idx) => (
                <div key={idx} className="nzlib-circ-policy-card">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            3. OPAC SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'opac' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">OPAC</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Online Public Access Catalog (OPAC)</h1>
              <p className="nzlib-sec-desc">
                Automated catalog search, live availability, and account services powered by Koha Software.
              </p>
            </div>

            <div className="nzlib-opac-banner">
              <div className="nzlib-opac-banner-left">
                <h3>Koha Integrated Library System</h3>
                <p>
                  The library is fully automated with <strong>Koha Integrated Library Software</strong>.
                  Students and faculty can search the collection by Title, Author, Publisher, Subject Heading,
                  and Keywords.
                </p>
                <div className="nzlib-opac-tags">
                  <div className="nzlib-opac-tag-chip">
                    Campus IP: <strong>{OPAC_CONFIG.internalIp}</strong>
                  </div>
                  <div className="nzlib-opac-tag-chip">
                    Software: <strong>{OPAC_CONFIG.software}</strong>
                  </div>
                  <div className="nzlib-opac-tag-chip">
                    Status: <strong>Open Access & Circulation</strong>
                  </div>
                </div>
              </div>

              <div className="nzlib-opac-banner-right">
                <h4>Campus Live Catalog Portal</h4>
                <p>Directly browse availability, call numbers, and rack locations on the Koha server.</p>
                <a
                  href={OPAC_CONFIG.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nzlib-opac-launch-btn"
                >
                  <Search size={18} />
                  <span>Search Library Catalogue →</span>
                </a>
              </div>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 16px', color: 'var(--lib-text)' }}>
              Catalog Search Criteria Supported in Koha
            </h3>

            <div className="nzlib-search-fields-grid">
              {OPAC_CONFIG.searchFields.map(f => (
                <div key={f.label} className="nzlib-search-field-card">
                  <Database size={22} style={{ color: 'var(--lib-primary)', margin: '0 auto' }} />
                  <h5>Search by {f.label}</h5>
                  <p>{f.placeholder}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            4. FACILITIES SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'facilities' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Facilities</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Library Facilities</h1>
              <p className="nzlib-sec-desc">
                Verified academic infrastructure and support services available in the Central Library.
              </p>
            </div>

            <div className="nzlib-facilities-3col">
              {LIBRARY_FACILITIES.map((fac, idx) => (
                <div key={fac.id} className={`nzlib-fac-box grad-${idx % 4}`}>
                  <div className="nzlib-fac-icon-wrap">
                    {fac.id === 'open-access' && <Unlock size={22} />}
                    {fac.id === 'ict-wifi' && <Wifi size={22} />}
                    {fac.id === 'referencing' && <Search size={22} />}
                    {fac.id === 'photocopy' && <Printer size={22} />}
                    {fac.id === 'furniture' && <Armchair size={22} />}
                    {fac.id === 'amenities' && <Droplets size={22} />}
                    {fac.id === 'discussion-rooms' && <MessagesSquare size={22} />}
                    {fac.id === 'pyq-papers' && <FileText size={22} />}
                    {fac.id === 'career-higher-edu' && <Compass size={22} />}
                    {fac.id === 'newspaper-clippings' && <Newspaper size={22} />}
                  </div>
                  <div className="nzlib-fac-text-block">
                    <h4>{fac.name}</h4>
                    <p>{fac.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            5. FLOOR-WISE DETAILS SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'floorwise-plan' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Floor-Wise Details</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Floor-Wise Details</h1>
              <p className="nzlib-sec-desc">
                Complete directory of the 31 rooms distributed across the 3 floors of the Central Library building.
              </p>
            </div>

            {FLOOR_PLANS.map(floor => (
              <div key={floor.floorId} className="nzlib-floorplan-block">
                <div className="nzlib-floor-card-container">
                  <div className="nzlib-floor-card-header">
                    <h3>{floor.floorName}</h3>
                    <span>{floor.rooms.length} Dedicated Rooms</span>
                  </div>

                  <table className="nzlib-floor-rooms-table">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>S.No</th>
                        <th style={{ width: '120px' }}>Room No</th>
                        <th>Name of the Room / Facility</th>
                        <th style={{ width: '220px' }}>Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {floor.rooms.map(room => (
                        <tr key={room.sNo}>
                          <td>{room.sNo}</td>
                          <td><strong>{room.roomNo}</strong></td>
                          <td>
                            <strong>{room.name}</strong>
                            {room.description && (
                              <div style={{ fontSize: '12.5px', color: 'var(--lib-text-muted)', marginTop: '2px' }}>
                                {room.description}
                              </div>
                            )}
                          </td>
                          <td>
                            <span style={{ fontSize: '12px', padding: '3px 8px', borderRadius: '4px', background: 'var(--lib-surface-alt)', border: '1px solid var(--lib-border)' }}>
                              {room.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            6. GENERAL RULES SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'general-rules' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">General Rules</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">General Rules & Guidelines</h1>
              <p className="nzlib-sec-desc">
                Official code of conduct established by RGUKT Nuzvid to maintain an academic atmosphere.
              </p>
            </div>

            <div className="nzlib-rules-numbered-list">
              {GENERAL_RULES.map((rule, idx) => (
                <div key={idx} className="nzlib-numbered-rule-card">
                  <div className="nzlib-num-badge">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            7. STAFF DETAILS SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'staff-details' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Staff Details</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Library Staff Details</h1>
              <p className="nzlib-sec-desc">
                Official administration and management staff of the Central Library.
              </p>
            </div>

            <div className="nzlib-staff-cards-grid">
              {LIBRARY_STAFF.map(member => (
                <div key={member.sNo} className="nzlib-staff-member-box">
                  <div className="nzlib-staff-avatar-circle">
                    {member.name.charAt(0)}
                  </div>
                  <div className="nzlib-staff-info-col">
                    <h4>{member.name}</h4>
                    <div className="nzlib-staff-desig-tag">{member.designation}</div>
                    <p className="nzlib-staff-desc-text">{member.roleDescription}</p>
                    {member.phone && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--lib-primary)' }}>
                        <Phone size={13} />
                        <span>Phone: {member.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            8. CONTACT US SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'contact-us' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">Contact Us</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">Contact Us</h1>
              <p className="nzlib-sec-desc">
                Communication details and location map of the Central Library.
              </p>
            </div>

            <div className="nzlib-contact-full-layout">
              <div className="nzlib-contact-card-box">
                <h3>Library Administration Office</h3>
                <div className="nzlib-contact-field-row">
                  <Building size={18} />
                  <div>
                    <strong>{LIBRARY_CONTACT.building}</strong>
                    <br />
                    {LIBRARY_CONTACT.campus}
                  </div>
                </div>
                <div className="nzlib-contact-field-row">
                  <MapPin size={18} />
                  <div>{LIBRARY_CONTACT.address}</div>
                </div>
                <div className="nzlib-contact-field-row">
                  <Phone size={18} />
                  <div>{LIBRARY_CONTACT.phone}</div>
                </div>
                <div className="nzlib-contact-field-row">
                  <Mail size={18} />
                  <div>
                    <a href={`mailto:${LIBRARY_CONTACT.email}`} style={{ color: 'var(--lib-accent)', textDecoration: 'none', fontWeight: 600 }}>
                      {LIBRARY_CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="nzlib-contact-field-row">
                  <Globe size={18} />
                  <div>
                    <a href={LIBRARY_CONTACT.officialWeb} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lib-primary)', textDecoration: 'underline', fontWeight: 600 }}>
                      Official Website: rguktn.ac.in/library/
                    </a>
                  </div>
                </div>
              </div>

              <div className="nzlib-map-container">
                <iframe
                  title="RGUKT Nuzvid Central Library Map"
                  src={LIBRARY_CONTACT.mapEmbedUrl}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            9. RGUKT CONTENT DOMAIN SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'rgukt-content' && (
          <div>
            <div className="nzlib-breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Library</span>
              <ChevronRight size={12} />
              <span className="current">RGUKT Content Domain</span>
            </div>

            <div className="nzlib-header-box">
              <h1 className="nzlib-sec-title">RGUKT Content Domain</h1>
              <p className="nzlib-sec-desc">
                Engineering year-wise digital content, lecture notes, and video modules hosted on the campus intranet.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {CONTENT_DOMAIN_LINKS.map((item, idx) => (
                <div
                  key={item.sNo}
                  style={{
                    background: 'var(--lib-surface)',
                    border: '1px solid var(--lib-border)',
                    borderRadius: '10px',
                    padding: '24px',
                    boxShadow: 'var(--lib-shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundImage: `var(--grad-${['cyan-blue', 'purple-cyan', 'green-cyan', 'pink-purple'][idx % 4]})`,
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', background: 'var(--lib-primary)', color: '#FFFFFF', display: 'inline-block', marginBottom: '12px' }}>
                      {item.year}
                    </span>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', color: 'var(--lib-text)' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--lib-text-muted)', lineHeight: '1.55', margin: '0 0 20px' }}>{item.desc}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 16px',
                      background: 'var(--lib-surface)',
                      color: 'var(--lib-primary)',
                      border: '1px solid var(--lib-border)',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Access Content ({item.code}) →</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
