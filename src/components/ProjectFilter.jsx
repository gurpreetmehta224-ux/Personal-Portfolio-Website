import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * Project Filter & Search Control Component
 * Manages category pills and real-time textual search filter.
 * 
 * Demonstrates:
 * - Controlled input handling with useState
 * - Category filter events triggering parent state updates
 * - Dynamic list rendering with map()
 */
export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  resultsCount
}) {
  return (
    <div className="projects-control-bar">
      {/* Search Input Box */}
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search projects by title or technology (e.g. React, Python, ML)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search projects by title or technology"
        />
        {searchQuery && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onClearSearch}
            aria-label="Clear search input"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="filter-tabs" role="tablist" aria-label="Project Categories">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-tab ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Real-time Match Count Feedback */}
      <div className="projects-results-count">
        Showing <strong>{resultsCount}</strong> {resultsCount === 1 ? 'project' : 'projects'}
        {activeCategory !== 'all' && ` in "${activeCategory}"`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>
    </div>
  );
}
