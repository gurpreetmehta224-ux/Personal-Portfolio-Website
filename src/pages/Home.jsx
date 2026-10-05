import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Award, Terminal } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import ResumeModal from '../components/ResumeModal';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';

/**
 * Home Page Component
 * Main landing page featuring Hero banner, quick about overview,
 * featured projects showcase, and call-to-action blocks.
 */
export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Update document title on page load using useEffect
  useEffect(() => {
    document.title = `${profileData.name} | Full Stack Developer & AI Portfolio`;
  }, []);

  // Filter top 3 featured projects for the landing preview using filter() and slice()
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* Brief Highlights / Introduction Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionTitle
            tag="Introduction"
            title="Building Modern Web & Intelligent Systems"
            subtitle="Bridging software engineering, intuitive user experiences, and applied machine learning to solve real-world challenges."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            <div className="about-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="contact-detail-icon">
                  <Code2 size={20} />
                </div>
                <h3 style={{ margin: 0 }}>Full-Stack Web Dev</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Developing responsive, modular frontends using ReactJS, modern CSS, and component-driven architecture coupled with RESTful backend microservices.
              </p>
            </div>

            <div className="about-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="contact-detail-icon">
                  <Terminal size={20} />
                </div>
                <h3 style={{ margin: 0 }}>Applied AI & ML</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Training regression models, ensemble classifiers, and computer vision pipelines for real-world automated transit, healthcare, and satellite analysis.
              </p>
            </div>

            <div className="about-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="contact-detail-icon">
                  <Award size={20} />
                </div>
                <h3 style={{ margin: 0 }}>Hackathons & Teamwork</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                National hackathon winner with experience rapidly prototyping end-to-end solutions, collaborating across cross-functional teams, and presenting to judges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            tag="Selected Works"
            title="Featured Engineering Projects"
            subtitle="A curated showcase of full-stack platforms, machine learning models, and hackathon prototypes."
          />

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore All Projects & Filter by Tech
            </Button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem' }}>
            Let's Collaborate On Something Great
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Whether you have an internship opportunity, a project proposal, or just want to chat about ReactJS and AI architectures, I'm always open to connecting.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" variant="primary" size="lg">
              Send a Message
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              Read My Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
