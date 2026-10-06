import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Milk, 
  HeartHandshake, 
  Truck 
} from "lucide-react";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <SEOHead 
        title="About Us - Dairy Equipment & Milking Specialists"
        description="Learn about Jagdamb Enterprises, dairy equipment dealer and service provider in Baramati, Maharashtra. Dedicated to quality machinery, genuine spares, and dependable farm support."
      />

      <PageHeader
        title="About Jagdamb Enterprises"
        subtitle="Empowering dairy farmers and milk collection centers with durable equipment, certified stainless steel contact parts, and dependable local servicing."
        breadcrumbs={[
          { label: "About Us" }
        ]}
      />

      {/* Main Story & Introduction */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow">Company Profile</span>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                Dedicated Dairy Equipment Partners in Baramati
              </h2>

              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Operating from Baramati Rural in the Pune district of Maharashtra, <strong>Jagdamb Enterprises</strong> serves 
                as a specialized dealer, wholesaler, and technical solutions provider for the dairy farming and milk testing sector.
              </p>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Modern dairy farming demands machines that can endure everyday barn environments without constant breakdowns. 
                Whether a farmer is switching from tedious hand milking to their first single-bucket trolley or a cooperative society 
                is modernizing its milk testing counter with digital ultrasonic analysers, our focus is simple: provide honest, 
                high-grade equipment suited for local cattle breeds, supported by readily available spare parts.
              </p>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "2rem" }}>
                We believe in straightforward business ethics—matching machinery accurately to your actual herd size and electrical supply, 
                demonstrating proper cleaning techniques to prevent mastitis, and offering prompt assistance when field repairs are needed.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/products" className="btn btn-primary">
                  Explore Product Range
                </Link>
                <a
                  href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to consult regarding equipment for my dairy farm.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Consult on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "2.25rem", boxShadow: "var(--shadow-md)" }}>
              <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.25rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                  Core Business Pillars
                </h3>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  Clear, factual business principles
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Food-Grade AISI 304 Construction</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                      We do not compromise on sanitary safety. Buckets, collection pails, cans, and milk piping are made from certified food-grade stainless steel.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Stocked Spare Parts & Consumables</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                      Liners, pulsators, vacuum oils, and seals wear out over time. We keep complete replacement stock at our Baramati premises for immediate availability.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Local Dairy Farm Understanding</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                      Deeply familiar with the challenges of voltage fluctuations, rural water hardness, and buffalo udder anatomy in Maharashtra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="section-py" style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Product Expertise</span>
            <h2 className="section-title">What We Specialize In</h2>
            <p className="section-description">
              Our core product divisions represent the key hardware requirements of modern milk production and procurement.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Milk size={32} /></div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Milking Automation</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Single and double bucket mobile trolleys, fixed shed pipeline milking installations, and specialized wide-bore liners designed specifically for high-yielding Indian buffaloes and crossbred cows.
              </p>
            </div>

            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><ShieldCheck size={32} /></div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Milk Testing & AMCU</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                High-precision ultrasonic milk analyzers measuring Fat, SNF, Added Water and Density in 30 seconds without chemical hazard, alongside digital weighing platforms and thermal slip printers.
              </p>
            </div>

            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Wrench size={32} /></div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Bulk Cooling & Storage</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Direct expansion (DX) bulk milk coolers (500L to 5,000L) with laser-welded dimple jackets and seamless spun AISI 304 milk transport cans (10L to 50L) with airtight silicone gaskets.
              </p>
            </div>

            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.75rem" }}>
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><Truck size={32} /></div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Fodder & Processing</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                High-output electric motor chaff cutters for fine fodder digestion, electric and manual cream separators, and commercial khoa and paneer pressing machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Regional Reach */}
      <section className="section-py">
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #075985 0%, #0284C7 100%)", color: "#ffffff", borderRadius: "var(--radius-xl)", padding: "3rem 2.5rem", position: "relative", overflow: "hidden", border: "1px solid var(--light-border)", boxShadow: "0 16px 36px -8px rgba(56, 189, 248, 0.25)" }}>
            <div style={{ maxWidth: "680px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#E0F2FE", background: "rgba(255, 255, 255, 0.15)", padding: "0.3rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
                <MapPin size={16} />
                <span>Geographic Coverage</span>
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
                Supporting Dairies Across Baramati & Maharashtra
              </h3>
              <p style={{ fontSize: "1rem", color: "#F0F9FF", lineHeight: "1.65", marginBottom: "2rem" }}>
                Our premises at <strong>Shop No 16, Vithal Plaza Apartment, Kasaba, Malegaon Road, Baramati</strong> provide easy access for in-person equipment inspection, 
                immediate spares pickup, and swift dispatch to dairy operations across Pune, Satara, Solapur, 
                Ahmednagar, Sangli, and neighboring regions.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/contact" className="btn btn-primary">
                  Find Our Location
                </Link>
                <a
                  href={getPhoneLink(companyConfig.primaryPhone)}
                  className="btn btn-outline-white"
                >
                  <Phone size={16} />
                  <span>Call {companyConfig.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
