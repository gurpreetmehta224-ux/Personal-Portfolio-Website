import React from 'react';
import { X, Download, FileText, GraduationCap, Briefcase } from 'lucide-react';
import Button from './Button';
import { profileData } from '../data/profile';

/**
 * Resume Preview & Download Modal Component
 * Renders an accessible modal with formatted resume highlights and a simulated PDF download.
 */
export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    // Generate a simple text-based resume file for download demonstration
    const resumeContent = `
============================================================
${profileData.name.toUpperCase()} - RESUME
${profileData.role}
Email: ${profileData.email} | Phone: ${profileData.phone}
LinkedIn: ${profileData.linkedin} | GitHub: ${profileData.github}
============================================================

EDUCATION:
${profileData.education
  .map(
    (e) => `• ${e.degree}\n  ${e.institution} (${e.period})\n  Score: ${e.score}\n`
  )
  .join('\n')}

CAREER OBJECTIVE:
${profileData.careerObjective}

TECHNICAL SKILLS:
- Languages: Python, JavaScript ES6+, C/C++, SQL, HTML5, CSS3
- Frameworks & Libraries: ReactJS, FastAPI, Node.js, Express, Streamlit
- Machine Learning: Scikit-Learn, Pandas, NumPy, OpenCV, Data Preprocessing
- Tools: Git, GitHub, VS Code, Postman, Vite

AREAS OF INTEREST:
${profileData.technicalInterests.map((t) => `• ${t}`).join('\n')}
============================================================
Generated via Personal Portfolio Website (Full Stack Task 2)
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profileData.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close resume preview"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.15)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FileText size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Resume Overview</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Curriculum Vitae for {profileData.name}
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={18} color="var(--accent-primary)" />
            Education
          </h4>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            {profileData.degree}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            {profileData.institution} &bull; {profileData.year}
          </p>
          <span className="timeline-score" style={{ marginBottom: '1.25rem' }}>
            CGPA: 9.12 / 10.0
          </span>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Briefcase size={18} color="var(--accent-primary)" />
            Professional Summary
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {profileData.careerObjective}
          </p>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
            Core Technical Highlights
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
            {['ReactJS', 'Python', 'Machine Learning', 'FastAPI', 'Node.js', 'MySQL', 'Git', 'Data Structures'].map((skill) => (
              <span key={skill} className="tech-pill">
                {skill}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="primary"
              icon={<Download size={16} />}
              onClick={handleSimulateDownload}
            >
              Download Resume File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
