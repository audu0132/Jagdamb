import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  X, 
  Eye, 
  Milk 
} from "lucide-react";
import { galleryItems, galleryCategories } from "../data/gallery";
import { getWhatsAppLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      <SEOHead 
        title="Equipment & Installation Gallery"
        description="Visual catalog of milking machines, milk testing stations, bulk milk cooling tanks, milk cans, and spare parts supplied by Jagdamb Enterprises in Baramati."
      />

      <PageHeader
        title="Equipment & Systems Gallery"
        subtitle="A visual showcase of our milking machinery, collection center setups, chilling equipment, and spare inventory."
        breadcrumbs={[
          { label: "Gallery" }
        ]}
      />

      <section className="section-py">
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "3rem" }}>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`category-chip ${activeCategory === cat.id ? "active" : ""}`}
                style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.75rem" }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all var(--transition-normal)",
                  cursor: "pointer"
                }}
                onClick={() => setActiveModalItem(item)}
              >
                {/* Visual Equipment Graphic */}
                <div
                  style={{
                    height: "220px",
                    background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    color: "var(--deep-blue)",
                    padding: "1.5rem"
                  }}
                >
                  <Milk size={44} color="var(--deep-blue)" />
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--deep-blue)", fontWeight: 700, marginTop: "0.5rem" }}>
                    {item.categoryLabel}
                  </span>
                  <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", background: "#FFFFFF", border: "1px solid var(--light-border)", color: "var(--deep-blue)", padding: "0.3rem 0.6rem", borderRadius: "var(--radius-sm)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 600 }}>
                    <Eye size={13} />
                    <span>View</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.45rem", color: "var(--dark-blue)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "1rem" }}>
                    {item.caption}
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: "0.85rem", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--deep-blue)" }}>
                      {item.specs}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--deep-blue)", fontWeight: 700 }}>
                      Enquire →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal / Lightbox for viewing equipment details */}
          {activeModalItem && (
            <div 
              className="modal-overlay open"
              onClick={() => setActiveModalItem(null)}
              role="dialog"
              aria-modal="true"
            >
              <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModalItem(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>

                <div
                  style={{
                    height: "240px",
                    background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
                    border: "1px solid var(--light-border)",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--deep-blue)",
                    marginBottom: "1.5rem"
                  }}
                >
                  <Milk size={56} color="var(--deep-blue)" />
                  <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--deep-blue)", fontWeight: 700, marginTop: "0.75rem" }}>
                    {activeModalItem.categoryLabel}
                  </span>
                </div>

                <span style={{ fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase" }}>
                  {activeModalItem.categoryLabel}
                </span>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0.35rem 0 0.75rem 0" }}>
                  {activeModalItem.title}
                </h3>

                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                  {activeModalItem.caption}
                </p>

                <div style={{ background: "var(--surface-alt)", padding: "1rem", borderRadius: "var(--radius-md)", marginBottom: "1.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>KEY SPECIFICATIONS</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginTop: "0.2rem" }}>
                    {activeModalItem.specs}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <a
                    href={getWhatsAppLink(`Hello Jagdamb Enterprises, I saw ${activeModalItem.title} in your gallery. Please share price and specs.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <Link
                    to="/enquiry"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                    onClick={() => setActiveModalItem(null)}
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Authentic Note */}
          <div style={{ marginTop: "4rem", textAlign: "center", padding: "2rem", background: "var(--surface-alt)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              Are you a local dairy farmer in Baramati or Pune?
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 1.25rem auto" }}>
              Visit our premises near PDCC Bank in Baramati Rural to inspect milking trolleys, test analysers, and pick up genuine spares in person.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Visit Store & Workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
