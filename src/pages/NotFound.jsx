import React, { useEffect } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';
import { profileData } from '../data/profile';

/**
 * 404 Not Found Page Component
 * Handles invalid or unregistered routes gracefully.
 */
export default function NotFound() {
  useEffect(() => {
    document.title = `404 - Page Not Found | ${profileData.name}`;
  }, []);

  return (
    <div className="section not-found-page">
      <div className="container">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page or route you are looking for doesn't exist, has been removed, or is
          temporarily unavailable. Let's get you back on track!
        </p>
        <Button to="/" variant="primary" size="lg" icon={<HomeIcon size={18} />}>
          Return to Home
        </Button>
      </div>
    </div>
  );
}
