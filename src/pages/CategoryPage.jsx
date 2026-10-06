import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, ArrowLeft, ArrowRight, ShieldCheck, Milk } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { companyConfig } from "../data/company";
import { getWhatsAppLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = products.filter((p) => p.category === category.id);

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello ${companyConfig.name}, I am interested in your ${category.name} range. Please share technical specifications and current pricing.`
  );

  return (
    <>
      <SEOHead 
        title={`${category.name} Supplier & Dealer`}
        description={category.description}
      />

      <PageHeader
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: "Products", link: "/products" },
          { label: category.name }
        ]}
        actionButton={
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Enquire on Category</span>
          </a>
        }
      />

      <section className="section-py">
        <div className="container">
          {/* Category Overview Card */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "2rem", marginBottom: "3rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ maxWidth: "700px" }}>
              <span className="section-eyebrow">Category Overview</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {category.tagline || category.name}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                All equipment in this category is supplied with genuine manufacturer warranties, food-grade materials, and local technician support from Baramati.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Link to="/products" className="btn btn-secondary">
                <ArrowLeft size={16} />
                <span>All Products</span>
              </Link>
              <Link to="/enquiry" className="btn btn-primary">
                Get Bulk Quote
              </Link>
            </div>
          </div>

          {/* Category Products Grid */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Available Models ({categoryProducts.length})
            </h3>

            {categoryProducts.length > 0 ? (
              <div className="products-grid">
                {categoryProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem", background: "var(--surface-alt)", borderRadius: "var(--radius-lg)", border: "1px dashed var(--border)" }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
                  Currently updating models for this category. Contact us directly for custom configurations and stock availability.
                </p>
                <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={18} />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Other Categories Links */}
          <div style={{ marginTop: "4.5rem", borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Explore Other Categories
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {categories.filter(c => c.id !== category.id).map((otherCat) => (
                <Link
                  key={otherCat.id}
                  to={`/category/${otherCat.slug}`}
                  className="btn btn-secondary btn-sm"
                >
                  <span>{otherCat.shortTitle}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
