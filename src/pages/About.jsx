import React, { useState, useEffect } from 'react';
import { Target, Compass, Download, BookOpen, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ResumeModal from '../components/ResumeModal';
import { profileData } from '../data/profile';

/**
 * About Page Component
 * Detailed academic profile, education timeline, career objective,
 * technical interests, and resume download modal trigger.
 */
export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.title = `About | ${profileData.name}`;
  }, []);

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          tag="About Me"
          title="Background, Passion & Vision"
          subtitle="Get to know my academic journey, technical curiosities, and the driving force behind my software projects."
        />

        {/* Top Grid: Bio Narrative & Quick Profile Meta Card */}
        <div className="about-intro-grid">
          {/* Left Bio Card */}
          <div className="about-card">
            <h3>
              <Sparkles size={22} color="var(--accent-primary)" />
              Personal Introduction
            </h3>

            {profileData.aboutNarrative.map((paragraph, idx) => (
              <p key={idx} className="about-text-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Professional Objective Box */}
            <div className="objective-box">
              <h4>
                <Target size={16} style={{ display: 'inline', marginRight: 6 }} />
                Career Objective
              </h4>
              <p>"{profileData.careerObjective}"</p>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="about-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>
              <BookOpen size={22} color="var(--accent-secondary)" />
              Profile Details
            </h3>

            <ul className="profile-meta-list">
              <li className="profile-meta-item">
                <span className="profile-meta-label">Full Name</span>
                <span className="profile-meta-value">{profileData.name}</span>
              </li>
              <li className="profile-meta-item">
                <span className="profile-meta-label">Degree</span>
                <span className="profile-meta-value">B.Tech CSE</span>
              </li>
              <li className="profile-meta-item">
                <span className="profile-meta-label">Current Standing</span>
                <span className="profile-meta-value">{profileData.year}</span>
              </li>
              <li className="profile-meta-item">
                <span className="profile-meta-label">Institution</span>
                <span className="profile-meta-value" style={{ textAlign: 'right' }}>
                  {profileData.institution.split(',')[0]}
                </span>
              </li>
              <li className="profile-meta-item">
                <span className="profile-meta-label">Location</span>
                <span className="profile-meta-value">{profileData.location}</span>
              </li>
              <li className="profile-meta-item">
                <span className="profile-meta-label">Email</span>
                <span className="profile-meta-value" style={{ fontSize: '0.85rem' }}>
                  {profileData.email}
                </span>
              </li>
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Button
                variant="primary"
                size="md"
                icon={<Download size={16} />}
                onClick={() => setResumeOpen(true)}
                style={{ width: '100%' }}
              >
                Download Resume (CV)
              </Button>
            </div>
          </div>
        </div>

        {/* Education Timeline Section */}
        <div style={{ marginTop: '3.5rem' }}>
          <SectionTitle
            tag="Academic Path"
            title="Education Timeline"
            subtitle="My formal educational qualifications, milestone institutions, and scholastic achievements."
            center={false}
          />

          <div className="timeline-wrapper">
            {profileData.education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className={`timeline-dot ${item.current ? 'current' : ''}`}></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <p className="timeline-inst">{item.institution}</p>
                  <span className="timeline-score">{item.score}</span>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Interests Section */}
        <div style={{ marginTop: '4.5rem' }}>
          <SectionTitle
            tag="Focus Areas"
            title="Technical & Research Interests"
            subtitle="Topics I continuously explore through independent coursework, competitive hackathons, and open source."
            center={false}
          />

          <div className="interests-grid">
            {profileData.technicalInterests.map((interest, idx) => (
              <div key={idx} className="interest-tag">
                <Compass size={16} color="var(--accent-primary)" />
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
