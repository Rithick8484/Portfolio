import React from 'react';
import { User, Code2, GraduationCap, Building2, MapPin, CheckCircle2, Download, Sparkles, Flame, Award } from 'lucide-react';
import { PROFILE } from '../config/profile';

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
          {/* Bento Card 1: Framed Photo & Badges */}
          <div className="bento-card about-photo-card">
            <div className="about-photo-wrapper">
              <img
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                className="about-photo"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.92rem', fontWeight: 600 }}>
                <MapPin size={16} color="#f59e0b" />
                <span>{PROFILE.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.88rem' }}>
                <Building2 size={16} color="#8b5cf6" />
                <span>{PROFILE.quickInfo[2].value}</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Career Objective & Stats */}
          <div className="bento-card" style={{ padding: '34px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Sparkles size={18} color="#a78bfa" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
