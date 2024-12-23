import ConsenHead from "@/src/ConsenHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import { Fragment, useState } from "react";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  const [maintenance, setMaintenance] = useState(true);  // Maintenance state

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (maintenance) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100vh', margin: 0, fontFamily: 'Arial, sans-serif',
        textAlign: 'center', backgroundColor: '#f4f4f4'
      }}>
        <div style={{
          maxWidth: '600px', padding: '40px', backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px'
        }}>
          <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '10px' }}>Under Maintenance</h1>
          <p style={{ color: '#555', fontSize: '1.2rem' }}>
            We are currently performing updates.<br />
            Please check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <ConsenHead />
      {loading && <Preloader />}  {/* Show Preloader during loading */}
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
