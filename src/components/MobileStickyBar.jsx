import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { companyConfig } from "../data/company";
import { getPhoneLink, getWhatsAppLink } from "../utils/whatsapp";

export default function MobileStickyBar() {
  return (
    <nav className="mobile-sticky-bar" aria-label="Mobile Quick Contacts">
      <a
        href={getPhoneLink(companyConfig.primaryPhone)}
        className="btn btn-secondary btn-sm"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Phone size={16} />
        <span>Call Now</span>
      </a>

      <a
        href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to get a quote on dairy equipment.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp btn-sm"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
