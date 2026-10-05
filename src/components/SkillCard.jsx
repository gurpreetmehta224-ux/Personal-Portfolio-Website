import React from 'react';

/**
 * Skill Card Component
 * Renders individual technical skill details including name, proficiency level,
 * animated progress bar, and concise practical description.
 * 
 * Props:
 * - skill: Object containing { name, category, level, proficiency, experience, description }
 */
export default function SkillCard({ skill }) {
  const { name, category, level, proficiency, experience, description } = skill;

  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h3 className="skill-name">{name}</h3>
        <span className="skill-category-badge">{category}</span>
      </div>

      <div className="skill-meta">
        <span className="skill-level-badge">{level} &bull; {experience}</span>
        <span>{proficiency}%</span>
      </div>

      {/* Visual Proficiency Progress Indicator */}
      <div
        className="skill-bar-container"
        role="progressbar"
        aria-valuenow={proficiency}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${name} proficiency: ${proficiency}%`}
      >
        <div
          className="skill-bar-fill"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>

      <p className="skill-description">{description}</p>
    </div>
  );
}
