import React from 'react';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(10, 11, 18, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Internship & Training</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional full-stack Java training, application architecture, and database development.
          </p>
        </div>

        <div className="timeline">
          {PROFILE.experience.map((exp) => {
            const techList = exp.technologies
              ? exp.technologies.split(',').map((t) => t.trim())
              : [];

            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-node">
                  <div className="timeline-node-inner"></div>
                </div>

                <div className="bento-card timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <div className="timeline-company">{exp.company}</div>
                    </div>
                    <div className="timeline-badge">{exp.duration}</div>
                  </div>

                  {exp.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                      <MapPin size={14} color="#8b5cf6" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '0.96rem' }}>
                    {exp.description}
                  </p>

                  {techList.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                      {techList.map((tech, idx) => (
                        <span key={idx} className="badge badge-violet" style={{ fontSize: '0.8rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
