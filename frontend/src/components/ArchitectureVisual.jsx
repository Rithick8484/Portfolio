import React, { useState, useEffect } from 'react';
import { Network, Server, Database, Globe, Layers, ArrowRight, ArrowDown, Activity, CheckCircle2 } from 'lucide-react';
import { apiService } from '../services/api';

export default function ArchitectureVisual() {
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    let isMounted = true;
    const checkStatus = async () => {
      try {
        await apiService.checkHealth();
        if (isMounted) setBackendStatus('online');
      } catch (err) {
        if (isMounted) setBackendStatus('offline');
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="section" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
      <div className="container">
        <div className="arch-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div className="section-tag" style={{ marginBottom: '8px' }}>
                <Network size={14} />
                <span>Full-Stack Architecture</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700 }}>
                System & Technology Flow
              </h3>
            </div>

            {/* Live Backend Health Indicator */}
            <div className={`live-status-pill ${backendStatus === 'online' ? 'status-online' : 'status-offline'}`}>
              <Activity size={14} className={backendStatus === 'online' ? 'pulse-dot' : ''} />
              <span>
                {backendStatus === 'online'
                  ? 'Spring Boot API + MySQL: Connected'
                  : backendStatus === 'checking'
                  ? 'Checking Backend Connectivity...'
                  : 'Backend API: Offline (Fallback Mode Active)'}
              </span>
            </div>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '750px', marginBottom: '28px' }}>
            This application demonstrates end-to-end full-stack integration: client-side interaction through React and Axios communicates with Spring Boot REST controllers, passing through business service tiers and Spring Data JPA repositories down to MySQL.
          </p>

          {/* Pipeline 1: Portfolio Full-Stack Flow */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', fontWeight: 700, marginBottom: '16px' }}>
              1. Portfolio Full-Stack Application Flow
            </div>
            <div className="arch-flow">
              <div className="arch-node">
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Client UI</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>React.js</div>
                <div style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Component Tree</div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-node">
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>HTTP Client</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Axios</div>
                <div style={{ fontSize: '0.75rem', color: '#818cf8' }}>REST Requests</div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-node">
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>REST API</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Spring Boot</div>
                <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Port :8080</div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-node">
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Business & Data</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Service / JPA</div>
                <div style={{ fontSize: '0.75rem', color: '#f59e0b' }}>Hibernate ORM</div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-node">
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Database</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>MySQL</div>
                <div style={{ fontSize: '0.75rem', color: '#38bdf8' }}>portfolio_db</div>
              </div>
            </div>
          </div>

          {/* Pipeline 2: Enterprise Backend Stack Flow */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', fontWeight: 700, marginBottom: '12px' }}>
              2. Core Java Enterprise Backend Pipeline
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', fontSize: '0.9rem', color: '#e2e8f0' }}>
              <span className="badge badge-spring">Java 21</span>
              <span>➔</span>
              <span className="badge badge-spring">Spring Boot 3</span>
              <span>➔</span>
              <span className="badge badge-cyan">REST Controllers</span>
              <span>➔</span>
              <span className="badge badge-cyan">Spring Data JPA</span>
              <span>➔</span>
              <span className="badge badge-spring">MySQL Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
