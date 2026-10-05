import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Github } from './Icons';
import Button from './Button';

/**
 * Project Card Component
 * Renders individual project card from projectsData array.
 * Demonstrates:
 * - Props passing
 * - Conditional rendering (live demo existence, award winner badge)
 * - Array mapping for technology tags
 * 
 * Props:
 * - project: Object containing { title, category, badge, status, description, technologies, githubUrl, liveDemoUrl, metrics }
 */
export default function ProjectCard({ project }) {
  const {
    title,
    category,
    badge,
    status,
    description,
    technologies,
    githubUrl,
    liveDemoUrl,
    metrics
  } = project;

  const isAward = status === 'Award Winning';

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className={`project-badge ${isAward ? 'winner' : ''}`}>
          {isAward && <Award size={12} style={{ display: 'inline', marginRight: 4 }} />}
          {badge || category}
        </span>
        <span className="project-status">
          <span className="badge-dot" style={{ width: 6, height: 6 }}></span>
          {status}
        </span>
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      {metrics && (
        <div className="project-metrics">
          <strong>Impact:</strong> {metrics}
        </div>
      )}

      {/* Technology Badges rendered via map() */}
      <div className="project-tech-list">
        {technologies.map((tech, index) => (
          <span key={index} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="project-links">
        {githubUrl && (
          <Button
            href={githubUrl}
            variant="secondary"
            size="sm"
            icon={<Github size={15} />}
          >
            Code
          </Button>
        )}
        {liveDemoUrl && (
          <Button
            href={liveDemoUrl}
            variant="primary"
            size="sm"
            icon={<ExternalLink size={15} />}
          >
            Demo
          </Button>
        )}
      </div>
    </article>
  );
}
