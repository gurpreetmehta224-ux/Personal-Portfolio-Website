import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock, School } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { profileData } from '../data/profile';

/**
 * Contact Page Component
 * Two-column desktop layout containing:
 * - Left column: Controlled contact form with client-side validation
 * - Right column: Contact details, institution info, response SLA, and social media buttons
 */
export default function Contact() {
  useEffect(() => {
    document.title = `Contact Me | ${profileData.name}`;
  }, []);

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          tag="Get in Touch"
          title="Let's Start a Conversation"
          subtitle="Feel free to drop a message regarding internship opportunities, project collaborations, or technical queries."
        />

        <div className="contact-layout">
          {/* Left Column: Client-Side Validated Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Column: Contact Information Cards & Socials */}
          <div className="contact-info-container">
            <div className="contact-info-card">
              <h3>
                <MessageSquare size={20} color="var(--accent-primary)" />
                Direct Contact Channels
              </h3>

              <ul className="contact-details-list">
                <li className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-label">Email Address</div>
                    <a href={`mailto:${profileData.email}`} className="contact-detail-val">
                      {profileData.email}
                    </a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-val">{profileData.phone}</div>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <School size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-label">Campus & Department</div>
                    <div className="contact-detail-val">
                      {profileData.degree}
                      <br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {profileData.institution}
                      </span>
                    </div>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-label">Location</div>
                    <div className="contact-detail-val">{profileData.location}</div>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-label">Response Time</div>
                    <div className="contact-detail-val">Usually responds within 24 hours</div>
                  </div>
                </li>
              </ul>

              <h4 style={{ marginTop: '2rem', marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: 700 }}>
                Professional Networks
              </h4>
              <div className="social-buttons-grid">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
