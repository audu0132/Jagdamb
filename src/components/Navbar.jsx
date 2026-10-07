import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { companyConfig } from "../data/company";
import { getWhatsAppLink, getPhoneLink } from "../utils/whatsapp";
import logoImg from "../assets/image.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Jagdamb Enterprises Home" onClick={closeMenu}>
            <img src={logoImg} alt={companyConfig.name} className="brand-logo-img" />
            <div className="brand-info">
              <span className="brand-title">{companyConfig.name}</span>
              <span className="brand-subtitle">Dairy Equipment • Baramati</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <Link
              to="/enquiry"
              className="btn btn-primary btn-quote-desktop"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <div className="brand-logo">
            <img src={logoImg} alt={companyConfig.name} className="brand-logo-img" style={{ height: "42px" }} />
            <div className="brand-info">
              <span className="brand-title" style={{ fontSize: "1.05rem" }}>{companyConfig.name}</span>
              <span className="brand-subtitle">Baramati, MH</span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            style={{ padding: "0.5rem", color: "var(--text-muted)" }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="drawer-nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `drawer-nav-link ${isActive || location.pathname === item.path ? "active" : ""}`}
              >
                <span>{item.name}</span>
                <ChevronRight size={18} opacity={0.6} />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer">
          <Link to="/enquiry" onClick={closeMenu} className="btn btn-primary" style={{ width: "100%" }}>
            Request Quotation
          </Link>
          <a
            href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to inquire about dairy equipment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%" }}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a
            href={getPhoneLink(companyConfig.primaryPhone)}
            className="btn btn-secondary"
            style={{ width: "100%" }}
          >
            <Phone size={18} />
            Call: {companyConfig.primaryPhone}
          </a>
        </div>
      </div>
    </>
  );
}
