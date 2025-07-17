export const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url('/zoltan-tasi-QxjEi8Fs9Hg-unsplash.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',  backgroundColor: 'rgba(0, 0, 0, .3)',}}>

   
      {/* <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#fff', borderBottom: '1px solid #ddd', fontWeight: '600' }}>
        <div style={{ fontSize: '24px',  }}>Redpoint Rank</div>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#how" style={{ textDecoration: 'none', color: '#000' }}>How It Works</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#000' }}>About</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</a>
        </nav>
      </header> */}
      <main style={{
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // vertical centering
         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        flex: 1,
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '56px',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          paddingBottom: '28px',
        }}>
          Discover Your <span style={{ color: '#f00'
            }}>Climbing Rank</span>
        </h1>
        <a
          href="/rank"
          style={{
            display: 'inline-block',
            backgroundColor: '#f00',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '12px',
            fontSize: '24px',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
            transition: 'box-shadow 0.2s ease-in-out',
            fontFamily: 'Arial, sans-serif',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            textAlign: 'center',
            margin: '0 auto',
            maxWidth: '300px'
          }}
          >
          Get Your Rank
        </a>
      </main>
     
      {/* <footer style={{ 
        marginTop: 'auto', 
        color: 'rgba(255, 255, 255, 0.59)'
       }}>
        <p style={{ textAlign: 'center', 
          fontSize: '14px',
          paddingBottom: '0px'
        }}>
          &copy; {new Date().getFullYear()} Redpoint Rank. All rights reserved. 
        </p>
        <p style={{ textAlign: 'center', padding: '0 20px',
          fontSize: '12px'
        }}>
          Made with ❤️ by Austin Yugen
        </p>
      </footer> */}
          </div>
    </div>
  );
};