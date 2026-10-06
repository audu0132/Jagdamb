import React from "react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { companyConfig } from "../data/company";
import { getPhoneLink, getWhatsAppLink } from "../utils/whatsapp";

export default function AnnouncementBar() {
  return (
    <aside className="top-bar" aria-label="Announcement bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <MapPin size={14} />
            <span>{companyConfig.location}</span>
          </span>
          <span className="top-bar-item">
            <Clock size={14} />
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </span>
        </div>

        <div className="top-bar-right">
          <a href={getPhoneLink(companyConfig.primaryPhone)} className="top-bar-item">
            <Phone size={14} />
            <span>Call: {companyConfig.primaryPhone}</span>
          </a>
          <a 
            href={getWhatsAppLink("Hello Jagdamb Enterprises, I am looking for dairy equipment in Maharashtra.")}
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-bar-item"
            style={{ color: "#86efac" }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp Quick Help</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
