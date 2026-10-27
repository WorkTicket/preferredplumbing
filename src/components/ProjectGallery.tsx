"use client";
import { useEffect, useRef, useState } from "react";
import { projectPhotos, type ProjectPhoto } from "@/data/gallery";
import { Icon } from "./Icon";
export function ProjectGallery({ items }: { items: ProjectPhoto[] }) {
  const [photo, setPhoto] = useState<ProjectPhoto | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (photo && !dialog.current?.open) dialog.current?.showModal();
  }, [photo]);
  return (
    <>
      <div className="project-grid">
        {items.map((item, index) => (
          <button
            type="button"
            className="project"
            key={`${item.src}-${index}`}
            onClick={() => setPhoto(item)}
            aria-label={`View ${item.title}`}
          >
            <div className="project-image">
              <img src={item.src} alt={item.title} loading="lazy" />
              <span className="expand">
                <Icon name="expand" />
              </span>
            </div>
            <div className="project-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>
                North Idaho <Icon name="arrow" />
              </p>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="modal"
        aria-label={photo?.title || "Project photo"}
        onClose={() => setPhoto(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            dialog.current?.close();
        }}
      >
        {photo && (
          <>
            <img src={photo.src} alt={photo.title} />
            <div className="modal-bottom">
              <h3>{photo.title}</h3>
              <button
                type="button"
                className="close"
                autoFocus
                onClick={() => dialog.current?.close()}
              >
                Close ×
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
export function GalleryExplorer() {
  const [category, setCategory] = useState("All Projects");
  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "New Construction",
    "Remodels",
    "Additional Photos",
  ];
  const filtered = projectPhotos.filter(
    (photo) => category === "All Projects" || photo.category === category,
  );
  return (
    <section className="section wrap">
      <div className="gallery-toolbar">
        <div>
          <div className="eyebrow">Preferred on the job</div>
          <h2>Built by our team.</h2>
        </div>
        <span className="gallery-count" role="status">
          {filtered.length} project photo{filtered.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="filterbar" aria-label="Filter projects">
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
      <ProjectGallery items={filtered} />
    </section>
  );
}
