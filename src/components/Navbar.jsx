import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code2, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profileData } from '../data/profile';

/**
 * Sticky Responsive Navigation Bar
 * Features:
 * - React Router NavLink integration with active indicators
 * - Mobile hamburger drawer menu with toggle state
 * - Integrated Dark/Light Theme Switcher
 * - Direct link to central profile configuration data
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Nav links configuration array for clean mapping
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="navbar-brand-logo">
            <Code2 size={20} />
          </div>
          <span>
            {profileData.name.split(' ')[0]}
            <span className="text-gradient">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navbar Action Buttons (Theme Toggle + CTA + Hamburger) */}
        <div className="navbar-actions">
          <ThemeToggle />

          <Link to="/contact" className="btn btn-primary btn-sm navbar-cta">
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} />
              </NavLink>
            </li>
          ))}
          <li style={{ marginTop: '0.5rem' }}>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={closeMobileMenu}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
