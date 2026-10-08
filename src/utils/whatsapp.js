import { companyConfig } from "../data/company";

/**
 * Creates a formatted WhatsApp click-to-chat URL
 * @param {string} message - Pre-filled message text
 * @returns {string} - WhatsApp API URL
 */
export const getWhatsAppLink = (message = "") => {
  const number = companyConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText = `Hello ${companyConfig.name}, I would like to inquire about your dairy equipment and services.`;
  const encodedText = encodeURIComponent(message || defaultText);
  return `https://wa.me/${number}?text=${encodedText}`;
};

/**
 * Generates an inquiry message for a specific product
 * @param {Object} product - Product details object
 * @returns {string} - Pre-filled message
 */
export const getProductInquiryMessage = (product) => {
  if (!product) return `Hello ${companyConfig.name}, I am interested in your dairy equipment. Please share details and pricing.`;
  if (product.customWhatsAppMessage) return product.customWhatsAppMessage;
  return `Hello ${companyConfig.name}, I am interested in: *${product.name}* (Category: ${product.categoryName || product.category}). Please share technical details, availability, and best price for Baramati/Maharashtra delivery.`;
};

/**
 * Direct phone call link generator
 * @param {string} phone
 * @returns {string}
 */
export const getPhoneLink = (phone = companyConfig.primaryPhone) => {
  const sanitized = phone.replace(/[^\d+]/g, "");
  return `tel:${sanitized}`;
};
