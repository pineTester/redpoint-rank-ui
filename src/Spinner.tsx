import React from 'react';

const Spinner: React.FC = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // translucent gray
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // sits on top of all other content
    pointerEvents: 'all', // captures all interaction
  }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid #ccc',
        borderTop: '4px solid #333',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        backgroundColor: 'white',
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Spinner;
