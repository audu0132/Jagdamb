import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Filter, MessageCircle, X } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { getWhatsAppLink } from "../utils/whatsapp";
import SEOHead from "../components/SEOHead";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("featured");

  // Sync category state with query params
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "featured") {
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      <SEOHead 
        title="Dairy Equipment & Machinery Catalogue"
        description="Browse our complete range of milking machines, milk analysers, cream separators, bulk milk coolers, stainless cans, and genuine dairy spare parts in Baramati."
      />

      <PageHeader
        title="Dairy Equipment Catalogue"
        subtitle="Explore our comprehensive range of high-efficiency milking machinery, testing devices, bulk cooling systems, and genuine replacement spares."
        breadcrumbs={[
          { label: "Products" }
        ]}
        actionButton={
          <a
            href={getWhatsAppLink("Hello Jagdamb Enterprises, please share your complete dairy equipment price list.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Request Price List</span>
          </a>
        }
      />

      <section className="section-py">
        <div className="container">
          {/* Filter & Search Toolbar */}
          <div className="catalog-toolbar">
            {/* Search Input */}
            <div className="catalog-search-box">
              <Search size={18} className="catalog-search-icon" />
              <input
                type="text"
                placeholder="Search milking machines, analysers, spare parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog-search-input"
                aria-label="Search dairy products"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{ position: "absolute", right: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600 }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: "0.5rem 0.85rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "#ffffff", fontSize: "0.875rem", outline: "none" }}
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Alphabetical (A - Z)</option>
                <option value="name-desc">Alphabetical (Z - A)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="category-chips">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`category-chip ${activeCategory === "all" ? "active" : ""}`}
              >
                All Equipment ({products.length})
              </button>
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`category-chip ${activeCategory === cat.id ? "active" : ""}`}
                  >
                    {cat.shortTitle} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Count Status */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
            </span>

            {(searchQuery || activeCategory !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("all");
                }}
                style={{ fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
              >
                <X size={14} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--surface)", borderRadius: "var(--radius-xl)", border: "1px dashed var(--border)" }}>
              <Filter size={40} color="var(--text-muted)" style={{ margin: "0 auto 1rem auto" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>No matching equipment found</h3>
              <p style={{ color: "var(--text-secondary)", maxWidth: "420px", margin: "0 auto 1.5rem auto", fontSize: "0.9375rem" }}>
                We couldn't find any products matching "{searchQuery}". We may still have it in stock or can arrange custom sourcing.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(""); handleCategoryChange("all"); }}
                  className="btn btn-secondary"
                >
                  Clear Search
                </button>
                <a
                  href={getWhatsAppLink(`Hello Jagdamb Enterprises, I am looking for: ${searchQuery}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Bottom Custom Consultation Banner */}
          <div style={{ marginTop: "4.5rem", background: "var(--surface-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(1.25rem, 4vw, 2.5rem)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ maxWidth: "620px" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Need Custom Sizing or an Unlisted Spare Part?
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                We source specific milking machine motors, custom pipeline loops, high-capacity chillers, and specialized analyser consumables on demand. Share your shed specifications with our technical team.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", width: "100%", maxWidth: "420px" }}>
              <Link to="/enquiry" className="btn btn-primary" style={{ flex: "1 1 170px", justifyContent: "center" }}>
                Request Custom Quote
              </Link>
              <a
                href={getWhatsAppLink("Hello Jagdamb Enterprises, I need assistance with dairy equipment that is not listed on your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: "1 1 170px", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Specialist</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
