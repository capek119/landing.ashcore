import React, { useEffect, useState } from "react";

// Ashcore Digital Solution Tool Hub
// Matching the main ashcore.co.uk brand palette

export default function App() {
  const [hoveredTile, setHoveredTile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const tools = [
    {
      id: "fsa",
      title: "Financial Statement Automation",
      subtitle: "Streamline your financial reporting",
      description:
        "Automate the preparation of financial statements with intelligent data processing and professional templates.",
      icon: "📊",
      url: "https://app.ashcore.co.uk",
      status: "live",
    },
    {
      id: "recon",
      title: "Bank Statement Reconciliation",
      subtitle: "Match transactions effortlessly",
      description:
        "Import bank statements and cash books, auto-match transactions, and generate professional reconciliation packs.",
      icon: "🏦",
      url: "https://recon.ashcore.co.uk",
      status: "live",
    },
    {
      id: "coming1",
      title: "More Tools Coming Soon",
      subtitle: "Expanding our toolkit",
      description:
        "We're building more powerful tools to help streamline your accounting and finance workflows.",
      icon: "🚀",
      url: null,
      status: "coming",
    },
  ];

  // Brand colors - VIBRANT orange from ashcore logo
  const colors = {
    cream: "#fdf8f3",
    creamDark: "#f5ebe0",
    orange: "#f26522",        // Vibrant orange
    orangeLight: "#ff7f3f",
    orangePale: "#fff4ed",
    black: "#1a1a1a",
    gray: "#6b6b6b",
    grayLight: "#9a9a9a",
    white: "#ffffff",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.cream,
        fontFamily: "'Source Serif 4', 'Georgia', serif",
        color: colors.black,
        position: "relative",
      }}
    >
      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Logo - Black circle with orange donut inside */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: `2.5px solid ${colors.black}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Orange donut - filled circle with small white hole */}
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: colors.orange,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Small white center hole */}
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: colors.white,
                }}
              />
            </div>
          </div>
          {/* Text: "ash" in ORANGE, "core" in BLACK */}
          <span
            style={{
              fontSize: "24px",
              fontWeight: "600",
              letterSpacing: "-0.5px",
            }}
          >
            <span style={{ color: colors.orange }}>ash</span>
            <span style={{ color: colors.black }}>core</span>
          </span>
        </div>

        <nav style={{ display: "flex", gap: "32px" }}>
          <a
            href="https://ashcore.co.uk"
            style={{
              color: colors.gray,
              textDecoration: "none",
              fontSize: "15px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              transition: "color 0.2s",
            }}
          >
            Main Site
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 48px 100px",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            marginBottom: "70px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "400",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            <span style={{ color: colors.black }}>Tool </span>
            <span style={{ color: colors.orange, fontStyle: "italic" }}>
              Hub
            </span>
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: colors.gray,
              lineHeight: 1.7,
              maxWidth: "600px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
            }}
          >
            Simple digital finance & tax tools for Malaysian businesses. Select a
            tool below to get started.
          </p>
        </section>

        {/* Tools Grid */}
        <section
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                style={{
                  position: "relative",
                  background: colors.white,
                  borderRadius: "16px",
                  padding: "36px",
                  minHeight: "300px",
                  cursor: tool.url ? "pointer" : "default",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${
                    hoveredTile === tool.id ? colors.orange : "rgba(0,0,0,0.08)"
                  }`,
                  boxShadow:
                    hoveredTile === tool.id
                      ? "0 20px 40px -15px rgba(242, 101, 34, 0.25)"
                      : "0 4px 20px -5px rgba(0,0,0,0.06)",
                  transform:
                    hoveredTile === tool.id ? "translateY(-4px)" : "translateY(0)",
                  animation: "fadeInUp 0.6s ease forwards",
                  animationDelay: `${0.5 + index * 0.1}s`,
                  opacity: 0,
                }}
                onMouseEnter={() => setHoveredTile(tool.id)}
                onMouseLeave={() => setHoveredTile(null)}
                onClick={() => tool.url && window.open(tool.url, "_blank")}
              >
                {/* Status Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.3px",
                    background:
                      tool.status === "live"
                        ? colors.orangePale
                        : "rgba(0,0,0,0.04)",
                    color: tool.status === "live" ? colors.orange : colors.grayLight,
                    border: `1px solid ${
                      tool.status === "live"
                        ? "rgba(242, 101, 34, 0.25)"
                        : "rgba(0,0,0,0.06)"
                    }`,
                  }}
                >
                  {tool.status === "live" ? "● Live" : "○ Coming Soon"}
                </div>

                {/* Icon */}
                <div
                  style={{
                    fontSize: "42px",
                    marginBottom: "24px",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform:
                      hoveredTile === tool.id ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {tool.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "500",
                      marginBottom: "8px",
                      color:
                        hoveredTile === tool.id ? colors.orange : colors.black,
                      transition: "color 0.3s ease",
                      lineHeight: 1.3,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {tool.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: colors.orange,
                      marginBottom: "16px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {tool.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: colors.gray,
                      lineHeight: 1.7,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {tool.description}
                  </p>
                </div>

                {/* Action */}
                {tool.url && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "24px",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "'Inter', sans-serif",
                      color: colors.orange,
                      opacity: hoveredTile === tool.id ? 1 : 0.7,
                      transform:
                        hoveredTile === tool.id
                          ? "translateX(4px)"
                          : "translateX(0)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span>Launch Tool</span>
                    <span style={{ fontSize: "18px" }}>→</span>
                  </div>
                )}

                {/* Bottom Accent Line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "24px",
                    right: "24px",
                    height: "3px",
                    background: colors.orange,
                    borderRadius: "3px 3px 0 0",
                    opacity: hoveredTile === tool.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          padding: "40px 48px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 0.8s",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.grayLight,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © {new Date().getFullYear()} Ashcore Digital Solution. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: colors.grayLight,
              fontFamily: "'Inter', sans-serif",
              fontStyle: "italic",
            }}
          >
            Simple digital finance & tax systems for Malaysian businesses.
          </p>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        a:hover { color: #f26522 !important; }
      `}</style>
    </div>
  );
}
