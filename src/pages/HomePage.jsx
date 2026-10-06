import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Milk, 
  Activity 
} from "lucide-react";
import { companyConfig } from "../data/company";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { services } from "../data/services";
import { galleryItems } from "../data/gallery";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import TrustBadgeSection from "../components/TrustBadgeSection";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import EnquiryForm from "../components/EnquiryForm";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <>
      <SEOHead 
        title="Modern Dairy Equipment & Milking Machines"
        description="Authorised dairy machinery dealer in Baramati, Maharashtra. Single and double bucket milking machines, electronic milk analysers, BMC chillers, and genuine spares."
      />

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section" aria-label="Hero Overview">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div>
              <div className="hero-tag">
                <Milk size={16} />
                <span>Dairy Equipment & Automation • Baramati</span>
              </div>

              <h1 className="hero-title">
                Reliable Dairy Machinery & <span className="hero-title-highlight">Milking Systems</span> for Modern Farms
              </h1>

              <p className="hero-lead">
                Authorised dealer and technical service specialist for portable milking machines, 
                high-precision ultrasonic milk analysers, bulk milk coolers, and original dairy spare parts 
                serving Baramati, Pune, and dairy farmers across Maharashtra.
              </p>

              <div className="hero-ctas">
                <Link to="/products" className="btn btn-primary btn-lg">
                  <span>Explore Equipment</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/enquiry" className="btn btn-outline-white btn-lg">
                  Get a Quick Quote
                </Link>

                <a
                  href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to inquire about your milking machines and dairy equipment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Factual Highlights */}
              <div className="hero-badge-bar">
                <div className="hero-badge-item">
                  <ShieldCheck size={18} color="var(--brand-red)" />
                  <span>Food-Grade SS 304 Quality</span>
                </div>
                <div className="hero-badge-item">
                  <Wrench size={18} color="var(--brand-red)" />
                  <span>Prompt Local Service & Spares</span>
                </div>
                <div className="hero-badge-item">
                  <MapPin size={18} color="var(--brand-red)" />
                  <span>Based in Baramati, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Industrial Card */}
            <div>
              <div className="hero-card">
                <div className="hero-card-header">
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(254, 0, 0, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Activity size={20} color="var(--brand-red)" />
                  </div>
                  <div>
                    <h2 className="hero-card-title">Dairy Shed Solutions</h2>
                    <span style={{ fontSize: "0.8rem", color: "#CBD5E1" }}>Built for Indian cattle breeds</span>
                  </div>
                </div>

                <ul className="hero-card-list">
                  <li className="hero-card-item">
                    <CheckCircle2 size={18} />
                    <span><strong>Portable Milking Machines:</strong> Single & double bucket trolleys engineered for cow and buffalo teats.</span>
                  </li>
                  <li className="hero-card-item">
                    <CheckCircle2 size={18} />
                    <span><strong>Ultrasonic Milk Testing:</strong> Chemical-free Fat & SNF analysis in 30 seconds for collection centers.</span>
                  </li>
                  <li className="hero-card-item">
                    <CheckCircle2 size={18} />
                    <span><strong>Direct Expansion BMC Chillers:</strong> Preserve milk quality at 4°C with heavy PUF insulation.</span>
                  </li>
                  <li className="hero-card-item">
                    <CheckCircle2 size={18} />
                    <span><strong>Ready Spares Inventory:</strong> Pulsators, silicone liners, claws, vacuum oils, and daily wash detergents.</span>
                  </li>
                </ul>

                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "1rem", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--brand-red)", fontWeight: 700 }}>Direct Contact</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>{companyConfig.primaryPhone}</div>
                  </div>
                  <a
                    href={getPhoneLink(companyConfig.primaryPhone)}
                    className="btn btn-sm btn-outline-white"
                  >
                    <Phone size={14} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST / VALUE PILLARS ================= */}
      <TrustBadgeSection />

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="section-py" aria-label="Product Categories">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comprehensive Range</span>
            <h2 className="section-title">Dairy Equipment Categories</h2>
            <p className="section-description">
              From smallholder dairy sheds to village milk procurement centers, we supply durable 
              machinery engineered for Indian dairy farming conditions.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/products" className="btn btn-outline btn-lg">
              <span>View Complete Product Catalog</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS SECTION ================= */}
      <section className="section-py" style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-label="Featured Products">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">High Demand</span>
            <h2 className="section-title">Featured Dairy Machinery</h2>
            <p className="section-description">
              Proven workhorses trusted by dairy farmers and milk collection societies for daily reliability and performance.
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/products" className="btn btn-primary btn-lg">
              <span>Explore All {products.length} Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US / BUSINESS CREDIBILITY ================= */}
      <section className="section-py" aria-label="Why Choose Jagdamb Enterprises">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow">Local Commitment</span>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                Built on Honest Advice and Uncompromising Support
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                Dairy farming is a non-stop morning-and-evening commitment. Unlike generic online resellers, 
                <strong> Jagdamb Enterprises</strong> operates on the ground in Baramati with physical stock, 
                readily accessible spare parts, and skilled technicians who understand shed challenges firsthand.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--text-main)" }}>Proper Sizing & No Mis-selling</strong>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      We match machine capacity to your exact animal count and electrical supply so you don't overpay.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--text-main)" }}>Food-Grade AISI 304 Stainless Steel</strong>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      All milk-contact buckets, pails, cans, and pipeline fittings adhere to strict sanitary dairy standards.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "var(--text-main)" }}>On-site Demonstrations & Staff Training</strong>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      We show you and your shed helpers how to attach clusters gently, adjust vacuum, and maintain hygiene.
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn-primary">
                  Learn About Our Business
                </Link>
                <a
                  href={getPhoneLink(companyConfig.primaryPhone)}
                  className="btn btn-secondary"
                >
                  <Phone size={16} />
                  <span>Call {companyConfig.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Card Presentation */}
            <div style={{ background: "#0D0D0D", padding: "2.5rem", borderRadius: "var(--radius-xl)", border: "1px solid #262626", borderTop: "4px solid var(--brand-red)", color: "#FFFFFF", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--brand-red)", color: "#ffffff", padding: "0.35rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                <MapPin size={14} />
                <span>Baramati Rural, Pune</span>
              </div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Serving the Heart of Maharashtra's Dairy Belt
              </h3>

              <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                Located near PDCC Bank in Baramati Rural, we supply dairy equipment and spares across 
                Baramati, Indapur, Daund, Phaltan, Satara, Solapur, Ahmednagar, and adjacent dairy pockets.
              </p>

              <div style={{ background: "#171717", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid #2A2A2A", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-red)", marginBottom: "0.25rem" }}>STORE & WORKSHOP HOURS</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>{companyConfig.businessHours.weekdays}</div>
                <div style={{ fontSize: "0.85rem", color: "#94A3B8", marginTop: "0.25rem" }}>{companyConfig.businessHours.sunday}</div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>
                  Visit / Contact Us
                </Link>
                <a
                  href={companyConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <MapPin size={16} />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="section-py" style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)" }} aria-label="Our Services">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">End-to-End Support</span>
            <h2 className="section-title">Services & Technical Assistance</h2>
            <p className="section-description">
              We stand behind every machine we sell with complete on-site installation, periodic maintenance, and readily available spares.
            </p>
          </div>

          <div className="services-grid">
            {services.slice(0, 3).map((srv) => (
              <div key={srv.id} className="service-card">
                <div className="service-icon-box">
                  <Wrench size={26} />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.shortDesc}</p>
                <ul className="service-deliverables">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="service-deliverable-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="btn btn-outline btn-sm" style={{ marginTop: "auto" }}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              <span>View All Technical Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="section-py" aria-label="Equipment Gallery Preview">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Visual Catalog</span>
            <h2 className="section-title">Equipment & Workshop Showcase</h2>
            <p className="section-description">
              A glimpse into the machinery, milk collection systems, and genuine components we supply.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {galleryItems.slice(0, 4).map((item) => (
              <div 
                key={item.id} 
                style={{ 
                  background: "var(--surface)", 
                  border: "1px solid var(--border)", 
                  borderRadius: "var(--radius-lg)", 
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", padding: "1rem", textAlign: "center", position: "relative" }}>
                  <Milk size={36} color="var(--brand-red)" style={{ opacity: 0.9 }} />
                  <span style={{ position: "absolute", bottom: "0.5rem", right: "0.75rem", fontSize: "0.7rem", background: "rgba(0,0,0,0.7)", border: "1px solid #333333", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                    {item.categoryLabel}
                  </span>
                </div>
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.35rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>{item.caption}</p>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--brand-red)", marginTop: "auto" }}>
                    {item.specs}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/gallery" className="btn btn-outline btn-lg">
              <span>View Full Equipment Gallery</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LEAD & ENQUIRY SECTION ================= */}
      <section className="section-py" style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)" }} aria-label="Request a Quotation">
        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto" }}>
            <EnquiryForm 
              title="Request a Detailed Equipment Quotation"
              subtitle="Let us know your herd size, machinery requirements, or delivery location in Maharashtra. We will respond promptly with specifications and competitive rates."
            />
          </div>
        </div>
      </section>
    </>
  );
}
