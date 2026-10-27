"use client";
import { useState } from "react";
import { services } from "@/data/services";
import { ServiceCards } from "./ServiceCards";
const categories = [
  "All services",
  "Repairs",
  "Heating",
  "Water",
  "Building",
  "Remodeling",
];
export function ServicesExplorer() {
  const [category, setCategory] = useState("All services");
  const [query, setQuery] = useState("");
  const filtered = services.filter(
    (service) =>
      (category === "All services" || service.category === category) &&
      `${service.title} ${service.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section className="section wrap">
      <div className="gallery-toolbar">
        <div>
          <div className="eyebrow">Find the right help</div>
          <h2>What’s on your list?</h2>
        </div>
        <label htmlFor="service-search">
          Search our services
          <input
            id="service-search"
            className="service-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try radiant heat, drain, remodel…"
          />
        </label>
      </div>
      <div className="filterbar" aria-label="Filter services">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ServiceCards
        slugs={filtered.map((service) => service.slug)}
        useServiceCutouts
      />
      <p className="result-status" role="status">
        {filtered.length
          ? `${filtered.length} service${filtered.length === 1 ? "" : "s"}`
          : "No matching services. Try a different term or call 208-290-3889."}
      </p>
    </section>
  );
}
