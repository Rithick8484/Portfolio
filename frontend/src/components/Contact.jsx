import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Save message locally in browser storage & simulate dispatch
    try {
      await new Promise((res) => setTimeout(res, 800));

      const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('portfolio_messages', JSON.stringify(existing));

      setStatusMessage({
        type: 'success',
        text: 'Message sent successfully! Thank you for getting in touch.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'Something went wrong. Please connect directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag amber">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient-amber">Build Something Great</span>
          </h2>
          <p className="section-subtitle">
            Open to software engineering internships, entry-level opportunities, and technical collaborations.
          </p>
        </div>

        <div className="contact-bento-grid">
          {/* Left: Contact Info Bento */}
          <div className="bento-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '14px' }}>
              Direct Contact
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '30px', fontSize: '0.96rem' }}>
              Reach out directly by email or phone, or submit an inquiry using the contact form.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email
                    </div>
                    <a href={`mailto:${PROFILE.email}`} style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  className="btn-icon"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    color: '#fbbf24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phone
                  </div>
                  <a href={`tel:${PROFILE.phone}`} style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Location
                  </div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form Bento */}
          <div className="bento-card" style={{ padding: '36px' }}>
            {statusMessage && (
              <div className={`alert-toast ${statusMessage.type}`}>
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 size={18} color="#34d399" />
                ) : (
                  <AlertCircle size={18} color="#fb7185" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '6px' }}>{errors.name}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Software Engineering Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '6px' }}>{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about the role, project, or timeline..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '6px' }}>{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
