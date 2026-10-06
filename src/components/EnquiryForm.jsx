import React, { useState } from "react";
import { products } from "../data/products";
import { getWhatsAppLink } from "../utils/whatsapp";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";

export default function EnquiryForm({ 
  initialProduct = "", 
  title = "Request Equipment Quotation", 
  subtitle = "Fill in your requirements below. Our technical team in Baramati will respond with specifications and pricing."
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    selectedProduct: initialProduct || "",
    districtLocation: "",
    requirementMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    // Phone validation (at least 10 digits)
    const phoneClean = formData.phoneNumber.replace(/[^0-9]/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (formData.emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress.trim())) {
        newErrors.emailAddress = "Please enter a valid email address";
      }
    }

    if (!formData.requirementMessage.trim()) {
      newErrors.requirementMessage = "Please describe your requirement or herd size";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean local processing / configurable webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setLastSubmission({ ...formData });

      // Save to localStorage for offline reference if needed
      try {
        const stored = JSON.parse(localStorage.getItem("jagdamb_enquiries") || "[]");
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem("jagdamb_enquiries", JSON.stringify(stored));
      } catch {
        // storage disabled or unavailable
      }
    }, 600);
  };

  // Generate WhatsApp message from form data
  const getSubmissionWhatsAppUrl = () => {
    if (!lastSubmission) return getWhatsAppLink();
    const text = `*New Dairy Equipment Enquiry*\n\n` +
      `*Name:* ${lastSubmission.fullName}\n` +
      `*Phone:* ${lastSubmission.phoneNumber}\n` +
      (lastSubmission.emailAddress ? `*Email:* ${lastSubmission.emailAddress}\n` : "") +
      (lastSubmission.districtLocation ? `*Location:* ${lastSubmission.districtLocation}\n` : "") +
      `*Product:* ${lastSubmission.selectedProduct || "General Inquiry"}\n` +
      `*Requirement:* ${lastSubmission.requirementMessage}`;
    return getWhatsAppLink(text);
  };

  if (isSubmitted) {
    return (
      <div className="form-card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <div 
          style={{ 
            width: "68px", 
            height: "68px", 
            borderRadius: "50%", 
            background: "var(--primary-light)", 
            color: "var(--primary)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto 1.5rem auto" 
          }}
        >
          <CheckCircle2 size={40} />
        </div>

        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-main)" }}>
          Thank You, {lastSubmission?.fullName}!
        </h3>

        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", maxWidth: "480px", margin: "0 auto 1.75rem auto" }}>
          We have recorded your equipment requirement. For immediate pricing, stock availability, or to share shed photos, connect with us directly on WhatsApp.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", maxWidth: "360px", margin: "0 auto" }}>
          <a
            href={getSubmissionWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            style={{ width: "100%" }}
          >
            <MessageCircle size={20} />
            Send Details via WhatsApp
          </a>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                phoneNumber: "",
                emailAddress: "",
                selectedProduct: "",
                districtLocation: "",
                requirementMessage: "",
              });
            }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div style={{ marginBottom: "1.75rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name & Phone */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Ramesh Patil"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-control ${errors.fullName ? "error" : ""}`}
              required
            />
            {errors.fullName && <div className="form-error-msg">{errors.fullName}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phoneNumber">
              Phone / Mobile Number <span className="required">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="e.g. 9822012345"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`form-control ${errors.phoneNumber ? "error" : ""}`}
              required
            />
            {errors.phoneNumber && <div className="form-error-msg">{errors.phoneNumber}</div>}
          </div>
        </div>

        {/* Email & District */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="emailAddress">
              Email Address <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>(Optional)</span>
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              placeholder="e.g. ramesh@gmail.com"
              value={formData.emailAddress}
              onChange={handleChange}
              className={`form-control ${errors.emailAddress ? "error" : ""}`}
            />
            {errors.emailAddress && <div className="form-error-msg">{errors.emailAddress}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="districtLocation">
              Location / District
            </label>
            <input
              id="districtLocation"
              name="districtLocation"
              type="text"
              placeholder="e.g. Baramati, Pune, Satara..."
              value={formData.districtLocation}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Equipment Selection */}
        <div className="form-group">
          <label className="form-label" htmlFor="selectedProduct">
            Equipment of Interest
          </label>
          <select
            id="selectedProduct"
            name="selectedProduct"
            value={formData.selectedProduct}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">-- Select an equipment category or specific machine --</option>
            <optgroup label="Popular Dairy Machinery">
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.categoryName})
                </option>
              ))}
            </optgroup>
            <optgroup label="General Categories & Services">
              <option value="Milking Machine Setup">Milking Machine Setup (General)</option>
              <option value="Milk Analyser & Testing Setup">Milk Analyser & Testing Unit (AMCU)</option>
              <option value="Bulk Milk Cooler (BMC)">Bulk Milk Cooler Chilling Unit</option>
              <option value="Cream Separator Unit">Cream Separator</option>
              <option value="Spare Parts & Consumables">Spare Parts & Liners</option>
              <option value="Routine Shed Maintenance">Routine Shed Maintenance / Repair</option>
              <option value="Other Equipment">Other Dairy Equipment</option>
            </optgroup>
          </select>
        </div>

        {/* Requirement / Message */}
        <div className="form-group">
          <label className="form-label" htmlFor="requirementMessage">
            Requirement Details / Herd Size <span className="required">*</span>
          </label>
          <textarea
            id="requirementMessage"
            name="requirementMessage"
            rows={4}
            placeholder="Tell us about your cattle count, daily milk volume, or specific question..."
            value={formData.requirementMessage}
            onChange={handleChange}
            className={`form-control ${errors.requirementMessage ? "error" : ""}`}
            required
          />
          {errors.requirementMessage && <div className="form-error-msg">{errors.requirementMessage}</div>}
        </div>

        {/* Submit Actions */}
        <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-lg"
            style={{ flex: 1, minWidth: "200px" }}
          >
            <Send size={18} />
            <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
          </button>

          <a
            href={getWhatsAppLink("Hello Jagdamb Enterprises, I would like to quickly discuss equipment prices.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Directly</span>
          </a>
        </div>

        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1rem", textAlign: "center" }}>
          We respect your privacy. Your information is used strictly to provide quotations and technical support.
        </p>
      </form>
    </div>
  );
}
