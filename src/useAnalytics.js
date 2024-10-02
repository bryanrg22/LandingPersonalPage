const useAnalytics = () => {
  const pageView = (title, path) => {
    try {
      window.gtag('config', 'G-GZY94HXVBB', {
        page_title: title,
        page_path: path,
      });
      console.log('Page view tracked:', title, path);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const event = ({ action, category, label, value }) => {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
      console.log('Event tracked:', action, category, label, value);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  return { pageView, event };
};

export default useAnalytics;