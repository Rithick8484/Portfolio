import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Code2, Sparkles, Terminal, Shield, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './BrandIcons';
import { PROFILE } from '../config/profile';

const codeSnippets = {
  controller: `// Spring Boot REST Controller
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    @PostMapping
    public ResponseEntity<Employee> create(
        @Valid @RequestBody EmployeeDto dto) {
        return ResponseEntity.status(CREATED)
            .body(service.saveEmployee(dto));
    }
}`,
  security: `// JWT Security Configuration
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated())
            .addFilterBefore(jwtFilter, UsernamePasswordAuthFilter.class)
            .build();
    }
}`,
  service: `// Smart Waste Predictor API
@Service
public class OverflowPredictorService {

    public OverflowRisk assessFillTrend(BinSensorLog telemetry) {
        double fillRate = telemetry.calculateDeltaPerHour();
        return fillRate > CRITICAL_THRESHOLD 
            ? OverflowRisk.HIGH_ALERT 
            : OverflowRisk.OPTIMAL;
    }
}`
};

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState('controller');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Main Pitch */}
          <div>
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            <p style={{ color: '#a78bfa', fontWeight: 600, fontSize: '1.2rem', marginBottom: '8px' }}>
              Hi, I'm
            </p>
            <h1 className="hero-title">{PROFILE.name}</h1>
            <h2 className="hero-role">
              <span className="text-gradient">{PROFILE.secondaryRole}</span>
            </h2>

            <p className="hero-desc">{PROFILE.tagline}</p>

            {/* CTAs */}
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>

              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Tech Chips */}
            <div className="hero-tech-chips">
              <span className="tech-chip">
                <span style={{ color: '#f59e0b' }}>☕</span> Java 21
              </span>
              <span className="tech-chip">
                <span style={{ color: '#10b981' }}>🍃</span> Spring Boot
              </span>
              <span className="tech-chip">
                <span style={{ color: '#60a5fa' }}>⚛</span> React
              </span>
              <span className="tech-chip">
                <span style={{ color: '#a855f7' }}>🗄</span> MySQL
              </span>
              <span className="tech-chip">
                <span style={{ color: '#f43f5e' }}>🔥</span> 110+ LeetCode Streak
              </span>
            </div>
          </div>

          {/* Right: Interactive Code Inspector */}
          <div>
            <div className="code-card">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot dot-red"></span>
                  <span className="code-dot dot-yellow"></span>
                  <span className="code-dot dot-green"></span>
                </div>
                <div className="code-tabs">
                  <button
                    className={`code-tab-btn ${activeCodeTab === 'controller' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('controller')}
                  >
                    Controller.java
                  </button>
                  <button
                    className={`code-tab-btn ${activeCodeTab === 'security' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('security')}
                  >
                    Security.java
                  </button>
                  <button
                    className={`code-tab-btn ${activeCodeTab === 'service' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('service')}
                  >
                    Predictor.java
                  </button>
                </div>
              </div>
              <pre className="code-content">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
