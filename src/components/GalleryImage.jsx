import React, { useState } from "react";
import { Eye, Milk, Image as ImageIcon } from "lucide-react";

export default function GalleryImage({
  src,
  alt,
  height = "220px",
  categoryLabel,
  showZoomBadge = true,
  className = ""
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`gallery-image-wrapper ${className}`}
      style={{
        height,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Category Pill Badge */}
      {categoryLabel && (
        <span
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            zIndex: 2,
            background: "rgba(15, 23, 42, 0.78)",
            backdropFilter: "blur(6px)",
            color: "#FFFFFF",
            padding: "0.25rem 0.65rem",
            borderRadius: "9999px",
            fontSize: "0.725rem",
            fontWeight: 600,
            letterSpacing: "0.3px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
          }}
        >
          {categoryLabel}
        </span>
      )}

      {/* Actual Image */}
      {!hasError && src ? (
        <>
          <img
            src={src}
            alt={alt || "Dairy equipment photo"}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
              opacity: isLoaded ? 1 : 0.7
            }}
            className="gallery-card-img"
          />
          {showZoomBadge && (
            <div
              className="gallery-zoom-badge"
              style={{
                position: "absolute",
                bottom: "0.75rem",
                right: "0.75rem",
                zIndex: 2,
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                color: "var(--deep-blue, #0284C7)",
                padding: "0.3rem 0.65rem",
                borderRadius: "var(--radius-sm, 6px)",
                fontSize: "0.75rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
              }}
            >
              <Eye size={13} />
              <span>View</span>
            </div>
          )}
        </>
      ) : (
        /* Fallback Graphic */
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--deep-blue, #0284C7)",
            padding: "1.5rem",
            textAlign: "center"
          }}
        >
          <Milk size={44} />
          {categoryLabel && (
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
                marginTop: "0.5rem"
              }}
            >
              {categoryLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
