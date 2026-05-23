import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Globe2, BriefcaseBusiness, Road, ShieldCheck, Building2, GraduationCap, FileText, ExternalLink } from 'lucide-react';
import './styles.css';

function App() {
  const services = [
    'Road Asset Management Systems and Strategy',
    'Performance-Based Road Contracts: PBC, OPRC, OPBRC and PBMC',
    'Contract Management, Procurement Support and FIDIC Advisory',
    'Project Management for Transport Infrastructure Projects',
    'Institutional Strengthening, Capacity Building and Training',
    'Technical Advisory for MDB-funded Infrastructure Projects',
  ];

  const experience = [
    '30+ years in civil engineering and transport infrastructure',
    'Two decades of practical work on PBC / OPRC / OPBRC assignments',
    'Experience across India, Uganda, Botswana, Ghana, Kenya and Liberia',
    'Exposure to World Bank, ADB, AfDB and other development partner contexts',
  ];

  const projects = [
    {
      title: 'Uganda – NERAMP',
      text: 'Project management, contracts support and OPRC implementation experience under a World Bank-supported road asset management project.',
    },
    {
      title: 'Botswana – Integrated Transport Project',
      text: 'Team leadership and contract management support for design-build-maintenance and performance-based road contracting.',
    },
    {
      title: 'India – Punjab State Road Sector Project',
      text: 'Asset management, OPRC pilot development, PPP monitoring, institutional strengthening and road sector reform support.',
    },
    {
      title: 'Ghana – OPBRC Advisory',
      text: 'Support for adapting performance-based bidding documents and strengthening road asset management approaches.',
    },
  ];

  const knowledge = [
    'IRF Executive Seminars on PBC / OPBRC',
    'PIARC International Seminar on Transport Asset Management',
    'Knowledge sharing on road maintenance and performance-based contracting',
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Yellowbook Management Solutions home">
            <span className="brand-title">Yellowbook Management Solutions</span>
            <span className="brand-subtitle">Infrastructure • Asset Management • PBC</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="eyebrow"><Globe2 size={16} /> Advisory support for roads and transport infrastructure</div>
              <h1>Practical expertise for better road infrastructure outcomes</h1>
              <p className="hero-text">
                Yellowbook Management Solutions provides specialist advisory support in road asset management, performance-based road contracts, procurement, contract management and infrastructure project delivery.
              </p>
              <div className="button-row">
                <a className="button primary" href="mailto:gursharan.gill@ybms.net">Discuss an Assignment <ArrowRight size={18} /></a>
                <a className="button secondary" href="#services">View Expertise</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="stats-card">
              <div className="stat"><strong>30+</strong><span>Years of professional experience</span></div>
              <div className="stat"><strong>20+</strong><span>Years in PBC / OPRC practice</span></div>
              <div className="stat"><strong>6+</strong><span>Countries of professional experience</span></div>
              <div className="stat"><strong>MDB</strong><span>World Bank, ADB and AfDB contexts</span></div>
            </motion.div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container feature-grid">
            <Feature icon={<Road />} title="Road Asset Management" text="Support for agencies seeking practical, data-informed and lifecycle-oriented management of road networks." />
            <Feature icon={<ShieldCheck />} title="Performance-Based Contracts" text="Design, implementation and review support for PBC, OPRC, OPBRC and PBMC models." />
            <Feature icon={<BriefcaseBusiness />} title="Project & Contract Advisory" text="Procurement, contract administration, FIDIC support and project management for infrastructure assignments." />
          </div>
        </section>

        <section id="services" className="white-section">
          <div className="container two-column">
            <div>
              <p className="section-label">Services</p>
              <h2>Specialist advisory services for road agencies, consultants and development partners</h2>
              <p className="muted">The focus is on practical implementation — helping clients move from plans and contracts to measurable infrastructure outcomes.</p>
            </div>
            <div className="check-list">
              {services.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
        </section>

        <section id="experience" className="container profile-section">
          <div className="two-column align-center">
            <div>
              <p className="section-label">Expert Profile</p>
              <h2>Led by Gursharan Gill</h2>
              <p className="muted">
                Gursharan Gill is a civil engineer and transport infrastructure specialist with extensive experience in road asset management, performance-based contracting, procurement and contract management for transport infrastructure projects.
              </p>
              <p className="muted">
                His work has focused on supporting public agencies and development partner-funded projects in moving from traditional input-based approaches towards more sustainable, performance-oriented and lifecycle-based road management practices.
              </p>
            </div>
            <div className="panel">
              {experience.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
        </section>

        <section id="projects" className="grey-section">
          <div className="container">
            <div className="section-intro">
              <p className="section-label">Selected Experience</p>
              <h2>Relevant assignments and project exposure</h2>
              <p className="muted">Experience includes transport infrastructure, road asset management, performance-based contracting and institutional strengthening assignments across multiple countries.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.title} title={project.title} text={project.text} />)}
            </div>
          </div>
        </section>

        <section className="container knowledge-section">
          <div className="knowledge-card">
            <div>
              <p className="section-label light">Knowledge Sharing</p>
              <h2>Practitioner perspective for training, seminars and technical dialogue</h2>
              <p>YBMS brings implementation-oriented knowledge for agencies and professional forums seeking practical insights on road maintenance, asset management and performance-based contracting.</p>
            </div>
            <div className="knowledge-list">
              {knowledge.map((item) => <div key={item}><GraduationCap size={18} /> {item}</div>)}
            </div>
          </div>
        </section>

        <section className="container cta-section">
          <div className="cta-card">
            <div>
              <h2>Looking for practical support on road asset management or PBC implementation?</h2>
              <p>YBMS can support project preparation, contract structuring, implementation review, capacity building and troubleshooting of complex transport infrastructure assignments.</p>
            </div>
            <div id="contact" className="contact-card">
              <h3>Contact</h3>
              <p><Phone size={18} /> <a href="tel:+919872913580">+91-98729-13580</a></p>
              <p><Mail size={18} /> <a href="mailto:gursharan.gill@ybms.net">gursharan.gill@ybms.net</a></p>
              <p><MapPin size={18} /> Mohali, Punjab, India</p>
              <p><Building2 size={18} /> Yellowbook Management Solutions</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Yellowbook Management Solutions. All rights reserved.</span>
          <span>Transport Infrastructure | Road Asset Management | PBC / OPRC</span>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return <div className="feature-card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function CheckItem({ children }) {
  return <div className="check-item"><CheckCircle2 size={20} /><span>{children}</span></div>;
}

function ProjectCard({ title, text }) {
  return <article className="project-card"><FileText size={24} /><h3>{title}</h3><p>{text}</p></article>;
}

createRoot(document.getElementById('root')).render(<App />);
