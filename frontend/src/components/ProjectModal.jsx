import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, ShieldCheck, Database, Layout, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const techList = project.technologies
    ? project.technologies.split(',').map((t) => t.trim())
    : [];

  const featuresList = Array.isArray(project.features)
    ? project.features
    : project.features
    ? project.features.split(';').map((f) => f.trim())
    : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close details modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="badge badge-violet">{project.category}</span>
          <h2 style={{ fontSize: '1.9rem', color: '#fff', marginTop: '10px', marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>{project.description}</p>
        </div>

        {/* Overview */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Layout size={18} />
            <span>Project Overview</span>
          </h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.75' }}>
            {project.overview || project.description}
          </p>
        </div>

        {/* Problem Statement & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(244, 63, 94, 0.06)', border: '1px solid rgba(244, 63, 94, 0.25)', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#fb7185', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
              Problem Statement
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {project.problemStatement}
            </p>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '20px', borderRadius: '12px' }}>
            <h4 style={{ color: '#34d399', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
              Engineered Solution
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Layers size={18} />
            <span>Technologies & Tools</span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techList.map((tech, idx) => (
              <span key={idx} className="badge badge-violet" style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <CheckCircle2 size={18} />
            <span>Key Features & Capabilities</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {featuresList.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid var(--border-glass)',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ color: '#10b981', fontWeight: 700 }}>✔</span>
                <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Database size={18} />
            <span>Architecture Flow</span>
          </h3>
          <div className="architecture-box">
            {project.architecture}
          </div>
        </div>

        {/* Screenshot Placeholder */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Layout size={18} />
            <span>Screenshot Preview</span>
          </h3>
          <div className="screenshot-placeholder">
            <Layout size={36} color="#64748b" />
            <span style={{ fontWeight: 600 }}>[PROJECT SCREENSHOT PLACEHOLDER]</span>
            <span style={{ fontSize: '0.75rem' }}>Demo screenshot preview will be displayed here</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--border-glass)' }}>
          <a
            href={project.githubUrl === '[ADD GITHUB URL]' ? '#contact' : project.githubUrl}
            target={project.githubUrl === '[ADD GITHUB URL]' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <GithubIcon size={16} />
            <span>{project.githubUrl === '[ADD GITHUB URL]' ? 'Add GitHub URL' : 'View GitHub Repo'}</span>
          </a>

          <a
            href={project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? '#contact' : project.liveDemoUrl}
            target={project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} />
            <span>{project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? 'Add Live Demo URL' : 'Launch Demo'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
