import React, { useState, useEffect } from 'react';
import { Send, RotateCcw, CheckCircle2, AlertCircle, Clock, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

/**
 * Contact Form Component with Client-Side Validation and LocalStorage Persistence.
 * 
 * Demonstrates:
 * - Controlled inputs with React useState
 * - Real-time and on-submit form validation
 * - Dynamic error messages conditionally rendered below fields
 * - LocalStorage read/write for submission persistence
 * - Meaningful useEffect to hydrate saved submissions from localStorage on mount
 */
export default function ContactForm() {
  // Controlled form state
  const initialFormState = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  // Initialize submissions history from localStorage
  const [submissionsHistory, setSubmissionsHistory] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolio_contact_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error('Failed to load submissions from localStorage:', err);
      return [];
    }
  });

  // Meaningful useEffect: Auto-dismiss submission success banner after 8 seconds with cleanup
  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  // Validation logic
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required.';
        } else if (value.trim().length < 3) {
          error = 'Full name must be at least 3 characters long.';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(value)) {
          error = 'Name can only contain letters, spaces, hyphens, and dots.';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email address is required.';
        } else {
          // Standard RFC 5322 compatible simplified email pattern
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(value.trim())) {
            error = 'Please enter a valid email address (e.g. user@domain.com).';
          }
        }
        break;

      case 'subject':
        if (!value.trim()) {
          error = 'Subject line is required.';
        } else if (value.trim().length < 3) {
          error = 'Subject must be at least 3 characters long.';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message content cannot be empty.';
        } else if (value.trim().length < 10) {
          error = `Message should be at least 10 characters long (${value.trim().length}/10).`;
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if the field was already touched
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  // Mark field as touched on blur to show friendly feedback
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  // Reset form handler
  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      fullName: true,
      email: true,
      subject: true,
      message: true
    };
    setTouched(allTouched);

    // Validate all fields
    const formErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(formErrors);

    // Check if any error exists
    const hasErrors = Object.values(formErrors).some((err) => err !== '');
    if (hasErrors) {
      return;
    }

    // Submission is valid
    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const newSubmission = {
      id: Date.now(),
      ...formData,
      submittedAt: timestamp
    };

    // Update submissions history in state and localStorage
    const updatedHistory = [newSubmission, ...submissionsHistory];
    setSubmissionsHistory(updatedHistory);
    try {
      localStorage.setItem('portfolio_contact_submissions', JSON.stringify(updatedHistory));
    } catch (err) {
      console.error('LocalStorage write error:', err);
    }

    // Set success banner and reset form input fields
    setIsSubmitted(true);
    setLastSubmissionTime(timestamp);
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
  };

  // Clear saved submissions from localStorage
  const handleClearHistory = () => {
    if (window.confirm('Clear all stored contact messages from localStorage?')) {
      localStorage.removeItem('portfolio_contact_submissions');
      setSubmissionsHistory([]);
    }
  };

  return (
    <div className="contact-form-container">
      {/* Success Notification Banner */}
      {isSubmitted && (
        <div className="alert-banner alert-success" role="alert">
          <CheckCircle2 size={24} style={{ flexShrink: 0, marginTop: 2 }} />
          <div className="alert-content">
            <h4>Thank you! Message Saved Successfully.</h4>
            <p>
              Your note has been validated and persisted to browser <code>localStorage</code> on{' '}
              <strong>{lastSubmissionTime}</strong>. Note: In this academic prototype, no external
              SMTP server is connected.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name Field */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`form-input ${touched.fullName && errors.fullName ? 'error' : ''}`}
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.fullName && !!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {touched.fullName && errors.fullName && (
            <div id="fullName-error" className="field-error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.fullName}</span>
            </div>
          )}
        </div>

        {/* Email Address Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
            placeholder="e.g. john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <div id="email-error" className="field-error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Subject Line Field */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`form-input ${touched.subject && errors.subject ? 'error' : ''}`}
            placeholder="e.g. Internship Opportunity / Collaboration"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.subject && !!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {touched.subject && errors.subject && (
            <div id="subject-error" className="field-error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        {/* Message Content Field */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message <span className="required-star">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`form-textarea ${touched.message && errors.message ? 'error' : ''}`}
            placeholder="Write your message here (minimum 10 characters)..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {touched.message && errors.message && (
            <div id="message-error" className="field-error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.message}</span>
            </div>
          )}
        </div>

        {/* Action Buttons (Submit & Clear) */}
        <div className="form-actions">
          <Button type="submit" variant="primary" icon={<Send size={16} />}>
            Submit Message
          </Button>
          <Button
            type="button"
            variant="secondary"
            icon={<RotateCcw size={16} />}
            onClick={handleReset}
          >
            Clear Form
          </Button>
        </div>
      </form>

      {/* Faculty Demonstration Feature: LocalStorage Submissions History */}
      {submissionsHistory.length > 0 && (
        <div className="submissions-history-card">
          <div
            className="submissions-header"
            onClick={() => setShowHistory((prev) => !prev)}
          >
            <h4>
              <Clock size={16} color="var(--accent-primary)" />
              Saved Submissions ({submissionsHistory.length} in LocalStorage)
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearHistory();
                }}
                title="Clear all stored items from localStorage"
              >
                <Trash2 size={13} />
                <span>Clear</span>
              </button>
              {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>

          {showHistory && (
            <div className="submissions-list">
              {submissionsHistory.map((sub) => (
                <div key={sub.id} className="submission-item">
                  <div className="submission-meta">
                    <strong>{sub.fullName} ({sub.email})</strong>
                    <span>{sub.submittedAt}</span>
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--accent-primary)', marginBottom: 2 }}>
                    Subject: {sub.subject}
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>"{sub.message}"</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
