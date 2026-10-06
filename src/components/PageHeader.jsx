import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageHeader({ 
  title, 
  subtitle, 
  breadcrumbs = [],
  actionButton = null 
}) {
  return (
    <section 
      style={{
        background: "radial-gradient(circle at 85% 15%, #1F1F1F 0%, #0D0D0D 60%, #000000 100%)",
        color: "#ffffff",
        padding: "3.5rem 0 3.75rem 0",
        position: "relative",
        borderBottom: "3px solid var(--brand-red)"
      }}
      aria-label="Page header"
    >
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav 
          aria-label="Breadcrumb" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            fontSize: "0.8125rem", 
            color: "#A3A3A3",
            marginBottom: "1rem" 
          }}
        >
          <Link 
            to="/" 
            style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#E5E7EB" }}
          >
            <Home size={14} />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={14} opacity={0.6} />
              {crumb.link ? (
                <Link to={crumb.link} style={{ color: "#E5E7EB" }}>
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "var(--brand-red)", fontWeight: 700 }}>{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{ fontSize: "1.1rem", color: "#E2E8F0", lineHeight: "1.6" }}>
                {subtitle}
              </p>
            )}
          </div>

          {actionButton && (
            <div>{actionButton}</div>
          )}
        </div>
      </div>
    </section>
  );
}
