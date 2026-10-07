import React, { useState, useMemo } from "react";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  MessageCircle, 
  CheckCircle, 
  Maximize2, 
  Eye, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { catalogueProducts, catalogueCategories, pdfCatalogueInfo } from "../data/catalogueProducts";
import { companyConfig } from "../data/company";
import { getWhatsAppLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);
  const [activePdfPage, setActivePdfPage] = useState(null);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return catalogueProducts.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      
      if (!query) return matchesCategory;

      const matchesSearch = 
        product.name.toLowerCase().includes(query) ||
        product.model.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query) ||
        (product.shortDescription && product.shortDescription.toLowerCase().includes(query)) ||
        (product.price && product.price.toLowerCase().includes(query)) ||
        product.specifications.some(s => s.value.toLowerCase().includes(query) || s.label.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Open embedded PDF on desktop or navigate to specific page
  const handleViewPdf = (pageNumber = null) => {
    setActivePdfPage(pageNumber);
    setShowPdfEmbed(true);
    // Smooth scroll down to the PDF container
    setTimeout(() => {
      const viewerElem = document.getElementById("pdf-viewer-section");
      if (viewerElem) {
        viewerElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const getPdfUrlWithPage = (pageNumber) => {
    if (!pageNumber) return pdfCatalogueInfo.pdfUrl;
    return `${pdfCatalogueInfo.pdfUrl}#page=${pageNumber}`;
  };

  return (
    <div className="catalogue-page">
      <SEOHead 
        title="Official Dairy Equipment & Milking Machine Catalogue (2026)"
        description="Browse and download the complete 2026 Jagdamb Enterprises dairy equipment catalogue. Featuring 97+ verified milking machines, vacuum pumps, electric motors, pulsators, liners and dairy spares with official specifications and pricing."
      />

      <PageHeader
        title="Official Product Catalogue"
        subtitle="Access our complete 2026 manufacturer catalogue. Explore 97+ authentic dairy products, machinery specifications, and pricing, or view/download the original official PDF."
        breadcrumbs={[
          { label: "Catalogue" }
        ]}
        actionButton={
          <a
            href={pdfCatalogueInfo.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            title="Open original PDF in browser"
          >
            <ExternalLink size={16} />
            <span>Open Original PDF</span>
          </a>
        }
      />

      {/* PDF Overview & Action Banner */}
      <section className="section bg-light-blue" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <div className="container">
          <div className="catalogue-pdf-card">
            <div className="catalogue-pdf-info">
              <div className="catalogue-badge-group">
                <span className="badge badge-sky">
                  <FileText size={14} />
                  <span>{pdfCatalogueInfo.edition}</span>
                </span>
                <span className="badge badge-outline">
                  <span>{pdfCatalogueInfo.totalPages} Full Pages</span>
                </span>
                <span className="badge badge-outline">
                  <span>{pdfCatalogueInfo.fileSize} PDF</span>
                </span>
              </div>
              <h2 className="catalogue-pdf-title">{pdfCatalogueInfo.title}</h2>
              <p className="catalogue-pdf-desc">
                {pdfCatalogueInfo.coverage} All technical details, pump capacities, motor ratings, and genuine component photos have been preserved directly from the original document.
              </p>
              
              <div className="catalogue-action-buttons">
                {/* View Catalogue button */}
                <button
                  type="button"
                  onClick={() => handleViewPdf(null)}
                  className="btn btn-primary"
                  id="btn-view-catalogue"
                >
                  <Eye size={18} />
                  <span>{showPdfEmbed ? "Focus PDF Viewer" : "View Catalogue (PDF)"}</span>
                </button>

                {/* Direct browser open (mobile friendly) */}
                <a
                  href={pdfCatalogueInfo.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="btn-open-pdf-tab"
                >
                  <ExternalLink size={18} />
                  <span>Open PDF in Tab</span>
                </a>

                {/* Download Catalogue button */}
                <a
                  href={pdfCatalogueInfo.pdfUrl}
                  download={pdfCatalogueInfo.downloadFileName}
                  className="btn btn-outline"
                  id="btn-download-catalogue"
                >
                  <Download size={18} />
                  <span>Download Catalogue</span>
                </a>
              </div>
            </div>

            <div className="catalogue-pdf-highlights">
              <div className="highlight-box">
                <div className="highlight-icon">
                  <CheckCircle size={20} className="text-sky" />
                </div>
                <div>
                  <strong>Original Untouched PDF</strong>
                  <p>Preserved in high resolution without page compression.</p>
                </div>
              </div>
              <div className="highlight-box">
                <div className="highlight-icon">
                  <Sparkles size={20} className="text-sky" />
                </div>
                <div>
                  <strong>97+ Extracted Items Below</strong>
                  <p>Browse specs, pricing, and authentic product visuals online.</p>
                </div>
              </div>
              <div className="highlight-box">
                <div className="highlight-icon">
                  <MessageCircle size={20} className="text-sky" />
                </div>
                <div>
                  <strong>Instant WhatsApp Enquiry</strong>
                  <p>One-click direct quote generation for any model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded PDF Viewer Section */}
      <section 
        id="pdf-viewer-section" 
        className={`section pdf-viewer-container ${showPdfEmbed ? "is-visible" : ""}`}
        style={{ display: showPdfEmbed ? "block" : "none", backgroundColor: "#0F172A", padding: "2rem 0" }}
      >
        <div className="container">
          <div className="pdf-viewer-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem", color: "#FFFFFF" }}>
            <div>
              <h3 style={{ margin: 0, color: "#FFFFFF", fontSize: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FileText size={20} className="text-sky" />
                <span>Original PDF Catalogue Viewer {activePdfPage ? `(Page ${activePdfPage})` : ""}</span>
              </h3>
              <p style={{ margin: "0.25rem 0 0", color: "#94A3B8", fontSize: "0.875rem" }}>
                Viewing original 23-page PDF document. Use your browser's zoom and page controls.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a 
                href={pdfCatalogueInfo.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-secondary"
              >
                <Maximize2 size={14} />
                <span>Fullscreen</span>
              </a>
              <a 
                href={pdfCatalogueInfo.pdfUrl} 
                download={pdfCatalogueInfo.downloadFileName} 
                className="btn btn-sm btn-outline"
                style={{ borderColor: "#38BDF8", color: "#FFFFFF" }}
              >
                <Download size={14} />
                <span>Download</span>
              </a>
              <button 
                type="button" 
                onClick={() => setShowPdfEmbed(false)} 
                className="btn btn-sm"
                style={{ backgroundColor: "#334155", color: "#FFFFFF" }}
              >
                Close Viewer
              </button>
            </div>
          </div>

          {/* Responsive Embedded Iframe / Object with Mobile Fallback */}
          <div className="pdf-frame-wrapper" style={{ position: "relative", width: "100%", height: "800px", borderRadius: "8px", overflow: "hidden", backgroundColor: "#1E293B", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" }}>
            <iframe
              id="catalogue-pdf-iframe"
              src={getPdfUrlWithPage(activePdfPage)}
              title="Official Jagdamb Dairy Equipment Catalogue 2026"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>

          <div className="pdf-mobile-fallback" style={{ marginTop: "1rem", textAlign: "center", color: "#94A3B8", fontSize: "0.875rem" }}>
            <p>
              On mobile devices, you can also{" "}
              <a 
                href={pdfCatalogueInfo.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#38BDF8", textDecoration: "underline", fontWeight: 600 }}
              >
                open the PDF directly in your native reader
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Structured Website Product Catalogue Section */}
      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "2rem" }}>
            <span className="section-eyebrow">Interactive Product Directory</span>
            <h2 className="section-title">Explore All Products From The Catalogue</h2>
            <p className="section-subtitle">
              Every machine, pulsator, claw, vacuum pump, motor, and spare part extracted directly from the official document.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="catalogue-toolbar" style={{ marginBottom: "2rem" }}>
            <div className="catalogue-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model (e.g. MB20, C17, 240cc, 650LPM, Melasty, Copper)..."
                className="catalogue-search-input"
                id="catalogue-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="search-clear-btn"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="catalogue-stats-pill">
              <span>Showing <strong>{filteredProducts.length}</strong> of {catalogueProducts.length} items</span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="catalogue-category-tabs" style={{ marginBottom: "2.5rem" }}>
            {catalogueCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === "all" 
                ? catalogueProducts.length 
                : catalogueProducts.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`catalogue-tab-btn ${isActive ? "active" : ""}`}
                >
                  <span>{cat.name}</span>
                  <span className="tab-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="empty-state text-center" style={{ padding: "4rem 1rem" }}>
              <FileText size={48} className="text-muted" style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
              <h3>No products found</h3>
              <p className="text-muted">
                No catalogue items match your search "{searchQuery}". Try searching for another model or browse all categories.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="btn btn-secondary"
                style={{ marginTop: "1rem" }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="catalogue-grid">
              {filteredProducts.map((product) => {
                // Customized WhatsApp message with product name
                const whatsappMessage = `Hello ${companyConfig.name}, I am interested in the *${product.name}* (Model: ${product.model}, Page ${product.page} of catalogue). Please share more details and price.`;
                const whatsappUrl = getWhatsAppLink(whatsappMessage);

                return (
                  <article key={product.id} className="catalogue-product-card" id={`item-${product.id}`}>
                    {/* Card Media with Authentic PDF Visual */}
                    <div className="card-media-wrapper">
                      <div className="card-image-box">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="catalogue-product-img"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="card-badges-top">
                        {product.badge && (
                          <span className="card-badge badge-model">
                            {product.badge}
                          </span>
                        )}
                        <span className="card-badge badge-page" title="View page in PDF">
                          Page {product.page}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="card-content-body">
                      <div className="card-category-label">
                        {product.categoryName}
                      </div>

                      <h3 className="card-product-title">
                        {product.name}
                      </h3>

                      {product.shortDescription && (
                        <p className="card-product-desc">
                          {product.shortDescription}
                        </p>
                      )}

                      {/* Specifications Summary */}
                      {product.specifications && product.specifications.length > 0 && (
                        <div className="card-specs-list">
                          {product.specifications.slice(0, 4).map((spec, sIdx) => (
                            <div key={sIdx} className="spec-row">
                              <span className="spec-label">{spec.label}:</span>
                              <span className="spec-val">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Price Section */}
                      <div className="card-price-section">
                        <div className="price-container">
                          <span className="price-tag-label">Official Catalogue Price:</span>
                          <span className="price-tag-amount">
                            {product.price}
                          </span>
                        </div>
                        {product.variantPrice && (
                          <span className="price-variant-note">
                            {product.variantPrice}
                          </span>
                        )}
                      </div>

                      {/* Card Actions */}
                      <div className="card-actions-footer">
                        {/* Enquire Now on WhatsApp */}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp-card"
                          title={`Enquire about ${product.name} on WhatsApp`}
                        >
                          <MessageCircle size={16} />
                          <span>Enquire Now</span>
                        </a>

                        {/* View in PDF */}
                        <button
                          type="button"
                          onClick={() => handleViewPdf(product.page)}
                          className="btn btn-view-page"
                          title={`View Page ${product.page} in original PDF`}
                        >
                          <FileText size={15} />
                          <span>Page {product.page}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Assistance & Custom Inquiries Banner */}
      <section className="section bg-light-blue" style={{ marginTop: "4rem" }}>
        <div className="container">
          <div className="catalogue-footer-banner">
            <div className="banner-text">
              <h3>Need Bulk Dairy Equipment or Farm Consultation?</h3>
              <p>
                We provide complete dairy shed planning, customized milking machine piping, AMC maintenance, and doorstep delivery across Baramati, Pune, Satara, and all of Maharashtra.
              </p>
            </div>
            <div className="banner-ctas">
              <a
                href={getWhatsAppLink("Hello Jagdamb Enterprises, I have a custom dairy equipment requirement and need advice on machines from your catalogue.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                <span>Chat with Dairy Specialist</span>
              </a>
              <a
                href={`tel:${companyConfig.primaryPhone.replace(/[^\d+]/g, "")}`}
                className="btn btn-outline"
              >
                <PhoneCall size={18} />
                <span>Call {companyConfig.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
