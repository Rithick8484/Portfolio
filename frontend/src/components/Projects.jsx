import React, { useState } from 'react';
import { FolderGit2, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROFILE } from '../config/profile';

const categories = ['All Projects', 'Java & Backend', 'Security', 'Full Stack & Web'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All Projects'
    ? PROFILE.projects
    : PROFILE.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Software Engineering</span> Work
          </h2>
          <p className="section-subtitle">
            Enterprise Java, secure Spring Boot architectures, database systems, and full-stack implementations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
