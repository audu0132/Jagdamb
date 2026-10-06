import React from "react";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  ShieldCheck, 
  ShoppingBag, 
  Activity, 
  PackageCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Clock
} from "lucide-react";
import { services } from "../data/services";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";

export default function ServicesPage() {
  const iconMap = {
    ShoppingBag: ShoppingBag,
    Wrench: Wrench,
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    PackageCheck: PackageCheck,
  };

  return (
    <>
      <SEOHead 
        title="Dairy Equipment Services, Installation & Repairs"
        description="On-site installation, vacuum pump maintenance, ultrasonic milk analyser calibration, and genuine spare parts support in Baramati and across Maharashtra."
      />

      <PageHeader
        title="Installation, Servicing & Technical Support"
        subtitle="Comprehensive after-sales service, dairy shed piping, breakdown assistance, and preventive maintenance for uninterrupted milk operations."
        breadcrumbs={[
          { label: "Services" }
        ]}
        actionButton={
          <a
            href={getWhatsAppLink("Hello Jagdamb Enterprises, I need service assistance for my dairy equipment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Book Service Visit</span>
          </a>
        }
      />

      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Reliable Farm Assistance</span>
            <h2 className="section-title">Support Tailored for Dairy Operations</h2>
            <p className="section-description">
              Because cows must be milked twice a day without fail, our technical services prioritize fast response times, genuine replacement components, and experienced shed advice.
            </p>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="services-grid" style={{ marginBottom: "4.5rem" }}>
            {services.map((srv) => {
              const Icon = iconMap[srv.icon] || Wrench;
              return (
                <div key={srv.id} className="service-card">
                  <div className="service-icon-box">
                    <Icon size={26} />
                  </div>

                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 700, color: "var(--accent-amber)", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>
                    {srv.highlight}
                  </span>

                  <h3 className="service-title">{srv.title}</h3>

                  <p className="service-desc">{srv.fullDesc || srv.shortDesc}</p>

                  <ul className="service-deliverables">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="service-deliverable-item">
                        <CheckCircle2 size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", gap: "0.75rem" }}>
                    <a
                      href={getWhatsAppLink(`Hello Jagdamb Enterprises, I would like to inquire regarding service: ${srv.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ flex: 1 }}
                    >
                      <MessageCircle size={15} />
                      <span>Enquire</span>
                    </a>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Contact
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workflow: How We Support You */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "3rem 2.5rem", boxShadow: "var(--shadow-sm)", marginBottom: "4rem" }}>
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem auto" }}>
              <span className="section-eyebrow">Structured Process</span>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Our 4-Step Customer Support Process
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                From your initial inquiry in Baramati to continuous milk runs, here is how we work with you.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.75rem" }}>
              <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "1.25rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--primary)" }}>STEP 01</span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.35rem 0" }}>Herd Consultation</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  We assess your current cattle headcount, planned expansion, electrical phases, and daily milking routine.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "1.25rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--primary)" }}>STEP 02</span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.35rem 0" }}>On-Site Setup & Fitting</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Our technicians align vacuum lines, test motor draw, inspect oilers, and calibrate pulsator timing.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "1.25rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--primary)" }}>STEP 03</span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.35rem 0" }}>Operator Demonstration</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  We demonstrate gentle cluster attachment, vacuum release, and daily hygienic wash cycles to prevent udder health issues.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "1.25rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--primary)" }}>STEP 04</span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.35rem 0" }}>Ongoing Spares Supply</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Liners, gaskets, and oils delivered quickly right when you need routine scheduled replacements.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Service Banner */}
          <div style={{ background: "linear-gradient(135deg, #075985 0%, #0284C7 100%)", color: "#ffffff", borderRadius: "var(--radius-xl)", padding: "2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", border: "1px solid var(--light-border)", boxShadow: "0 16px 36px -8px rgba(56, 189, 248, 0.25)" }}>
            <div style={{ maxWidth: "600px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#E0F2FE", background: "rgba(255, 255, 255, 0.15)", padding: "0.3rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                <Clock size={16} />
                <span>Urgent Breakdown Support</span>
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Facing Milking Machine or Analyser Failure?
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "#F0F9FF", lineHeight: "1.55" }}>
                Don't let mechanical trouble disrupt your morning or evening collection shift. Call or message our Baramati helpline for rapid advice and parts dispatch.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={getPhoneLink(companyConfig.primaryPhone)}
                className="btn btn-outline-white btn-lg"
              >
                <Phone size={18} />
                <span>{companyConfig.primaryPhone}</span>
              </a>
              <a
                href={getWhatsAppLink("Hello Jagdamb Enterprises, I have an urgent equipment breakdown inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>Urgent WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
