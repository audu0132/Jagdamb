import React from "react";
import { ShieldCheck, Truck, Wrench, Banknote } from "lucide-react";
import { companyConfig } from "../data/company";

export default function TrustBadgeSection() {
  const icons = [ShieldCheck, Truck, Wrench, Banknote];

  return (
    <section className="container" aria-label="Why choose Jagdamb Enterprises">
      <div className="trust-bar">
        <div className="trust-grid">
          {companyConfig.valuePillars.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div key={idx} className="trust-item">
                <div className="trust-icon-box">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="trust-title">{pillar.title}</h4>
                  <p className="trust-desc">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
