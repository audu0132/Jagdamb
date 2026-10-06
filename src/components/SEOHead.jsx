import { useEffect } from "react";
import { companyConfig } from "../data/company";

/**
 * SEOHead: Lightweight client-side SEO manager
 * Updates document title, meta description, and inserts Schema.org structured data.
 */
export default function SEOHead({ title, description, schemaData }) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title 
      ? `${title} | ${companyConfig.name}` 
      : `${companyConfig.name} | Dairy Equipment & Milking Machines Baramati`;
    document.title = formattedTitle;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = description || companyConfig.seo.metaDescription;
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    // 3. Inject Structured Schema JSON-LD if provided
    let scriptElement = document.getElementById("page-structured-data");
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = "page-structured-data";
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": companyConfig.name,
      "description": companyConfig.subtitle,
      "telephone": companyConfig.primaryPhone,
      "email": companyConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near PDCC Bank, Baramati Rural",
        "addressLocality": "Baramati",
        "addressRegion": "Maharashtra",
        "postalCode": "413102",
        "addressCountry": "IN"
      },
      "areaServed": companyConfig.serviceArea,
      "priceRange": "₹₹"
    };

    scriptElement.textContent = JSON.stringify(schemaData || defaultSchema);

    // Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title, description, schemaData]);

  return null;
}
