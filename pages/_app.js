import React from 'react';
import { WrenchIcon, ClockIcon } from 'lucide-react';

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState(true);
  const [maintenance, setMaintenance] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (maintenance) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #EBF5FF, #FFFFFF)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '42rem',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '2rem',
            position: 'relative'
          }}>
            {/* Icon Container */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                position: 'relative',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}>
                <WrenchIcon 
                  style={{
                    width: '4rem',
                    height: '4rem',
                    color: '#2563EB',
                    animation: 'spin 8s linear infinite'
                  }} 
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1.5rem'
            }}>
              Site Maintenance in Progress
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: '1.25rem',
              color: '#4B5563',
              marginBottom: '1rem'
            }}>
              We're working hard to improve your experience
            </p>

            {/* Time Estimate */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#6B7280',
              marginBottom: '2rem'
            }}>
              <ClockIcon style={{ width: '1.25rem', height: '1.25rem' }} />
              <span>Expected downtime: 2 hours</span>
            </div>

            {/* Info Box */}
            <div style={{
              backgroundColor: '#EBF5FF',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1E3A8A',
                marginBottom: '1rem',
                textAlign: 'left'
              }}>
                What's happening?
              </h2>
              <ul style={{
                color: '#1E40AF',
                textAlign: 'left',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Upgrading our systems for better performance',
                  'Implementing new security features',
                  'Enhancing user experience'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div style={{ color: '#4B5563' }}>
              <p>Thank you for your patience!</p>
              <p style={{ 
                marginTop: '0.5rem',
                fontSize: '0.875rem' 
              }}>
                For urgent inquiries, please contact{' '}
                <a 
                  href="mailto: telimissionhills.co@gmail.com" 
                  style={{
                    color: '#2563EB',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                   telimissionhills.co@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ConsenHead />
      {loading && <Preloader />}
      <Component {...pageProps} />
    </>
  );
};

export default App;