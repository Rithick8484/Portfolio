import React from 'react';
import { Award, Flame, Lightbulb, Code2, LineChart, ShieldAlert } from 'lucide-react';
import { PROFILE } from '../config/profile';

const achievementIcons = {
  1: Flame,
  2: Lightbulb,
  3: Code2,
  4: ShieldAlert,
  5: LineChart,
};

export default function Achievements() {
  const streakItem = PROFILE.achievements.find((a) => a.title.includes('LeetCode'));
  const hackathons = PROFILE.achievements.filter((a) => !a.title.includes('LeetCode'));

  return (
    <section id="achievements" className="section" style={{ background: 'rgba(10, 11, 18, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag amber">
            <Award size={14} />
            <span>Honors & Hackathons</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="text-gradient-amber">Competitions</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating grit and problem-solving dedication through hackathons and algorithmic discipline.
          </p>
        </div>

        {/* LeetCode Streak Hero Bento */}
        {streakItem && (
          <div className="streak-hero-bento">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(245, 158, 11, 0.18)', borderRadius: '9999px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: 700, marginBottom: '14px' }}>
                <Flame size={16} />
                <span>CONTINUOUS LEARNING STREAK</span>
              </div>
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '8px' }}>
                {streakItem.title} – {streakItem.subtitle}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.02rem', maxWidth: '620px', lineHeight: '1.75' }}>
                {streakItem.description}
              </p>
            </div>

            <div style={{ textAlign: 'center', minWidth: '190px' }}>
              <div className="streak-big-number">110+</div>
              <div style={{ fontSize: '0.88rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Days Active Streak
              </div>
            </div>
          </div>
        )}

        {/* Hackathon Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {hackathons.map((ach) => {
            const IconComp = achievementIcons[ach.id] || Lightbulb;
            return (
              <div key={ach.id} className="bento-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      color: '#a78bfa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  {ach.badge && (
                    <span className="badge badge-violet" style={{ fontSize: '0.75rem' }}>
                      {ach.badge}
                    </span>
                  )}
                </div>

                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '6px' }}>
                  {ach.title}
                </h4>
                {ach.subtitle && (
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500, marginBottom: '14px' }}>
                    {ach.subtitle}
                  </div>
                )}
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.65' }}>
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
