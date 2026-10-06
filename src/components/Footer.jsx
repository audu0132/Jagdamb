import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock 
} from "lucide-react";
import { companyConfig } from "../data/company";
import { categories } from "../data/categories";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import logoImg from "../assets/image.png";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div>
            <div className="brand-logo" style={{ marginBottom: "1.25rem" }}>
              <img src={logoImg} alt={companyConfig.name} className="brand-logo-img" style={{ height: "48px" }} />
              <div className="brand-info">
                <span className="brand-title" style={{ color: "#FFFFFF" }}>
                  {companyConfig.name}
                </span>
                <span className="brand-subtitle" style={{ color: "var(--brand-red)" }}>
                  Dairy Equipment Specialists
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", lineHeight: "1.6", color: "#94A3B8", marginBottom: "1.5rem" }}>
              Trusted dealer, wholesaler, and technical service provider for milking machines, 
              ultrasonic milk testing equipment, bulk milk coolers, and genuine dairy spare parts 
              serving Baramati, Pune, and dairy farmers across Maharashtra.
            </p>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={getWhatsAppLink("Hello Jagdamb Enterprises, I am contacting you via your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <Link to="/enquiry" className="btn btn-sm btn-outline-white">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-nav-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link">About Jagdamb</Link>
              </li>
              <li>
                <Link to="/products" className="footer-nav-link">Product Catalog</Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link">Installation & Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-nav-link">Equipment Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">Contact & Location</Link>
              </li>
              <li>
                <Link to="/enquiry" className="footer-nav-link">Get a Formal Quote</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Product Categories */}
          <div>
            <h4 className="footer-heading">Equipment Categories</h4>
            <ul className="footer-nav-list">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="footer-nav-link">
                    {cat.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h4 className="footer-heading">Baramati Office</h4>
            
            <div className="footer-contact-item">
              <MapPin size={20} />
              <span>{companyConfig.fullAddress}</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href={getPhoneLink(companyConfig.primaryPhone)} style={{ display: "block" }}>
                  {companyConfig.primaryPhone}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <a href={`mailto:${companyConfig.email}`}>
                {companyConfig.email}
              </a>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <span>{companyConfig.businessHours.weekdays}</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <p>© {currentYear} {companyConfig.name}. All Rights Reserved. Dairy Equipment Supplier & Dealer in Maharashtra.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link to="/contact" style={{ color: "#94A3B8" }}>Support</Link>
            <Link to="/enquiry" style={{ color: "#94A3B8" }}>Inquiries</Link>
            <a href={companyConfig.googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8" }}>
              Find on Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
