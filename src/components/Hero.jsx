import React from 'react';
import { Mail, FolderGit2, Download } from 'lucide-react';
import Button from './Button';
import { profileData } from '../data/profile';

/**
 * Hero Section Component
 * Landing banner showcasing developer name, role, call-to-actions,
 * visual card with rotating gradient ring, and key metrics counters.
 */
export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Available for Summer 2026 Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">{profileData.name}</span>
            </h1>

            <p className="hero-subtitle">
              {profileData.role} &bull; {profileData.year} @ {profileData.institution.split(',')[0]}
            </p>

            <p className="hero-description">
              {profileData.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <Button to="/projects" variant="primary" size="lg" icon={<FolderGit2 size={18} />}>
                View Projects
              </Button>
              <Button to="/contact" variant="secondary" size="lg" icon={<Mail size={18} />}>
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={18} />}
                onClick={onOpenResume}
              >
                Resume
              </Button>
            </div>
          </div>

          {/* Right Visual Profile Card */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar-ring"></div>
                <div className="hero-avatar-inner">
                  <div className="hero-avatar-graphic">
                    {profileData.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>
              </div>

              <h3 className="hero-profile-name">{profileData.name}</h3>
              <p className="hero-profile-degree">{profileData.degree}</p>
              <p className="hero-profile-inst">{profileData.institution}</p>

              {/* Floating Tech Stack Pills */}
              <div className="hero-tech-pills">
                <span className="tech-pill">ReactJS</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">FastAPI</span>
                <span className="tech-pill">Machine Learning</span>
                <span className="tech-pill">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics Counter Grid */}
        <div className="stats-grid">
          {profileData.statistics.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
