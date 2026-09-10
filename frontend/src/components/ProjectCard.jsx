import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, Server, Shield, Trash2, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const projectIcons = {
  1: Server,
  2: Shield,
  3: Trash2,
};

export default function ProjectCard({ project, onSelect }) {
  const IconComponent = projectIcons[project.id] || FolderGit2;

  const techList = project.technologies
    ? project.technologies.split(',').map((t) => t.trim())
    : [];

  return (
    <div className="bento-card project-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(139, 92, 246, 0.15)',
            color: '#a78bfa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconComponent size={20} />
        </div>
        <span className="project-category-tag">{project.badge || project.category}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      {/* Tech Tags */}
      <div className="project-tech-badges">
        {techList.map((tech, idx) => (
          <span key={idx} className="badge badge-violet">
            {tech}
          </span>
        ))}
      </div>

      {/* Key Feature List */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', marginBottom: '8px' }}>
          Key Highlights
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={13} color="#10b981" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="project-card-footer">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => onSelect(project)}
          style={{ gap: '6px' }}
        >
          <span>View Details</span>
          <ArrowUpRight size={14} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href={project.githubUrl === '[ADD GITHUB URL]' ? '#contact' : project.githubUrl}
            target={project.githubUrl === '[ADD GITHUB URL]' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn-icon"
            title={project.githubUrl === '[ADD GITHUB URL]' ? 'Add GitHub URL' : 'GitHub Repository'}
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? '#contact' : project.liveDemoUrl}
            target={project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn-icon"
            title={project.liveDemoUrl === '[ADD LIVE DEMO URL]' ? 'Add Live Demo URL' : 'Live Demo'}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
