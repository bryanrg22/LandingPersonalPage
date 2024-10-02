import React from 'react';

const GoogleAnalytics = ({ measurementId }) => {
  React.useEffect(() => {
    try {
      // Load the script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', measurementId);

      console.log('Google Analytics initialized successfully');

      // Cleanup
      return () => {
        document.head.removeChild(script);
      };
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;