import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, MapPin, ArrowRight, CheckCircle2, Road, ShieldCheck, BriefcaseBusiness } from 'lucide-react';
import './styles.css';

function App() {
  const services = [
    'Road Asset Management Systems and Strategy',
    'Performance-Based Road Contracts: PBC, OPRC, OPBRC and PBMC',
    'Contract Management, Procurement Support and FIDIC Advisory',
    'Project Management for Transport Infrastructure Projects',
    'Institutional Strengthening, Capacity Building and Training',
    'Technical Advisory for MDB-funded Infrastructure Projects'
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Yellowbook Management Solutions home">
            <img src="/logo.png" alt="YBMS logo" className="logo" />
            <div>
              <div className="brand-name">Yellowbook Management Solutions</div>
              <div className="brand-tagline">Infrastructure Delivery • Lifecycle Management</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Infrastructure Advisory</div>
              <h1>Supporting better infrastructure performance, sustainability and maintenance outcomes</h1>
              <p>
                We support infrastructure agencies and organizations in improving asset performance, maintenance practices and long-term sustainability through practical, performance-oriented approaches.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="mailto:office@ybms.net">
                  Discuss an assignment <ArrowRight size={18} />
                </a>
                <a className="button secondary" href="#services">View expertise</a>
              </div>
            </div>
            <div className="hero-card">
              <div className="metric"><strong>30+</strong><span>Years in transport infrastructure development and maintenance</span></div>
              <div className="metric"><strong>20+</strong><span>Years of experience in road asset management practices</span></div>
              <div className="metric"><strong>6+</strong><span>Countries of professional experience</span></div>
              <div className="metric"><strong>MDB</strong><span>World Bank, ADB and AfDB contexts</span></div>
            </div>
          </div>
        </section>

        <section className="intro-cards container">
          <article className="card">
            <ShieldCheck size={34} />
            <h3>Design-Build-Maintain</h3>
            <p>Integrated infrastructure delivery and maintenance approaches including PBC, OPRC/OPBRC and PPP models.</p>
          </article>
          <article className="card">
            <Road size={34} />
            <h3>Road Asset Management</h3>
            <p>Support for agencies seeking practical, data-informed and lifecycle-oriented management of road networks.</p>
          </article>
          <article className="card">
            <BriefcaseBusiness size={34} />
            <h3>Project & Contract Advisory</h3>
            <p>Procurement, contract management and project delivery support for infrastructure projects.</p>
          </article>
        </section>

        <section id="services" className="services-section">
          <div className="container services-grid">
            <div>
              <div className="eyebrow dark">Services</div>
              <h2>Specialist advisory services for road agencies, consultants and development partners</h2>
              <p>
                The focus is on practical implementation support - across planning, procurement, project delivery and sustainable infrastructure management.
              </p>
            </div>
            <div className="service-list">
              {services.map((item) => (
                <div className="service-item" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section container">
          <div className="about-box">
            <div className="eyebrow dark">About YBMS</div>
            <h2>Focused advisory support for infrastructure delivery and lifecycle-based management</h2>
            <p>
              YBMS works at the intersection of infrastructure delivery, lifecycle-based management and performance-oriented contracting approaches. The firm supports clients with practical technical, contractual and implementation-oriented advice for complex infrastructure assignments.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <div className="contact-box">
            <div>
              <h2>Looking for practical support for infrastructure delivery and lifecycle-based management?</h2>
              <p>
                YBMS supports infrastructure projects through practical advisory services in project preparation, procurement, contract structuring, implementation support, lifecycle management and institutional capacity building.
              </p>
            </div>
            <div className="contact-card">
              <h3>Contact</h3>
              <a href="mailto:office@ybms.net" className="contact-line"><Mail size={18} /> office@ybms.net</a>
              <div className="contact-line"><MapPin size={18} /> Chandigarh, India</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Yellowbook Management Solutions. All rights reserved.</div>
          <div>Design-Build-Maintain • Asset Management • Project Advisory</div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
