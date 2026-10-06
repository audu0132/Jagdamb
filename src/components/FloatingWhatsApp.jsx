import React from "react";
import { MessageCircle } from "lucide-react";
import { companyConfig } from "../data/company";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink(
    `Hello ${companyConfig.name}, I found your website and want to enquire about dairy equipment prices and availability.`
  );

  return (
    <div className="floating-whatsapp" role="complementary" aria-label="Direct WhatsApp Contact">
      <div className="whatsapp-tooltip">
        <span>Need Quick Assistance? Chat with us</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn-circle"
        aria-label="Chat on WhatsApp with Jagdamb Enterprises"
      >
        <span className="whatsapp-ping-ring" aria-hidden="true" />
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
