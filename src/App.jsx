import React, { useState, useEffect } from 'react';

// Ashcore Digital Solution Tool Hub
// Matching the main ashcore.co.uk brand palette

export default function AshcoreToolHub() {
  const [hoveredTile, setHoveredTile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const tools = [
    {
      id: 'fsa',
      title: 'Financial Statement Automation',
      subtitle: 'Streamline your financial reporting',
      description: 'Automate the preparation of financial statements with intelligent data processing and professional templates.',
      icon: '📊',
      url: 'https://app.ashcore.co.uk',
      status: 'live'
    },
    {
      id: 'recon',
      title: 'Bank Statement Reconciliation',
      subtitle: 'Match transactions effortlessly',
      description: 'Import bank statements and cash books, auto-match transactions, and generate professional reconciliation packs.',
      icon: '🏦',
      url: 'https://recon.ashcore.co.uk',
      status: 'live'
    },
    {
      id: 'coming1',
      title: 'More Tools Coming Soon',
      subtitle: 'Expanding our toolkit',
      description: 'We\'re building more powerful tools to help streamline your accounting and finance workflows.',
      icon: '🚀',
      url: null,
      status: 'coming'
    }
  ];

  // Brand colors - VIBRANT orange from logo
  const colors = {
    cream: '#fdf8f3',
    orange: '#f26522',       // Vibrant orange from logo
    orangeLight: '#ff7f3f',
    orangePale: '#fff4ed',
    black: '#1a1a1a',        // Near black for "core"
    gray: '#555555',
    grayLight: '#888888',
    white: '#ffffff'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.cream,
      fontFamily: "'Inter', -apple-system, sans-serif",
      color: colors.black,
      position: 'relative'
    }}>
      {/* Subtle Grid Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      {/* Header */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Logo - Black circle with orange donut inside (thick ring with small hole) */}
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: `2.5px solid ${colors.black}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Orange donut - thick filled ring with small white center */}
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: colors.orange,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Small white hole in center */}
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: colors.white
              }} />
            </div>
          </div>
          {/* Text: "ash" in ORANGE, "core" in BLACK */}
          <span style={{
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            <span style={{ color: colors.orange }}>ash</span>
            <span style={{ color: colors.black }}>core</span>
          </span>
        </div>
        
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="https://ashcore.co.uk" style={{
            color: colors.gray,
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}>
            Main Site ↗
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '70px 48px 100px'
      }}>
        {/* Hero Section */}
        <section style={{
          marginBottom: '60px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '700',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-2px'
          }}>
            <span style={{ color: colors.black }}>Tool </span>
            <span style={{ color: colors.orange }}>Hub</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.gray,
            lineHeight: 1.7,
            maxWidth: '550px',
            fontWeight: '400'
          }}>
            Simple digital finance & tax tools for Malaysian businesses. 
            Select a tool below to get started.
          </p>
        </section>

        {/* Tools Grid */}
        <section style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                style={{
                  position: 'relative',
                  background: colors.white,
                  borderRadius: '20px',
                  padding: '32px',
                  minHeight: '280px',
                  cursor: tool.url ? 'pointer' : 'default',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: hoveredTile === tool.id 
                    ? `2px solid ${colors.orange}` 
                    : '2px solid rgba(0,0,0,0.06)',
                  boxShadow: hoveredTile === tool.id 
                    ? `0 20px 40px -15px rgba(242, 101, 34, 0.3), 0 0 0 1px rgba(242, 101, 34, 0.1)`
                    : '0 2px 12px -4px rgba(0,0,0,0.08)',
                  transform: hoveredTile === tool.id ? 'translateY(-6px)' : 'translateY(0)',
                  animation: `fadeInUp 0.6s ease forwards`,
                  animationDelay: `${0.5 + index * 0.1}s`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredTile(tool.id)}
                onMouseLeave={() => setHoveredTile(null)}
                onClick={() => tool.url && window.open(tool.url, '_blank')}
              >
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  background: tool.status === 'live' 
                    ? colors.orangePale
                    : 'rgba(0,0,0,0.04)',
                  color: tool.status === 'live' ? colors.orange : colors.grayLight,
                  border: `1px solid ${tool.status === 'live' ? 'rgba(242, 101, 34, 0.25)' : 'rgba(0,0,0,0.06)'}`
                }}>
                  {tool.status === 'live' ? '● Live' : '○ Coming Soon'}
                </div>

                {/* Icon */}
                <div style={{
                  fontSize: '44px',
                  marginBottom: '20px',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: hoveredTile === tool.id ? 'scale(1.15)' : 'scale(1)'
                }}>
                  {tool.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '6px',
                    color: hoveredTile === tool.id ? colors.orange : colors.black,
                    transition: 'color 0.3s ease',
                    lineHeight: 1.3,
                    letterSpacing: '-0.3px'
                  }}>
                    {tool.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: colors.orange,
                    marginBottom: '14px',
                    fontWeight: '600'
                  }}>
                    {tool.subtitle}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: colors.gray,
                    lineHeight: 1.65,
                    fontWeight: '400'
                  }}>
                    {tool.description}
                  </p>
                </div>

                {/* Action */}
                {tool.url && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colors.orange,
                    opacity: hoveredTile === tool.id ? 1 : 0.8,
                    transform: hoveredTile === tool.id ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span>Launch Tool</span>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                )}

                {/* Bottom Accent Line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: colors.orange,
                  borderRadius: '0 0 18px 18px',
                  opacity: hoveredTile === tool.id ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 10,
        padding: '40px 48px',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease 0.8s'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '14px',
            color: colors.grayLight,
            fontWeight: '400'
          }}>
            © {new Date().getFullYear()} Ashcore Digital Solution. All rights reserved.
          </p>
          <p style={{
            fontSize: '13px',
            color: colors.grayLight,
            fontWeight: '400'
          }}>
            Simple digital finance & tax systems for Malaysian businesses.
          </p>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        a:hover {
          color: #f26522 !important;
        }
      `}</style>
    </div>
  );
}
