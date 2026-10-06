import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Truck, 
  Banknote, 
  Milk 
} from "lucide-react";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";
import EnquiryForm from "../components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <>
      <SEOHead 
        title="Get a Quote - Dairy Machinery & Equipment"
        description="Request a formal price quotation for milking machines, milk analysers, BMC chillers, and dairy accessories from Jagdamb Enterprises in Baramati."
      />

      <PageHeader
        title="Request Equipment Quotation"
        subtitle="Get transparent, competitive pricing tailored to your dairy herd size, barn layout, and processing requirements."
        breadcrumbs={[
          { label: "Get a Quote" }
        ]}
      />

      <section className="section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "3.5rem", alignItems: "flex-start" }}>
            {/* Left: The Form */}
            <div>
              <EnquiryForm
                title="Commercial Quote Request"
                subtitle="Fill out the form below. We will furnish you with complete technical specifications, delivery schedule, and pricing."
              />
            </div>

            {/* Right: Why Request From Jagdamb & Direct Call Box */}
            <div>
              {/* Trust Card */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "2rem", marginBottom: "2rem", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                  What You Receive With Every Quote
                </h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      <strong>Transparent Pricing:</strong> Clear breakdown of machine, trolley, motor, and cluster assembly costs.
                    </span>
                  </li>

                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      <strong>Government Dairy Subsidy Support:</strong> Standard GST commercial invoices suitable for bank loans and animal husbandry subsidy filings.
                    </span>
                  </li>

                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      <strong>Herd Sizing Advice:</strong> Free technical recommendation on single bucket vs double bucket vs pipeline based on animal count.
                    </span>
                  </li>

                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                      <strong>Maharashtra Delivery & Fitting:</strong> Clarified dispatch timelines for Baramati, Pune, Satara, Solapur, Ahmednagar, and statewide.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp Alternative */}
              <div style={{ background: "linear-gradient(135deg, #072C20 0%, #0D4A36 100%)", color: "#ffffff", borderRadius: "var(--radius-xl)", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#86EFAC", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  <MessageCircle size={18} />
                  <span>Prefer WhatsApp?</span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Instant WhatsApp Discussion
                </h3>

                <p style={{ fontSize: "0.9rem", color: "#E2E8F0", lineHeight: "1.55", marginBottom: "1.5rem" }}>
                  Send photos of your shed or cattle stalls directly to our technician for instantaneous advice and machine quotation.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to get an immediate quote on dairy equipment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: "100%" }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Our Baramati Team</span>
                  </a>

                  <a
                    href={getPhoneLink(companyConfig.primaryPhone)}
                    className="btn btn-outline-white"
                    style={{ width: "100%" }}
                  >
                    <Phone size={16} />
                    <span>Call Directly: {companyConfig.primaryPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
