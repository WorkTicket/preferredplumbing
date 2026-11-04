import type { Metadata } from "next";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section wrap min-h-[55vh]">
      <div className="eyebrow">Page not found</div>
      <h1 className="text-6xl md:text-8xl">
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you’re looking for isn’t here. Our team can still help.</p>
      <div className="actions" style={{ marginTop: "1.25rem" }}>
        <a className="btn" href="/">
          Back to home <Icon name="arrow" />
        </a>
        <a className="btn dark" href="/locations/">
          Service areas <Icon name="arrow" />
        </a>
        <a className="btn dark" href="/services/">
          Services <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
