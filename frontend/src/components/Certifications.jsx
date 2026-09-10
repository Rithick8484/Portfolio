import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: 'rgba(10, 11, 18, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Accredited verifications across Enterprise Java, Database Architecture, Cloud Foundations, and Artificial Intelligence.
          </p>
        </div>

        <div className="cert-grid">
          {PROFILE.certifications.map((cert) => {
            const isPlaceholder = !cert.credentialUrl || cert.credentialUrl.includes('[ADD') || cert.credentialUrl === '#';

            return (
              <div key={cert.id} className="bento-card cert-card">
                <div className="cert-provider-tag">
                  <CheckCircle size={12} />
                  <span>{cert.provider}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-glass)' }}>
                  {isPlaceholder ? (
                    <button
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}
                      disabled
                      title="Certificate verification link placeholder"
                    >
                      <span>View Certificate</span>
                    </button>
                  ) : (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
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
