import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Clock,
  FileText,
  Download,
  ExternalLink,
  Eye,
  Sliders,
  Activity,
  Zap,
  HelpCircle
} from "lucide-react";
import { products } from "../data/products";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink, getProductInquiryMessage } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";
import ProductImage from "../components/ProductImage";
import ProductCard from "../components/ProductCard";
import EnquiryForm from "../components/EnquiryForm";

export default function ProductDetailPage() {
  const { slug } = useParams();

  // Backward-compatible redirect for legacy slug
  if (slug === "essae-ma-815-milk-analyser") {
    return <Navigate to="/product/ma-815bs-milk-analyser-with-stirrer" replace />;
  }

  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(product?.image);
  const [showPdfSection, setShowPdfSection] = useState(true);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product?.slug, product?.image]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const whatsappMessage = getProductInquiryMessage(product);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Related products from same category, excluding current product
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEOHead 
        title={`${product.name} - Technical Specs & Product PDF`}
        description={`${product.name} supplied by ${companyConfig.name} in Baramati, Maharashtra. ${product.shortDescription}`}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.shortDescription,
          "category": product.categoryName,
          "brand": {
            "@type": "Brand",
            "name": companyConfig.name
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "areaServed": companyConfig.serviceArea
          }
        }}
      />

      <PageHeader
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[
          { label: "Products", link: "/products" },
          { label: product.categoryName, link: `/category/${product.category}` },
          { label: product.name }
        ]}
      />

      <section className="section-py" style={{ background: "#FFFFFF" }}>
        <div className="container">
          {/* Main 2-Column Detail Layout */}
          <div className="product-detail-grid">
            {/* Left: Product Visual Presentation & PDF Callout */}
            <div>
              <div 
                style={{ 
                  background: "#FFFFFF", 
                  border: "1px solid #E2E8F0", 
                  borderRadius: "var(--radius-xl)", 
                  overflow: "hidden",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
                  marginBottom: product.gallery && product.gallery.length > 1 ? "0.75rem" : "1.5rem"
                }}
              >
                <ProductImage
                  src={activeImage || product.image}
                  alt={product.name}
                  category={product.category}
                  height="390px"
                />
              </div>

              {/* Gallery Thumbnails if multiple images exist */}
              {product.gallery && product.gallery.length > 1 && (
                <div 
                  style={{ 
                    display: "flex", 
                    gap: "0.65rem", 
                    marginBottom: "1.5rem", 
                    overflowX: "auto", 
                    paddingBottom: "0.35rem" 
                  }}
                >
                  {product.gallery.map((imgUrl, idx) => {
                    const isDimensions = imgUrl.includes("dimensions");
                    const label = isDimensions ? "Dimension Diagram" : "Product Photo";
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(imgUrl)}
                        style={{
                          border: activeImage === imgUrl ? "2px solid var(--primary)" : "1px solid #CBD5E1",
                          borderRadius: "var(--radius-md)",
                          overflow: "hidden",
                          padding: "4px 8px",
                          background: activeImage === imgUrl ? "#F0F9FF" : "#FFFFFF",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: activeImage === imgUrl ? "var(--primary)" : "#475569",
                          flexShrink: 0,
                          transition: "all 0.2s ease"
                        }}
                        aria-label={`View ${label}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.name} ${label}`}
                          style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "4px" }}
                        />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Official Product PDF Card */}
              {product.pdfDocument && (
                <div 
                  style={{ 
                    background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)", 
                    border: "1px solid #BAE6FD", 
                    borderRadius: "var(--radius-xl)", 
                    padding: "1.25rem 1.5rem", 
                    marginBottom: "1.5rem",
                    boxShadow: "0 2px 4px rgba(2, 132, 199, 0.06)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", marginBottom: "1rem" }}>
                    <div 
                      style={{ 
                        width: "42px", 
                        height: "42px", 
                        borderRadius: "10px", 
                        background: "#0284C7", 
                        color: "#FFFFFF", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexShrink: 0 
                      }}
                    >
                      <FileText size={22} />
                    </div>
                    <div>
                      <span 
                        style={{ 
                          display: "inline-block", 
                          background: "#0284C7", 
                          color: "#FFFFFF", 
                          fontSize: "0.7rem", 
                          fontWeight: 700, 
                          padding: "2px 8px", 
                          borderRadius: "10px", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.05em",
                          marginBottom: "0.25rem" 
                        }}
                      >
                        Original Product PDF
                      </span>
                      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", margin: "0.15rem 0 0.2rem" }}>
                        Official Technical Catalogue
                      </h4>
                      <p style={{ fontSize: "0.8125rem", color: "#475569", margin: 0, lineHeight: "1.45" }}>
                        Direct manufacturer document containing technical specifications, sensor parameters, and dimensional schematics.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    <button
                      type="button"
                      onClick={() => scrollToSection("pdf-viewer-section")}
                      className="btn btn-primary btn-sm"
                      style={{ 
                        flex: 1, 
                        minWidth: "150px", 
                        display: "inline-flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "0.45rem",
                        padding: "0.6rem 1rem",
                        fontSize: "0.875rem"
                      }}
                      id="btn-view-pdf"
                    >
                      <Eye size={16} />
                      <span>View Product PDF</span>
                    </button>

                    <a
                      href={product.pdfDocument.url}
                      download={product.pdfDocument.fileName}
                      className="btn btn-secondary btn-sm"
                      style={{ 
                        flex: 1, 
                        minWidth: "150px", 
                        display: "inline-flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "0.45rem",
                        padding: "0.6rem 1rem",
                        fontSize: "0.875rem",
                        background: "#FFFFFF",
                        borderColor: "#BAE6FD",
                        color: "#0369A1"
                      }}
                      id="btn-download-pdf"
                    >
                      <Download size={16} />
                      <span>Download Product PDF</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Service & Delivery Trust Badges */}
              <div 
                style={{ 
                  background: "#F8FAFC", 
                  border: "1px solid #E2E8F0", 
                  borderRadius: "var(--radius-lg)", 
                  padding: "1.25rem", 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.75rem" 
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "#1E293B", fontWeight: 600 }}>
                  <ShieldCheck size={18} color="#0284C7" />
                  <span>Durable SS-304 Housing for Dairy Shed Durability</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "#1E293B", fontWeight: 600 }}>
                  <Truck size={18} color="#0284C7" />
                  <span>Prompt Delivery & Verification Across Maharashtra</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "#1E293B", fontWeight: 600 }}>
                  <Clock size={18} color="#0284C7" />
                  <span>Local Technical Assistance & Ready Spares from Baramati</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Overview & CTAs */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                <Link 
                  to={`/category/${product.category}`}
                  className="product-category-tag"
                  style={{ textDecoration: "underline" }}
                >
                  {product.categoryName}
                </Link>
                {product.badge && (
                  <span className="product-badge gold" style={{ position: "static" }}>
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#0F172A", lineHeight: "1.25", marginBottom: "0.5rem" }}>
                {product.name}
              </h1>

              {product.tagline && (
                <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#0284C7", marginBottom: "1rem" }}>
                  {product.tagline}
                </p>
              )}

              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Conversion CTAs Card */}
              <div 
                style={{ 
                  background: "#FFFFFF", 
                  border: "1px solid #BAE6FD", 
                  borderRadius: "var(--radius-xl)", 
                  padding: "1.5rem", 
                  marginBottom: "2rem", 
                  boxShadow: "0 4px 6px -1px rgba(2, 132, 199, 0.08)" 
                }}
              >
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0284C7", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.85rem" }}>
                  Product Inquiry & Price Request
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                  {/* Enquire Now */}
                  <button
                    type="button"
                    onClick={() => scrollToSection("enquiry-section")}
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1, minWidth: "155px" }}
                    id="btn-enquire-now"
                  >
                    <span>Enquire Now</span>
                  </button>

                  {/* WhatsApp Us */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ flex: 1, minWidth: "165px" }}
                    id="btn-whatsapp-us"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>

                  {/* Get a Quote */}
                  <Link
                    to="/enquiry"
                    className="btn btn-secondary btn-lg"
                    style={{ flex: 1, minWidth: "155px", borderColor: "#CBD5E1" }}
                    id="btn-get-a-quote"
                  >
                    <span>Get a Quote</span>
                  </Link>

                  {/* Call Us */}
                  <a
                    href={getPhoneLink(companyConfig.primaryPhone)}
                    className="btn btn-secondary btn-lg"
                    style={{ padding: "0.85rem 1.15rem", borderColor: "#CBD5E1" }}
                    aria-label="Call Jagdamb Enterprises"
                  >
                    <Phone size={18} />
                    <span>Call Us</span>
                  </a>
                </div>

                <p style={{ fontSize: "0.825rem", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                  Pre-filled WhatsApp enquiry includes model details: <em>"{whatsappMessage}"</em>
                </p>
              </div>

              {/* Key Features Checklist */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.85rem" }}>
                    Key Features & Design Highlights
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {product.features.map((feat, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9375rem", color: "#334155" }}>
                        <CheckCircle2 size={18} color="#0284C7" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ideal Applications */}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>
                    Recommended Applications
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        style={{ 
                          background: "#F0F9FF", 
                          color: "#0369A1", 
                          border: "1px solid #BAE6FD",
                          padding: "0.4rem 0.85rem", 
                          borderRadius: "var(--radius-full)", 
                          fontSize: "0.8125rem", 
                          fontWeight: 600 
                        }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* PARAMETERS MEASURED SPECIFICATION TABLE */}
          {product.measurementParameters && product.measurementParameters.length > 0 && (
            <div style={{ marginTop: "3.5rem", marginBottom: "3.5rem" }}>
              <div style={{ borderBottom: "2px solid #0284C7", paddingBottom: "0.75rem", marginBottom: "1.5rem" }}>
                <span 
                  style={{ 
                    display: "inline-block", 
                    background: "#0284C7", 
                    color: "#FFFFFF", 
                    fontSize: "0.75rem", 
                    fontWeight: 700, 
                    padding: "3px 10px", 
                    borderRadius: "12px", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.05em",
                    marginBottom: "0.35rem"
                  }}
                >
                  Testing Parameters
                </span>
                <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0F172A", margin: "0.25rem 0 0.35rem" }}>
                  Parameters Measured
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "#64748B", margin: 0 }}>
                  High-precision ultrasonic testing parameters, calibrated measurement range, resolution, and accuracy limits.
                </p>
              </div>

              <div style={{ overflowX: "auto", borderRadius: "var(--radius-lg)", border: "1px solid #BAE6FD", boxShadow: "0 2px 4px rgba(0,0,0,0.03)" }}>
                <table 
                  style={{ 
                    width: "100%", 
                    borderCollapse: "collapse", 
                    textAlign: "left",
                    background: "#FFFFFF",
                    fontSize: "0.9375rem"
                  }}
                  aria-label="Measurement Parameters for Milk Analyser"
                >
                  <thead>
                    <tr style={{ background: "#0284C7", color: "#FFFFFF" }}>
                      <th style={{ padding: "0.85rem 1.25rem", fontWeight: 700, borderRight: "1px solid rgba(255,255,255,0.2)" }}>
                        Parameter
                      </th>
                      <th style={{ padding: "0.85rem 1.25rem", fontWeight: 700, borderRight: "1px solid rgba(255,255,255,0.2)" }}>
                        Range
                      </th>
                      <th style={{ padding: "0.85rem 1.25rem", fontWeight: 700, borderRight: "1px solid rgba(255,255,255,0.2)" }}>
                        Resolution
                      </th>
                      <th style={{ padding: "0.85rem 1.25rem", fontWeight: 700 }}>
                        Accuracy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.measurementParameters.map((param, idx) => (
                      <tr 
                        key={idx}
                        style={{ 
                          background: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                          borderBottom: idx === product.measurementParameters.length - 1 ? "none" : "1px solid #E2E8F0"
                        }}
                      >
                        <td style={{ padding: "0.85rem 1.25rem", fontWeight: 700, color: "#0F172A", borderRight: "1px solid #E2E8F0" }}>
                          {param.parameter}
                        </td>
                        <td style={{ padding: "0.85rem 1.25rem", color: "#334155", borderRight: "1px solid #E2E8F0" }}>
                          <span style={{ fontFamily: "monospace", fontWeight: 600, color: "#0284C7" }}>{param.range}</span>
                        </td>
                        <td style={{ padding: "0.85rem 1.25rem", color: "#334155", borderRight: "1px solid #E2E8F0" }}>
                          {param.resolution}
                        </td>
                        <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600, color: "#166534" }}>
                          {param.accuracy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* STIRRER SPECIFICATION SECTION */}
          {product.stirrerSpecifications && product.stirrerSpecifications.length > 0 && (
            <div style={{ marginBottom: "3.5rem" }}>
              <div style={{ borderBottom: "2px solid #0284C7", paddingBottom: "0.75rem", marginBottom: "1.5rem" }}>
                <span 
                  style={{ 
                    display: "inline-block", 
                    background: "#0284C7", 
                    color: "#FFFFFF", 
                    fontSize: "0.75rem", 
                    fontWeight: 700, 
                    padding: "3px 10px", 
                    borderRadius: "12px", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.05em",
                    marginBottom: "0.35rem"
                  }}
                >
                  Integrated Unit
                </span>
                <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0F172A", margin: "0.25rem 0 0.35rem" }}>
                  Ultrasonic Stirrer Specifications
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "#64748B", margin: 0 }}>
                  Destructive type ultrasonic milk stirrer designed to eliminate entrapped air microbubbles and ensure sample homogeneity prior to testing.
                </p>
              </div>

              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                  gap: "1rem" 
                }}
              >
                {product.stirrerSpecifications.map((spec, idx) => (
                  <div 
                    key={idx}
                    style={{ 
                      background: "#FFFFFF", 
                      border: "1px solid #BAE6FD", 
                      borderRadius: "var(--radius-lg)", 
                      padding: "1.15rem 1.25rem",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#475569" }}>
                      {spec.label}
                    </span>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0F172A", textAlign: "right" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GENERAL TECHNICAL SPECIFICATIONS TABLE */}
          {product.specifications && product.specifications.length > 0 && (
            <div style={{ marginBottom: "3.5rem" }}>
              <div style={{ borderBottom: "2px solid #0284C7", paddingBottom: "0.75rem", marginBottom: "1.5rem" }}>
                <span 
                  style={{ 
                    display: "inline-block", 
                    background: "#0284C7", 
                    color: "#FFFFFF", 
                    fontSize: "0.75rem", 
                    fontWeight: 700, 
                    padding: "3px 10px", 
                    borderRadius: "12px", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.05em",
                    marginBottom: "0.35rem"
                  }}
                >
                  Technical Details
                </span>
                <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0F172A", margin: "0.25rem 0 0.35rem" }}>
                  Technical Specifications
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "#64748B", margin: 0 }}>
                  Electrical, hardware, and physical operational metrics supported directly by the product catalogue.
                </p>
              </div>

              <div style={{ overflowX: "auto", borderRadius: "var(--radius-lg)", border: "1px solid #E2E8F0" }}>
                <table className="detail-specs-table" style={{ width: "100%", margin: 0 }} aria-label={`Specifications for ${product.name}`}>
                  <tbody>
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                        <td className="spec-title" style={{ width: "38%", fontWeight: 600, color: "#334155" }}>
                          {spec.label}
                        </td>
                        <td className="spec-value" style={{ fontWeight: 600, color: "#0F172A" }}>
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EMBEDDED NATIVE PDF VIEWER SECTION */}
          {product.pdfDocument && (
            <div 
              id="pdf-viewer-section"
              style={{ 
                marginBottom: "4rem", 
                background: "#FFFFFF", 
                border: "1px solid #BAE6FD", 
                borderRadius: "var(--radius-xl)", 
                padding: "2rem",
                boxShadow: "0 4px 6px -1px rgba(2, 132, 199, 0.05)"
              }}
            >
              <div 
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "1rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid #E2E8F0",
                  marginBottom: "1.5rem"
                }}
              >
                <div>
                  <span 
                    style={{ 
                      display: "inline-block", 
                      background: "#0284C7", 
                      color: "#FFFFFF", 
                      fontSize: "0.75rem", 
                      fontWeight: 700, 
                      padding: "2px 8px", 
                      borderRadius: "10px", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem" 
                    }}
                  >
                    Official PDF Document
                  </span>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0F172A", margin: "0.15rem 0 0" }}>
                    {product.pdfDocument.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", margin: "0.15rem 0 0" }}>
                    Original unaltered product catalog document ({product.pdfDocument.fileName})
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  <a
                    href={product.pdfDocument.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "0.4rem",
                      borderColor: "#BAE6FD",
                      color: "#0369A1"
                    }}
                    title="Open PDF in new browser tab"
                  >
                    <ExternalLink size={16} />
                    <span>Open in New Tab</span>
                  </a>

                  <a
                    href={product.pdfDocument.url}
                    download={product.pdfDocument.fileName}
                    className="btn btn-primary btn-sm"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                    title="Download original PDF file"
                  >
                    <Download size={16} />
                    <span>Download Product PDF</span>
                  </a>
                </div>
              </div>

              {/* Native PDF iframe embed */}
              <div 
                style={{ 
                  width: "100%", 
                  borderRadius: "var(--radius-lg)", 
                  overflow: "hidden", 
                  border: "1px solid #CBD5E1",
                  background: "#F8FAFC",
                  position: "relative"
                }}
              >
                <iframe
                  src={`${product.pdfDocument.url}#toolbar=1&navpanes=0`}
                  title={`${product.name} PDF Document`}
                  style={{
                    width: "100%",
                    height: "700px",
                    border: "none",
                    display: "block"
                  }}
                />
              </div>

              <div 
                style={{ 
                  marginTop: "1rem", 
                  padding: "0.85rem 1.25rem", 
                  background: "#F0F9FF", 
                  borderRadius: "var(--radius-md)", 
                  fontSize: "0.8125rem", 
                  color: "#0369A1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem"
                }}
              >
                <span>
                  📄 If your browser does not support embedded PDF preview, you can open or download the PDF directly:
                </span>
                <a 
                  href={product.pdfDocument.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontWeight: 700, textDecoration: "underline", color: "#0284C7" }}
                >
                  Click here to view/download {product.pdfDocument.fileName}
                </a>
              </div>
            </div>
          )}

          {/* Embedded Quotation Form */}
          <div id="enquiry-section" style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <EnquiryForm 
              initialProduct={product.name}
              title={`Request a Quote for ${product.name}`}
              subtitle="Submit your contact details and dairy center requirements. Our technical sales team will provide complete specifications and pricing."
            />
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "3.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    Related Equipment in {product.categoryName}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", margin: "0.25rem 0 0" }}>
                    Explore complementary milk collection and testing equipment
                  </p>
                </div>
                <Link to={`/category/${product.category}`} className="btn btn-secondary btn-sm" style={{ borderColor: "#BAE6FD", color: "#0369A1" }}>
                  View Category
                </Link>
              </div>

              <div className="products-grid">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
