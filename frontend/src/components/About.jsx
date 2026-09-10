import React from 'react';
import { User, Code2, GraduationCap, Building2, MapPin, CheckCircle2, Download, Sparkles, Server, Database, ShieldCheck, Terminal } from 'lucide-react';
import { PROFILE } from '../config/profile';

const quickCards = [
  { label: 'Role', value: PROFILE.primaryRole, icon: Code2, color: '#a78bfa' },
  { label: 'Degree', value: 'B.Tech IT (2024–2028)', icon: GraduationCap, color: '#60a5fa' },
  { label: 'Institution', value: 'Sri Krishna College of Tech', icon: Building2, color: '#34d399' },
  { label: 'Location', value: PROFILE.location, icon: MapPin, color: '#fbbf24' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            Engineering Systems with <span className="text-gradient">Precision & Purpose</span>
          </h2>
          <p className="section-subtitle">
            An aspiring Java Developer building practical, performant software solutions from backend architecture to intuitive user interfaces.
          </p>
        </div>

        <div className="about-bento">
          {/* Bento Card 1: Developer Credentials & Quick Info */}
          <div className="bento-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <Terminal size={20} color="#a78bfa" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Developer Credentials
              </span>
            </div>

            {/* Quick Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {quickCards.map((qc, idx) => {
                const IconComponent = qc.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'var(--transition)',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: qc.color,
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {qc.label}
                      </div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#fff', marginTop: '2px' }}>
                        {qc.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engineering Pillars Box */}
            <div
              style={{
                marginTop: 'auto',
                padding: '18px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Engineering Focus
              </div>
              <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                Focusing on building maintainable enterprise backend services, transactional data integrity, and secure RESTful communication.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Career Objective & Stats */}
          <div className="bento-card" style={{ padding: '34px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Sparkles size={18} color="#fbbf24" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Career Objective
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '16px' }}>
              Java Full-Stack Developer & Problem Solver
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '24px' }}>
              {PROFILE.careerObjective}
            </p>

            {/* Core Capability Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>Enterprise Java, JDBC & Servlets</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>Spring Boot REST API Development</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>JWT Authentication & RBAC</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>MySQL Relational Data Modeling</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
