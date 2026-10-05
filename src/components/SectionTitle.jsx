import React from 'react';

/**
 * Reusable Section Title Component
 * Provides consistent typography and hierarchy for page sections.
 * 
 * Props:
 * - tag: Optional category badge text (e.g. 'PORTFOLIO', 'GET IN TOUCH')
 * - title: Main H2 section title
 * - subtitle: Explanatory paragraph text
 * - center: Boolean to toggle center alignment (default: true)
 * - className: Additional CSS class
 */
export default function SectionTitle({
  tag,
  title,
  subtitle,
  center = true,
  className = ''
}) {
  return (
    <div
      className={`section-header ${center ? 'text-center' : ''} ${className}`.trim()}
      style={!center ? { textAlign: 'left', margin: '0 0 2.5rem 0' } : {}}
    >
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
