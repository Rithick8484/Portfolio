import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { PROFILE } from '../config/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar-wrap">
        <nav className="navbar">
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
            <span className="nav-logo-badge">R</span>
            <span>{PROFILE.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ display: 'inline-flex' }}
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const id = item.href.substring(1);
          const isActive = activeSection === id;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: '12px' }}
        >
          <Download size={16} />
          <span>Download Resume</span>
        </a>
      </div>
    </>
  );
}
