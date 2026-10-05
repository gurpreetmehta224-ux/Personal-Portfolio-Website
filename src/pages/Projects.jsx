import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import Button from '../components/Button';
import { projectCategories, projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import { RotateCcw, FolderOpen } from 'lucide-react';

/**
 * Projects Page Component
 * Interactive portfolio gallery featuring:
 * - Real-time textual search filter (searches title and technologies)
 * - Category filtering (All, Web Development, Machine Learning, Hackathon, Other)
 * - JavaScript filter() and map() array methods
 * - Empty state with quick reset handler
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = `Projects Showcase | ${profileData.name}`;
  }, []);

  // Filter projects by both category and search query using filter()
  const filteredProjects = projectsData.filter((project) => {
    // 1. Category match check
    const matchesCategory =
      activeCategory === 'all' || project.category === activeCategory;

    // 2. Search query match check (case-insensitive across title and technologies)
    const query = searchQuery.trim().toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDescription = project.description.toLowerCase().includes(query);
    const matchesTechnology = project.technologies.some((tech) =>
      tech.toLowerCase().includes(query)
    );

    const matchesSearch =
      query === '' || matchesTitle || matchesDescription || matchesTechnology;

    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Explore my technical creations spanning automated scheduling, assistive healthcare AI, computer vision, and full-stack web portals."
        />

        {/* Search and Category Filter Controls */}
        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
          resultsCount={filteredProjects.length}
        />

        {/* Projects Grid or No Results Message */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <FolderOpen
              size={48}
              color="var(--accent-primary)"
              style={{ margin: '0 auto 1rem auto', opacity: 0.8 }}
            />
            <h4>No projects match your filter criteria</h4>
            <p>
              We couldn't find any projects matching &ldquo;{searchQuery}&rdquo; in category &ldquo;
              {activeCategory}&rdquo;. Try tweaking your search keywords or resetting filters.
            </p>
            <Button
              variant="secondary"
              icon={<RotateCcw size={16} />}
              onClick={handleResetFilters}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
