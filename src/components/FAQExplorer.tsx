"use client";
import { useState } from "react";
import { faqs } from "@/data/faqs";
export function FAQExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All questions");
  const items = faqs.filter(
    (item) =>
      (category === "All questions" || item.category === category) &&
      `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="section wrap">
      <div className="gallery-toolbar">
        <div>
          <div className="eyebrow">Find a useful answer</div>
          <h2>What’s on your mind?</h2>
        </div>
        <label>
          Search questions
          <input
            className="service-search"
            type="search"
            placeholder="Try estimates, radiant, drains…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="filterbar">
        {[
          "All questions",
          "Working with Preferred",
          "Heating & hot water",
          "Repairs & projects",
        ].map((item) => (
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
      <div className="faqgroup">
        {items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      <p className="result-status" role="status">
        {items.length} matching questions
      </p>
    </section>
  );
}
