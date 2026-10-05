import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profileData } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Reusable Footer Component
 * Displays brand summary, navigation links, social channels, and copyright notice.
 */
export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="navbar-brand" style={{ marginBottom: '1rem' }}>
              <div className="navbar-brand-logo">
                <Code2 size={20} />
              </div>
              <span>
                {profileData.name}
                <span className="text-gradient">.dev</span>
              </span>
            </Link>
            <p>{profileData.shortBio}</p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="footer-link">
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect Column */}
          <div className="footer-nav-col">
            <h4>Connect</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={16} />
                  <span>{profileData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with ReactJS, Vite & Modern CSS <Heart size={14} color="#ef4444" fill="#ef4444" /> for Full Stack Task 2
          </p>
        </div>
      </div>
    </footer>
  );
}
