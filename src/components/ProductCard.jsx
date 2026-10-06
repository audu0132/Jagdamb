import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import ProductImage from "./ProductImage";
import { getProductInquiryMessage, getWhatsAppLink } from "../utils/whatsapp";

export default function ProductCard({ product }) {
  if (!product) return null;

  const whatsappMessage = getProductInquiryMessage(product);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <article className="product-card" aria-label={product.name}>
      {/* Badge if present */}
      {product.badge && (
        <span className="product-badge gold">
          {product.badge}
        </span>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.slug}`} tabIndex={-1}>
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          height="210px"
        />
      </Link>

      {/* Card Content */}
      <div className="product-card-body">
        <span className="product-category-tag">
          {product.categoryName}
        </span>

        <h3 className="product-card-title">
          <Link to={`/product/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-card-desc">
          {product.shortDescription}
        </p>

        {/* Key Specs Preview (first 2 specs) */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="product-specs-list">
            {product.specifications.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="product-spec-row">
                <span className="product-spec-label">{spec.label}:</span>
                <span className="product-spec-val">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="product-card-actions">
          <Link
            to={`/product/${product.slug}`}
            className="btn btn-secondary btn-sm"
            aria-label={`View details for ${product.name}`}
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`Enquire on WhatsApp for ${product.name}`}
          >
            <MessageCircle size={15} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
