import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Clock
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

  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(product?.image);

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

  return (
    <>
      <SEOHead 
        title={`${product.name} - Technical Specs & Price`}
        description={`${product.name} supplied by Jagdamb Enterprises in Baramati, Maharashtra. ${product.shortDescription}`}
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

      <section className="section-py">
        <div className="container">
          {/* Main 2-Column Detail Layout */}
          <div className="product-detail-grid">
            {/* Left: Product Visual Presentation */}
            <div>
              <div 
                style={{ 
                  background: "var(--surface)", 
                  border: "1px solid var(--border)", 
                  borderRadius: "var(--radius-xl)", 
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  marginBottom: product.gallery && product.gallery.length > 1 ? "0.75rem" : "1.5rem"
                }}
              >
                <ProductImage
                  src={activeImage || product.image}
                  alt={product.name}
                  category={product.category}
                  height="380px"
                />
              </div>

              {/* Gallery Thumbnails if multiple images exist */}
              {product.gallery && product.gallery.length > 1 && (
                <div 
                  style={{ 
                    display: "flex", 
                    gap: "0.5rem", 
                    marginBottom: "1.5rem", 
                    overflowX: "auto", 
                    paddingBottom: "0.25rem" 
                  }}
                >
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      style={{
                        border: activeImage === imgUrl ? "2px solid var(--primary)" : "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        width: "68px",
                        height: "68px",
                        padding: "2px",
                        background: "#ffffff",
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                        boxShadow: activeImage === imgUrl ? "0 0 0 2px rgba(2, 132, 199, 0.25)" : "none"
                      }}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Callout under image */}
              <div style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-main)", fontWeight: 600 }}>
                  <ShieldCheck size={18} color="var(--primary)" />
                  <span>Certified Food-Grade SS 304 Contact Parts</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-main)", fontWeight: 600 }}>
                  <Truck size={18} color="var(--primary)" />
                  <span>On-Site Delivery & Setup across Maharashtra</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-main)", fontWeight: 600 }}>
                  <Clock size={18} color="var(--primary)" />
                  <span>Prompt On-Farm Servicing & Ready Spares in Baramati</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Overview & CTAs */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
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

              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-main)", lineHeight: "1.25", marginBottom: "1rem" }}>
                {product.name}
              </h2>

              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Conversion CTAs */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.5rem", marginBottom: "2rem", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                  Enquire & Price Request
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "1rem" }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ flex: 1, minWidth: "180px" }}
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Enquiry</span>
                  </a>

                  <Link
                    to="/enquiry"
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1, minWidth: "180px" }}
                  >
                    <span>Request Quote</span>
                  </Link>

                  <a
                    href={getPhoneLink(companyConfig.primaryPhone)}
                    className="btn btn-secondary btn-lg"
                  >
                    <Phone size={18} />
                    <span>Call Us</span>
                  </a>
                </div>

                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                  Pre-filled WhatsApp enquiry includes this model name for immediate quotation and stock confirmation.
                </p>
              </div>

              {/* Key Features Checklist */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.85rem" }}>
                    Key Features & Design Highlights
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {product.features.map((feat, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                        <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ideal Applications */}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.85rem" }}>
                    Recommended Applications
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        style={{ background: "var(--primary-light)", color: "var(--primary-dark)", padding: "0.4rem 0.85rem", borderRadius: "var(--radius-full)", fontSize: "0.8125rem", fontWeight: 600 }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Specifications Table */}
          {product.specifications && product.specifications.length > 0 && (
            <div style={{ marginBottom: "4rem" }}>
              <div style={{ borderBottom: "2px solid var(--primary)", paddingBottom: "0.75rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)" }}>
                  Technical Specifications
                </h3>
              </div>

              <table className="detail-specs-table" aria-label={`Specifications for ${product.name}`}>
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx}>
                      <td className="spec-title">{spec.label}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                * Specifications may be customized upon request for specific shed voltages, cattle counts, or commercial bulk milk collection capacities.
              </p>
            </div>
          )}

          {/* Embedded Quotation Form pre-selected with this product */}
          <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <EnquiryForm 
              initialProduct={product.name}
              title={`Request a Quote for ${product.name}`}
              subtitle="Submit your contact details and barn requirements. Our Baramati team will prepare an itemized commercial quotation."
            />
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                  Related Equipment in {product.categoryName}
                </h3>
                <Link to={`/category/${product.category}`} className="btn btn-outline btn-sm">
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
