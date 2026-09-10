import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag amber">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education <span className="text-gradient-amber">Milestones</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education and academic track record in Information Technology.
          </p>
        </div>

        <div className="timeline">
          {PROFILE.education.map((edu, idx) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-node amber">
                <div className="timeline-node-inner"></div>
              </div>

              <div className="bento-card glow-amber timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <div className="timeline-company amber">{edu.institution}</div>
                  </div>
                  <div className="timeline-badge amber">{edu.duration}</div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBlock: '8px 12px' }}>
                  <Award size={16} color="#f59e0b" />
                  <span style={{ fontWeight: 700, color: '#fbbf24', fontSize: '0.96rem' }}>
                    Score: {edu.score}
                  </span>
                </div>

                {edu.description && (
                  <p style={{ color: '#cbd5e1', lineHeight: '1.65', fontSize: '0.94rem' }}>
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
