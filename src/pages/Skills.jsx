import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories, skillsData } from '../data/skills';
import { profileData } from '../data/profile';

/**
 * Skills Page Component
 * Demonstrates:
 * - Dynamic category filtering using React useState and JavaScript filter()
 * - Array rendering with map()
 * - Visual proficiency indicators
 * - Interactive filter tabs
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = `Skills & Technologies | ${profileData.name}`;
  }, []);

  // Filter skills dynamically using JavaScript Array.prototype.filter()
  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          tag="Competencies"
          title="Skills & Technologies"
          subtitle="Explore my core programming languages, frontend and backend stacks, AI/ML models, and developer tools."
        />

        {/* Category Filter Pills */}
        <div className="filter-tabs" role="tablist" aria-label="Skill Categories">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filter Feedback Indicator */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Displaying <strong>{filteredSkills.length}</strong> {filteredSkills.length === 1 ? 'skill' : 'skills'}
          {activeCategory !== 'all' && (
            <span> in category &ldquo;{skillCategories.find((c) => c.id === activeCategory)?.label}&rdquo;</span>
          )}
        </div>

        {/* Skills Cards Grid rendered with map() */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
