import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './BrandIcons';
import { PROFILE } from '../config/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
              {PROFILE.name}
            </div>
            <div style={{ color: '#a78bfa', fontSize: '0.92rem', fontWeight: 600 }}>
              {PROFILE.secondaryRole}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href={PROFILE.socialLinks.github === '[ADD GITHUB URL]' ? '#contact' : PROFILE.socialLinks.github}
              target={PROFILE.socialLinks.github === '[ADD GITHUB URL]' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn-icon"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PROFILE.socialLinks.linkedin === '[ADD LINKEDIN URL]' ? '#contact' : PROFILE.socialLinks.linkedin}
              target={PROFILE.socialLinks.linkedin === '[ADD LINKEDIN URL]' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn-icon"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PROFILE.socialLinks.leetcode === '[ADD LEETCODE URL]' ? '#coding' : PROFILE.socialLinks.leetcode}
              target={PROFILE.socialLinks.leetcode === '[ADD LEETCODE URL]' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="btn-icon"
              title="LeetCode"
            >
              <LeetcodeIcon size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn-icon"
              title="Back to top"
              style={{ marginLeft: '10px' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {PROFILE.name}. All rights reserved.
          </div>
          <div>
            Crafted with React.js & modern UI standards
          </div>
        </div>
      </div>
    </footer>
  );
}
