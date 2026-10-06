import React, { useState } from "react";
import { 
  Milk, 
  Activity, 
  Filter, 
  Snowflake, 
  Layers, 
  Cog, 
  Scissors, 
  Wrench,
  ShieldCheck
} from "lucide-react";

/**
 * High-quality Product Image component with automatic SVG illustration fallback.
 * Ensures the product cards never look broken or blank even before client photos are loaded.
 */
export default function ProductImage({ src, alt, category, className = "", height = "220px" }) {
  const [hasError, setHasError] = useState(false);

  // Fallback themes based on equipment category (Red, Black & White Brand Identity)
  const categoryThemes = {
    "milking-machines": {
      icon: Milk,
      bg: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)",
      accent: "#FE0000",
      pattern: "Milking Technology • SS 304 Grade"
    },
    "milk-analysers-testing": {
      icon: Activity,
      bg: "linear-gradient(135deg, #000000 0%, #171717 100%)",
      accent: "#FE0000",
      pattern: "Ultrasonic Testing • Precision Sensor"
    },
    "cream-separators": {
      icon: Filter,
      bg: "linear-gradient(135deg, #0D0D0D 0%, #202020 100%)",
      accent: "#FE0000",
      pattern: "Centrifugal Separation • High RPM"
    },
    "bulk-milk-coolers": {
      icon: Snowflake,
      bg: "linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 100%)",
      accent: "#FE0000",
      pattern: "Direct Expansion • 4°C Rapid Chilling"
    },
    "milk-cans-storage": {
      icon: Layers,
      bg: "linear-gradient(135deg, #111111 0%, #222222 100%)",
      accent: "#FE0000",
      pattern: "AISI 304 Stainless • Seamless Spun"
    },
    "dairy-processing": {
      icon: Cog,
      bg: "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
      accent: "#FE0000",
      pattern: "Food Grade • Commercial Dairy Processing"
    },
    "chaff-cutters": {
      icon: Scissors,
      bg: "linear-gradient(135deg, #0A0A0A 0%, #181818 100%)",
      accent: "#FE0000",
      pattern: "High Output • Hardened Alloy Blades"
    },
    "spare-parts-accessories": {
      icon: Wrench,
      bg: "linear-gradient(135deg, #000000 0%, #242424 100%)",
      accent: "#FE0000",
      pattern: "Genuine Spares • Original Specs"
    },
    "dairy-equipment": {
      icon: Milk,
      bg: "linear-gradient(135deg, #0D0D0D 0%, #1E1E1E 100%)",
      accent: "#FE0000",
      pattern: "Dairy Equipment • Shed Machinery"
    }
  };

  const theme = categoryThemes[category] || {
    icon: ShieldCheck,
    bg: "linear-gradient(135deg, #0A0A0A 0%, #171717 100%)",
    accent: "#FE0000",
    pattern: "Jagdamb Dairy Equipment"
  };

  const IconComponent = theme.icon;

  // If there is an error loading image, or no src provided, render the premium equipment badge visual
  if (hasError || !src) {
    return (
      <div 
        className={`product-fallback-visual ${className}`}
        style={{ 
          background: theme.bg,
          minHeight: height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          color: "#ffffff",
          padding: "1.5rem"
        }}
      >
        {/* Subtle grid pattern background */}
        <div 
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            opacity: 0.6
          }} 
        />
        
        <div 
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.12)",
            border: `2px solid ${theme.accent}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.85rem",
            position: "relative",
            zIndex: 1,
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
          }}
        >
          <IconComponent size={32} color={theme.accent} />
        </div>

        <span 
          style={{ 
            fontSize: "0.75rem", 
            textTransform: "uppercase", 
            letterSpacing: "1px",
            color: theme.accent,
            fontWeight: 600,
            position: "relative",
            zIndex: 1,
            textAlign: "center"
          }}
        >
          {theme.pattern}
        </span>

        <span 
          style={{ 
            fontSize: "0.95rem", 
            color: "#ffffff",
            fontWeight: 600,
            marginTop: "0.35rem",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: "90%"
          }}
        >
          {alt}
        </span>

        <div
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "0.75rem",
            fontSize: "0.65rem",
            color: "rgba(255, 255, 255, 0.5)",
            zIndex: 1
          }}
        >
          Jagdamb Enterprises
        </div>
      </div>
    );
  }

  return (
    <div className={`product-image-container ${className}`} style={{ minHeight: height, position: "relative", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        loading="lazy"
        style={{
          width: "100%",
          height: height,
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease"
        }}
      />
    </div>
  );
}
