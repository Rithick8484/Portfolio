import React from 'react';
import { Terminal, Flame, Coffee, Network, Binary, Database, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon, LeetcodeIcon } from './BrandIcons';
import { PROFILE } from '../config/profile';

const dsaCards = [
  {
    title: 'Java',
    subtitle: 'Problem Solving & Programming',
    desc: 'Core language practice focusing on object-oriented design patterns, Collection frameworks, multithreading, and memory efficiency.',
    icon: Coffee,
  },
  {
    title: 'Data Structures',
    subtitle: 'DSA Practice',
    desc: 'Consistent daily problem solving covering Arrays, Linked Lists, Stacks, Queues, Binary Trees, Heaps, and Hash Tables.',
    icon: Network,
  },
  {
    title: 'Algorithms',
    subtitle: 'Algorithmic Efficiency',
    desc: 'Designing optimal algorithms with Binary Search, Two Pointers, Sliding Window, Recursion, Dynamic Programming, and Greedy methods.',
    icon: Binary,
  },
  {
    title: 'SQL',
    subtitle: 'Database Problem Solving',
    desc: 'Crafting complex relational queries, Multi-table Joins, Aggregations, Window Functions, and schema optimization.',
    icon: Database,
  },
];

export default function Coding() {
  return (
    <section id="coding" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Problem Solving Focus</span>
          </div>
          <h2 className="section-title">
            Coding & <span className="text-gradient">Data Structures</span>
          </h2>
          <p className="section-subtitle">
            "Consistent problem solving. Consistent learning."
          </p>
        </div>

        {/* 110+ Day LeetCode Highlight Card */}
        <div
          className="bento-card glow-amber"
          style={{
            padding: '34px',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(19, 21, 33, 0.8) 100%)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(245, 158, 11, 0.16)',
                color: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Flame size={34} />
            </div>
            <div>
              <div style={{ fontSize: '0.84rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                LeetCode Practice
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBlock: '4px' }}>
                110+ Day Active Coding Streak
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.94rem' }}>
                Strengthening algorithmic problem-solving techniques daily to write clean, optimized code.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href={PROFILE.socialLinks.leetcode === '[ADD LEETCODE URL]' ? '#contact' : PROFILE.socialLinks.leetcode}
              target={PROFILE.socialLinks.leetcode === '[ADD LEETCODE URL]' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn btn-amber btn-sm"
            >
              <Code2 size={16} />
              <span>{PROFILE.socialLinks.leetcode === '[ADD LEETCODE URL]' ? 'LeetCode Profile' : 'View LeetCode'}</span>
            </a>

            <a
              href={PROFILE.socialLinks.github === '[ADD GITHUB URL]' ? '#contact' : PROFILE.socialLinks.github}
              target={PROFILE.socialLinks.github === '[ADD GITHUB URL]' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <GithubIcon size={16} />
              <span>{PROFILE.socialLinks.github === '[ADD GITHUB URL]' ? 'GitHub Profile' : 'View GitHub'}</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="coding-pillars-grid">
          {dsaCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bento-card coding-pillar-card">
                <div className="coding-pillar-icon">
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>
                  {card.title}
                </h4>
                <div style={{ fontSize: '0.82rem', color: '#a78bfa', fontWeight: 600, marginBottom: '12px' }}>
                  {card.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.65' }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
