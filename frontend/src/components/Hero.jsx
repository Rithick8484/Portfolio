import React from 'react';
import { ArrowRight, Download, Mail, Code2, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './BrandIcons';
import { PROFILE } from '../config/profile';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Main Pitch */}
          <div>
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            <p style={{ color: '#a78bfa', fontWeight: 600, fontSize: '1.2rem', marginBottom: '8px' }}>
              Hi, I'm
            </p>
            <h1 className="hero-title">{PROFILE.name}</h1>
            <h2 className="hero-role">
              <span className="text-gradient">{PROFILE.secondaryRole}</span>
            </h2>

            <p className="hero-desc">{PROFILE.tagline}</p>

            {/* CTAs */}
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>

              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Tech Chips */}
            <div className="hero-tech-chips">
              <span className="tech-chip">
                <span style={{ color: '#f59e0b' }}>☕</span> Java 21
              </span>
              <span className="tech-chip">
                <span style={{ color: '#10b981' }}>🍃</span> Spring Boot
              </span>
              <span className="tech-chip">
                <span style={{ color: '#60a5fa' }}>⚛</span> React
              </span>
              <span className="tech-chip">
                <span style={{ color: '#a855f7' }}>🗄</span> MySQL
              </span>
              <span className="tech-chip">
                <span style={{ color: '#f43f5e' }}>🔥</span> 110+ LeetCode Streak
              </span>
            </div>
          </div>

          {/* Right: Rithick's Profile Photo */}
          <div className="hero-photo-container">
            <div className="hero-photo-glow-backdrop"></div>
            <div className="hero-photo-frame">
              <img
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                className="hero-photo"
                onError={(e) => {
                  e.target.src = '/profile.jpg';
                }}
              />
              <div className="hero-photo-overlay"></div>
            </div>

            {/* Floating Badges */}
            <div className="hero-floating-badge badge-top">
              <span className="pulse-dot"></span>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Specialization
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>
                  Java & Spring Boot
                </div>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom">
              <span style={{ fontSize: '1.2rem' }}>🔥</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Daily Discipline
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff' }}>
                  110+ Day LeetCode Streak
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
