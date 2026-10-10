import React from "react";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  ExternalLink,
  Mail 
} from "lucide-react";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";
import EnquiryForm from "../components/EnquiryForm";

export default function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Contact Jagdamb Enterprises | Baramati, Maharashtra"
        description="Contact Jagdamb Enterprises in Baramati Rural for dairy machinery, milking equipment pricing, milk analyser sales, and spare parts. Call or WhatsApp our team."
      />

      <PageHeader
        title="Contact Jagdamb Enterprises"
        subtitle="We are conveniently located at Shop No 16, Vithal Plaza Apartment, Kasaba, Malegaon Road, Baramati. Call, visit, or message us on WhatsApp for dairy equipment guidance and orders."
        breadcrumbs={[
          { label: "Contact Us" }
        ]}
      />

      <section className="section-py">
        <div className="container">
          {/* Contact Details Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
            {/* Address */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Baramati Location</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem", flex: 1 }}>
                {companyConfig.fullAddress}
              </p>
              <a
                href={companyConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: "100%" }}
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Phone */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Telephone Helpline</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem", flex: 1 }}>
                Direct call support for equipment sizing, orders, and technical breakdown support.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href={getPhoneLink(companyConfig.primaryPhone)}
                  className="btn btn-primary btn-sm"
                  style={{ width: "100%" }}
                >
                  <Phone size={14} />
                  <span>Call {companyConfig.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "rgba(37, 211, 102, 0.15)", color: "var(--whatsapp)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <MessageCircle size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>WhatsApp Channel</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem", flex: 1 }}>
                Send shed pictures, ask for instant prices, or get video demonstrations of milking machines.
              </p>
              <a
                href={getWhatsAppLink("Hello Jagdamb Enterprises, I am contacting you from your website contact page.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ width: "100%" }}
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Mail size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Email Inquiries</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem", flex: 1 }}>
                Send formal quotation requests, tender inquiries, or business correspondence.
              </p>
              <a
                href={`mailto:${companyConfig.email}`}
                className="btn btn-outline btn-sm"
                style={{ width: "100%", wordBreak: "break-all", fontSize: "0.825rem" }}
              >
                <Mail size={14} />
                <span>{companyConfig.email}</span>
              </a>
            </div>

            {/* Business Hours */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>Working Hours</h3>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6", flex: 1 }}>
                <div><strong>Mon - Sat:</strong> 9:00 AM - 8:00 PM</div>
                <div style={{ marginTop: "0.35rem" }}><strong>Sunday:</strong> 9:30 AM - 2:00 PM</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  * Emergency milking breakdown call support available.
                </div>
              </div>
              <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 600 }}>
                {companyConfig.serviceArea}
              </div>
            </div>
          </div>

          {/* Form & Map 2-Column Section */}
          <div className="responsive-split-grid start">
            {/* Left: Enquiry Form */}
            <div>
              <EnquiryForm
                title="Send an Enquiry or Message"
                subtitle="Provide your contact details and questions below. We typically respond within a few hours."
              />
            </div>

            {/* Right: Google Map & Directions */}
            <div>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
                <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    Visit Our Baramati Premises
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
                    Near PDCC Bank, Kasaba, Malegaon Road, Baramati • <span style={{ color: "var(--primary)", fontWeight: 600 }}>GPS: 18°08'41.7"N 74°33'54.0"E</span>
                  </p>
                </div>

                {/* Map Embed or Interactive Map Container */}
                <div style={{ position: "relative", width: "100%", height: "340px", background: "#e5e7eb" }}>
                  <iframe
                    title="Jagdamb Enterprises Location in Baramati"
                    src={companyConfig.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div style={{ padding: "1.5rem", background: "var(--surface-alt)" }}>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.35rem" }}>
                    LANDMARK DIRECTIONS
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 }}>
                    Near PDCC Bank, Baramati Rural area. Accessible via Baramati-Phaltan and Baramati-Indapur road links. Ample vehicle parking available for machine pickup.
                  </p>

                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={companyConfig.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
