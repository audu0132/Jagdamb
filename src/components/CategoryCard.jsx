import React from "react";
import { Link } from "react-router-dom";
import { 
  Milk, 
  Activity, 
  Filter, 
  Snowflake, 
  Layers, 
  Cog, 
  Scissors, 
  Wrench, 
  ArrowRight 
} from "lucide-react";

export default function CategoryCard({ category }) {
  if (!category) return null;

  // Icon mapping
  const iconMap = {
    Milk: Milk,
    Activity: Activity,
    Filter: Filter,
    Snowflake: Snowflake,
    Layers: Layers,
    Cog: Cog,
    Scissors: Scissors,
    Wrench: Wrench,
  };

  const IconComponent = iconMap[category.icon] || Milk;

  return (
    <div className="category-card">
      <div className="category-icon-wrapper">
        <IconComponent size={26} />
      </div>

      <h3 className="category-card-title">
        {category.name}
      </h3>

      <p className="category-card-desc">
        {category.tagline || category.description}
      </p>

      <Link to={`/category/${category.slug}`} className="category-card-link">
        <span>Explore Category</span>
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
