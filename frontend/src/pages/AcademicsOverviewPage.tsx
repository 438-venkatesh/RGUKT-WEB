import { Link } from "react-router-dom";
import AcademicsSubLayout, {
  useAcademicsTheme,
} from "../components/AcademicsSubLayout";
import { ACADEMICS_NAV } from "../data/academicsContent";
import "./AcademicsOverviewPage.css";

export default function AcademicsOverviewPage() {
  const c = useAcademicsTheme();

  return (
    <AcademicsSubLayout>
      <div className="acad-ov-container">
        {/* 1. HERO SECTION (SEPARATE IMAGE FIRST, THEN GRADIENT CONTENT BELOW) */}
        <section className="acad-ov-hero-container">
          <div
            className="acad-ov-hero-banner"
            style={{ border: `1px solid ${c.border}` }}
          >
            <img
              src="/gallery/nuzvid-campus-hero.jpg"
              alt="RGUKT-AP Campus"
              className="acad-ov-hero-banner-img"
            />
          </div>
          <div
            className="acad-ov-hero-card"
            style={{ border: `1px solid ${c.border}` }}
          >
            <span className="acad-ov-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="acad-ov-hero-title">Academics at RGUKT-AP</h1>
            <p className="acad-ov-hero-tagline">
              Knowledge • Innovation • Excellence
            </p>
            <p className="acad-ov-hero-desc">
              Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
              (RGUKT-AP) is a premier state university dedicated to nurturing
              talent and empowering youth through world-class technical
              education. Our holistic curriculum integrates foundational
              science, cutting‑edge engineering, soft skills, and
              multidisciplinary research.
            </p>
            <div className="acad-ov-quick-links">
              <span
                className="acad-ov-quick-label"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Academic Quick Resources:
              </span>
              <div className="acad-ov-quick-chips">
                {ACADEMICS_NAV.filter((i) => i.href !== "/academics")
                  .slice(0, 8)
                  .map((nav) => (
                    <Link
                      key={nav.href}
                      to={nav.href}
                      className="acad-ov-chip"
                     
                    >
                      {nav.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. FOUNDATION & ACADEMIC VISION */}
        <section className="acad-ov-section">
          <div className="acad-ov-section-header">
            <span className="acad-ov-subheading">Core Pillars</span>
            <h2 className="acad-ov-heading" style={{ color: c.text }}>
              Foundation &amp; Academic Vision
            </h2>
            <p className="acad-ov-intro" style={{ color: c.textMuted }}>
              Key highlights of RGUKT-AP's unique educational model and guiding
              academic vision:
            </p>
          </div>
          <div className="acad-ov-grid-4">
            {[
              {
                icon: "🎓",
                title: "Nurturing Talent & Innovation",
                text: "RGUKT‑AP is a premier state university dedicated to imparting high‑quality technical education to talented youth.",
              },
              {
                icon: "📚",
                title: "Holistic Integrated Curriculum",
                text: "Our 6‑year integrated curriculum seamlessly combines foundational sciences, engineering mastery, soft skills (~30% time allocation), liberal arts, and physical training for balanced growth.",
              },
              {
                icon: "💡",
                title: "Learning‑by‑Doing & Mentorship",
                text: "Driven by an experiential learning‑by‑doing paradigm, personalized mentor‑led class discussions, individual student desk laptops from 1st year, and interdisciplinary research opportunities.",
              },
              {
                icon: "🔬",
                title: "Research‑Oriented Culture",
                text: "Active peer‑reviewed research, modern laboratories, and interdisciplinary investigation across thrust areas.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="acad-ov-card"
                style={{ border: `1px solid ${c.border}` }}
              >
                <div
                  className="acad-ov-card-icon"
                  style={{ background: "rgba(200,16,46,0.1)", color: c.accent }}
                >
                  {card.icon}
                </div>
                <h3 className="acad-ov-card-title" style={{ color: c.text }}>
                  {card.title}
                </h3>
                <p className="acad-ov-card-text" style={{ color: c.textMuted }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ACADEMIC FRAMEWORK (DISTINCT STEPPED PATHWAY UI) */}
        <section className="acad-ov-section">
          <div className="acad-ov-section-header">
            <span className="acad-ov-subheading">System Architecture</span>
            <h2 className="acad-ov-heading" style={{ color: c.text }}>
              Academic Framework
            </h2>
            <p className="acad-ov-intro" style={{ color: c.textMuted }}>
              A structured, autonomous, and transparent educational pathway
              designed for global compatibility, rigorous instruction, and
              continuous student progress.
            </p>
          </div>
          <div className="acad-ov-framework-grid">
            {[
              {
                step: "01",
                icon: "🏛️",
                title: "Department‑Centered Learning",
                text: "Academic departments and research centres drive specialised teaching, lab development, and domain‑specific interdisciplinary collaboration across engineering and basic sciences.",
              },

              {
                step: "02",
                icon: "📅 📝 ",
                title: "Semester‑Based Education & Continuous Evaluation",
                text: "Structured semester pattern comprising a minimum of 70 instructional days per semester and Ongoing internal assessments, mid‑term examinations, quizzes, and laboratory evaluations conducted by faculty members ",
              },

              {
                step: "03",
                icon: "🌐",
                title: "English as Medium of Instruction",
                text: "All technical, scientific, and professional coursework is delivered in English, preparing students for higher studies, global research, and competitive industry careers.",
              },
            ].map((f) => (
              <div
                key={f.step}
                className="acad-ov-framework-card"
                style={{ border: `1px solid ${c.border}` }}
              >
                <div className="acad-ov-framework-header">
                  <span
                    className="acad-ov-framework-step"
                    style={{
                      background: "rgba(200,16,46,0.12)",
                      color: c.accent,
                    }}
                  >
                    {f.step}
                  </span>
                  <span className="acad-ov-framework-icon">{f.icon}</span>
                </div>
                <h3
                  className="acad-ov-card-title"
                  style={{ color: c.text, fontSize: 16 }}
                >
                  {f.title}
                </h3>
                <p className="acad-ov-card-text" style={{ color: c.textMuted }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RESEARCH & INNOVATION */}
        <section className="acad-ov-section">
          <div className="acad-ov-split-row">
            <div
              className="acad-ov-split-media"
              style={{ border: `1px solid ${c.border}` }}
            >
              <img
                src="/gallery/research-lab-17.jpg"
                alt="RGUKT Research Laboratory"
                className="acad-ov-split-img"
              />
              <div
                className="acad-ov-img-caption"
                style={{ background: c.surface2, color: c.textMuted }}
              >
                RGUKT-AP Advanced Computing &amp; Electronics Research
                Laboratories
              </div>
            </div>
            <div className="acad-ov-split-content">
              <span className="acad-ov-subheading">
                Discovery &amp; Inquiry
              </span>
              <h2 className="acad-ov-heading" style={{ color: c.text }}>
                Research &amp; Innovation
              </h2>
              <p className="acad-ov-intro" style={{ color: c.textMuted }}>
                Research is a dynamic and integral pillar of the academic
                ecosystem at RGUKT‑AP.
              </p>
              <div className="acad-ov-bullets">
                {[
                  {
                    title: "Student Research",
                    text: "Active involvement of undergraduate and postgraduate students in faculty‑guided research projects, capstone prototypes, and technical publications.",
                  },
                  {
                    title: "Faculty Research",
                    text: "High‑impact research published in peer‑reviewed journals across thrust areas including Nanotechnology, Energy Systems, AI, IT Security, and Materials Science.",
                  },
                ].map((b) => (
                  <div key={b.title} className="acad-ov-bullet-item">
                    <span
                      className="acad-ov-bullet-dot"
                      style={{ background: c.accent }}
                    />
                    <div>
                      <h4
                        className="acad-ov-bullet-title"
                        style={{ color: c.text }}
                      >
                        {b.title}
                      </h4>
                      <p
                        className="acad-ov-bullet-text"
                        style={{ color: c.textMuted }}
                      >
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CURRICULUM & ACADEMIC DEVELOPMENT */}
        <section className="acad-ov-section">
          <div className="acad-ov-section-header">
            <span className="acad-ov-subheading">Holistic Development</span>
            <h2 className="acad-ov-heading" style={{ color: c.text }}>
              Curriculum &amp; Academic Development
            </h2>
            <p className="acad-ov-intro" style={{ color: c.textMuted }}>
              Our curriculum balances rigorous technical training with
              comprehensive personal and professional development.
            </p>
          </div>
          <div className="acad-ov-grid-4">
            {[
              {
                title: "Rigorous Academic Training",
                text: "Structured multi‑year curriculum designed to build solid mastery in core engineering subjects, mathematics, basic sciences, and elective tracks.",
              },
              {
                title: "Conceptual Understanding",
                text: "Emphasis on deep conceptual understanding complemented by immediate application in tutorial sessions, laboratory work, and design exercises.",
              },
              {
                title: "Academic + Co‑Curricular Balance",
                text: "Harmonious blend allocating ~30% time to soft skills, physical training, sports, humanities, and social sciences to foster holistic development.",
              },
              {
                title: "Professional & Personal Development",
                text: "Nurturing confident, ethical, and energetic professionals equipped with communication, teamwork, leadership, and lifelong learning capabilities.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="acad-ov-card"
                style={{ border: `1px solid ${c.border}` }}
              >
                <h3 className="acad-ov-card-title" style={{ color: c.text }}>
                  {card.title}
                </h3>
                <p className="acad-ov-card-text" style={{ color: c.textMuted }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. LEARNING BEYOND THE CLASSROOM (DUAL IMAGES ON THE RIGHT) */}
        <section className="acad-ov-section">
          <div className="acad-ov-split-row acad-ov-split-row--reverse">
            <div
              className="acad-ov-split-media"
              style={{ border: `1px solid ${c.border}`, background: c.surface }}
            >
              <div className="acad-ov-dual-media">
                <img
                  src="/gallery/beyond-class-1.jpg"
                  alt="RGUKT Technical Workshops"
                  className="acad-ov-dual-img"
                />
                <img
                  src="/gallery/beyond-class-2.jpg"
                  alt="RGUKT Hands-on Engineering"
                  className="acad-ov-dual-img"
                />
              </div>
              <div
                className="acad-ov-img-caption"
                style={{ background: c.surface2, color: c.textMuted }}
              >
                Student Technical Seminars, Workshops &amp; Practical Training
              </div>
            </div>
            <div className="acad-ov-split-content">
              <span className="acad-ov-subheading">
                Intellectual Enrichment
              </span>
              <h2 className="acad-ov-heading" style={{ color: c.text }}>
                Learning Beyond the Classroom
              </h2>
              <p className="acad-ov-intro" style={{ color: c.textMuted }}>
                Beyond regular lectures, RGUKT‑AP provides continuous exposure
                to emerging research trends and expert interactions.
              </p>
              <div className="acad-ov-grid-2">
                {[
                  {
                    tag: "Guest Speakers",
                    title: "Special Lectures",
                    text: "Expert talks delivered by visiting scholars, industry leaders, and researchers sharing domain insights.",
                  },
                  {
                    tag: "Technical Forum",
                    title: "Seminars",
                    text: "Interactive technical seminars showcasing student research, emerging trends, and academic breakthroughs.",
                  },
                  {
                    tag: "Skill Building",
                    title: "Workshops",
                    text: "Hands‑on practical workshops focusing on modern engineering software tools, hardware prototyping, and lab skills.",
                  },
                ].map((m) => (
                  <div
                    key={m.title}
                    className="acad-ov-mini-card"
                    style={{
                      background: c.surface,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    <div
                      className="acad-ov-mini-tag"
                      style={{ color: c.accent }}
                    >
                      {m.tag}
                    </div>
                    <h4
                      className="acad-ov-bullet-title"
                      style={{ color: c.text }}
                    >
                      {m.title}
                    </h4>
                    <p
                      className="acad-ov-bullet-text"
                      style={{ color: c.textMuted }}
                    >
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. GLOBAL ACADEMIC COLLABORATION */}
        <section className="acad-ov-section">
          <div className="acad-ov-split-row">
            <div
              className="acad-ov-split-media"
              style={{ border: `1px solid ${c.border}` }}
            >
              <img
                src="/gallery/global-collab-1.jpeg"
                alt="RGUKT Global Collaboration"
                className="acad-ov-split-img"
              />
              <div
                className="acad-ov-img-caption"
                style={{ background: c.surface2, color: c.textMuted }}
              >
                Global Academic Collaboration &amp; International University
                Partnerships
              </div>
            </div>
            <div className="acad-ov-split-content">
              <span className="acad-ov-subheading">International Reach</span>
              <h2 className="acad-ov-heading" style={{ color: c.text }}>
                Global Academic Collaboration
              </h2>
              <p className="acad-ov-intro" style={{ color: c.textMuted }}>
                RGUKT‑AP fosters a vibrant collaborative spirit with premier
                global universities and research bodies.
              </p>
              <div className="acad-ov-bullets">
                {[
                  {
                    title: "Faculty Exchange & Visiting Mentorship",
                    text: "Academic exchange programs enabling faculty interaction, visiting lectures, and joint scholarly development with international institutions.",
                  },
                  {
                    title: "Academic Partnerships & MOUs",
                    text: "Formal Memoranda of Understanding (MOUs) signed with reputed international institutions for cooperative research, curriculum benchmarking, and student opportunities.",
                  },
                  {
                    title: "Conferences & Symposia",
                    text: "Organising national and international academic conferences and workshops that bring together researchers and scholars from around the world.",
                  },
                ].map((b) => (
                  <div key={b.title} className="acad-ov-bullet-item">
                    <span
                      className="acad-ov-bullet-dot"
                      style={{ background: c.accent }}
                    />
                    <div>
                      <h4
                        className="acad-ov-bullet-title"
                        style={{ color: c.text }}
                      >
                        {b.title}
                      </h4>
                      <p
                        className="acad-ov-bullet-text"
                        style={{ color: c.textMuted }}
                      >
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FACULTY EXCELLENCE */}
        <section className="acad-ov-section">
          <div className="acad-ov-split-row acad-ov-split-row--reverse">
            <div
              className="acad-ov-split-media"
              style={{ border: `1px solid ${c.border}` }}
            >
              <img
                src="/hero/hero-convocation.jpg"
                alt="RGUKT Convocation"
                className="acad-ov-split-img"
              />
              <div
                className="acad-ov-img-caption"
                style={{ background: c.surface2, color: c.textMuted }}
              >
                RGUKT Academic Leadership &amp; Distinguished Faculty Cohort
              </div>
            </div>
            <div className="acad-ov-split-content">
              <span className="acad-ov-subheading">
                Mentorship &amp; Leadership
              </span>
              <h2 className="acad-ov-heading" style={{ color: c.text }}>
                Faculty Excellence
              </h2>
              <p className="acad-ov-intro" style={{ color: c.textMuted }}>
                Our faculty members are distinguished achievers, researchers,
                and educators dedicated to shaping the university's academic
                landscape.
              </p>
              <div className="acad-ov-bullets">
                {[
                  {
                    title: "Teaching & Dedicated Mentorship",
                    text: "Highly qualified faculty drawn from premier institutions such as IITs and NITs, serving as personal academic mentors to guide student learning.",
                  },
                  {
                    title: "Research & Academic Recognition",
                    text: "Faculty recognized through awards and accolades from national and international organisations for their research contributions and publications.",
                  },
                  {
                    title: "Student Guidance & Project Mentoring",
                    text: "Continuous guidance for capstone projects, higher education entrance exams, competitive national trials, and professional growth.",
                  },
                ].map((b) => (
                  <div key={b.title} className="acad-ov-bullet-item">
                    <span
                      className="acad-ov-bullet-dot"
                      style={{ background: c.accent }}
                    />
                    <div>
                      <h4
                        className="acad-ov-bullet-title"
                        style={{ color: c.text }}
                      >
                        {b.title}
                      </h4>
                      <p
                        className="acad-ov-bullet-text"
                        style={{ color: c.textMuted }}
                      >
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. INDUSTRY INTERACTION (CLEANLY CROPPED IMAGE) */}
        <section className="acad-ov-section">
          <div className="acad-ov-split-row">
            <div
              className="acad-ov-split-media"
              style={{ border: `1px solid ${c.border}` }}
            >
              <img
                src="/gallery/industry-visit.png"
                alt="RGUKT Chemical Engineering Industrial Visit"
                className="acad-ov-industry-img"
              />
              <div
                className="acad-ov-img-caption"
                style={{ background: c.surface2, color: c.textMuted }}
              >
                RGUKT-AP Student Industrial Field Visit &amp; Practical Exposure
              </div>
            </div>
            <div className="acad-ov-split-content">
              <span className="acad-ov-subheading">Practical Synergy</span>
              <h2 className="acad-ov-heading" style={{ color: c.text }}>
                Industry Interaction &amp; Practical Exposure
              </h2>
              <p className="acad-ov-intro" style={{ color: c.textMuted }}>
                RGUKT‑AP maintains strong ties with industry, bridging the gap
                between theoretical academia and practical industrial
                applications.
              </p>
              <div className="acad-ov-bullets">
                {[
                  {
                    title: "Industry‑Sponsored Projects",
                    text: "Engaging in practical research projects funded and sponsored by leading public and private industrial organisations.",
                  },
                  {
                    title: "Consultancy & Research Collaboration",
                    text: "Offering specialised technical consultancy services and collaborative R&D to solve complex real‑world engineering problems.",
                  },
                  {
                    title: "Real‑World Applications & Exposure",
                    text: "Providing direct hands‑on exposure to industrial workflows, software tools, entrepreneurship skills, and career readiness.",
                  },
                ].map((b) => (
                  <div key={b.title} className="acad-ov-bullet-item">
                    <span
                      className="acad-ov-bullet-dot"
                      style={{ background: c.accent }}
                    />
                    <div>
                      <h4
                        className="acad-ov-bullet-title"
                        style={{ color: c.text }}
                      >
                        {b.title}
                      </h4>
                      <p
                        className="acad-ov-bullet-text"
                        style={{ color: c.textMuted }}
                      >
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. KNOWLEDGE WITH PURPOSE */}
        <section className="acad-ov-section">
          <div
            className="acad-ov-purpose-banner"
            style={{ background: c.surface, border: `2px solid ${c.accent}` }}
          >
            <div
              className="acad-ov-purpose-badge"
              style={{ background: c.accent }}
            >
              KNOWLEDGE WITH PURPOSE
            </div>
            <h2 className="acad-ov-purpose-title" style={{ color: c.text }}>
              Applying Innovation to Real‑World &amp; Societal Challenges
            </h2>
            <p className="acad-ov-purpose-text" style={{ color: c.textMuted }}>
              At RGUKT‑AP, the pursuit of knowledge is complemented by an
              unwavering commitment to societal impact. The university actively
              encourages the application of scientific innovation, analytical
              rigor, and technology solutions to address urgent real‑world and
              societal challenges—ensuring that education translates into
              meaningful progress for Andhra Pradesh and the nation.
            </p>
            <div className="acad-ov-purpose-stats">
              {[
                { num: "6‑Year", lbl: "Integrated B.Tech Model" },
                { num: "100%", lbl: "Residential ICT Infrastructure" },
                { num: "70+", lbl: "Min. Instructional Days / Sem" },
                { num: "4", lbl: "Constituent Campuses" },
              ].map((s) => (
                <div key={s.lbl} className="acad-ov-pstat">
                  <span
                    className="acad-ov-pstat-num"
                    style={{ color: c.accent }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="acad-ov-pstat-lbl"
                    style={{ color: c.textMuted }}
                  >
                    {s.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. WHY RGUKT‑AP? */}
        <section className="acad-ov-section">
          <div className="acad-ov-section-header">
            <span className="acad-ov-subheading">Key Distinctives</span>
            <h2 className="acad-ov-heading" style={{ color: c.text }}>
              Why RGUKT‑AP?
            </h2>
            <p className="acad-ov-intro" style={{ color: c.textMuted }}>
              Six compelling reasons that make RGUKT‑AP a beacon of
              transformative technical education in India.
            </p>
          </div>
          <div className="acad-ov-grid-6">
            {[
              {
                title: "Academic Excellence",
                text: "Rigorous 6‑year integrated B.Tech curriculum and advanced postgraduate programmes tailored for high technical competency.",
              },
              {
                title: "Research & Innovation",
                text: "Active peer‑reviewed research, modern laboratories, and interdisciplinary investigation across cutting‑edge fields.",
              },
              {
                title: "Hands‑on Learning",
                text: "Learning‑by‑doing paradigm with individualized student laptops, interactive mentors, and smart ICT classrooms.",
              },
              {
                title: "Global Collaboration",
                text: "Strategic institutional MOUs, joint research projects, international symposia, and global academic exchange.",
              },
              {
                title: "Expert Faculty",
                text: "Distinguished educators and researchers drawn from premier institutes like IITs, providing close mentorship.",
              },
              {
                title: "Industry Exposure",
                text: "Industry‑sponsored projects, consultancy work, practical soft‑skills training, and strong placement preparation.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="acad-ov-card"
                style={{
                  background: c.surface,
                  border: `1px solid ${c.border}`,
                }}
              >
                <div
                  className="acad-ov-card-icon"
                  style={{
                    background: "rgba(200,16,46,0.1)",
                    color: c.accent,
                    fontSize: 18,
                    fontWeight: 900,
                  }}
                >
                  ✓
                </div>
                <h3 className="acad-ov-card-title" style={{ color: c.text }}>
                  {card.title}
                </h3>
                <p className="acad-ov-card-text" style={{ color: c.textMuted }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>K
        </section>

        {/* 12. STAY UPDATED */}
        <section className="acad-ov-section">
          <div
            className="acad-ov-stay-updated"
            style={{ background: c.surface2, border: `1px solid ${c.border}` }}
          >
            <div className="acad-ov-stay-content">
              <h2
                className="acad-ov-heading"
                style={{ color: c.text, marginBottom: 8 }}
              >
                Stay Updated
              </h2>
              <p
                className="acad-ov-card-text"
                style={{ color: c.textMuted, margin: 0 }}
              >
                Keep track of academic notices, examination schedules,
                timetables, regulation updates, and official university
                announcements in real time.
              </p>
            </div>
            <Link
              to="/announcements"
              className="acad-ov-btn-announcements"
              style={{ background: c.accent, color: "#fff" }}
            >
              View Latest Announcements →
            </Link>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
