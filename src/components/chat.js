import React, { useEffect } from 'react';

export const TawkToScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6658a51e9a809f19fb37023e/1hv54a0fh';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Wait for Tawk.to to load and then customize the widget
    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = () => {
          window.Tawk_API.setAttributes({
            widget: {
              background: 'pink', // Set the background color here (example: red)
            }
          }, (error) => {
            if (error) {
              console.error('Error setting Tawk.to widget attributes:', error);
            }
          });
        };
      }
    };

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
