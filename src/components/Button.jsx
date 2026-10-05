import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * Supports standard button actions and React Router navigation links.
 * 
 * Props:
 * - children: Button label or inner elements
 * - variant: 'primary' | 'secondary' | 'outline' | 'danger'
 * - size: 'sm' | 'md' | 'lg'
 * - to: optional router destination path (renders <Link>)
 * - href: optional external link URL (renders <a>)
 * - icon: optional leading icon element
 * - onClick: click event handler function
 * - type: HTML button type ('button' | 'submit' | 'reset')
 * - disabled: boolean disable state
 * - className: additional custom CSS classes
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  // If internal route destination provided, render React Router Link
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  // If external URL provided, render standard anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  // Default interactive HTML button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
