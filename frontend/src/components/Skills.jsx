import React from 'react';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Cpu, 
  Binary, 
  Coffee, 
  Terminal, 
  Database, 
  FileCode, 
  Atom, 
  GitBranch, 
  Monitor, 
  Server, 
  ShieldCheck, 
  FileText, 
  Globe 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROFILE } from '../config/profile';

const categoryIcons = {
  'Languages': Code2,
  'Frameworks': Layers,
  'Tools': Wrench,
  'Technologies': Cpu,
  'Core Concepts': Binary,
};

const skillIcons = {
  'Java': Coffee,
  'C++': Terminal,
  'C': Terminal,
  'SQL': Database,
  'JavaScript': FileCode,
  'Python': Cpu,
  'Spring Boot': Layers,
  'React': Atom,
  'Git': GitBranch,
  'GitHub': GithubIcon,
  'IntelliJ IDEA': Monitor,
  'VS Code': Monitor,
  'VMware': Server,
  'Java Servlets': Layers,
  'JDBC': Database,
  'REST APIs': Globe,
  'JWT': ShieldCheck,
  'Swagger': FileText,
  'Object-Oriented Programming': Binary,
  'DBMS': Database,
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(10, 11, 18, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag amber">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient-amber">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, backend frameworks, enterprise developer tooling, and computer science concepts.
          </p>
        </div>

        <div className="skills-bento-grid">
          {PROFILE.skills.map((cat, index) => {
            const HeaderIcon = categoryIcons[cat.category] || Code2;
            const isAmber = index % 2 === 1;

            return (
              <div key={index} className={`bento-card skill-bento-card ${isAmber ? 'glow-amber' : ''}`}>
                <div className="skill-bento-header">
                  <div className="skill-bento-icon" style={isAmber ? { background: 'rgba(245, 158, 11, 0.12)', color: '#fbbf24' } : {}}>
                    <HeaderIcon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{cat.category}</h3>
                </div>

                <div className="skill-pills-wrap">
                  {cat.items.map((skillName, sIdx) => {
                    const ItemIcon = skillIcons[skillName] || Code2;
                    return (
                      <div key={sIdx} className="skill-pill-item">
                        <ItemIcon size={15} color={isAmber ? '#f59e0b' : '#a78bfa'} />
                        <span>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
