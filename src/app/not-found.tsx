import { Icon } from "@/components/Icon";
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
      <a className="btn" href="/">
        Back to home <Icon name="arrow" />
      </a>
    </section>
  );
}
