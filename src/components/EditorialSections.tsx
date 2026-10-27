import { Icon } from "./Icon";
export function FamilyStandard() {
  return (
    <section className="family-standard" id="about">
      <div className="wrap family-grid">
        <div className="family-visual">
          <div className="family-photo-kicker">
            Owner-operated <span>•</span> Spirit Lake, Idaho
          </div>
          <div className="family-photo family-photo--inspect">
            <div className="orb" />
            <img
              src="/assets/hunter-inspects.webp"
              alt="Hunter Norris of Preferred Plumbing Solutions inspecting the plumbing beneath a bathroom sink"
              loading="lazy"
              width={1100}
              height={1005}
            />
            <div className="experience-mark">
              <b>38+</b>
              <span>
                COMBINED YEARS
                <br />
                IN THE TRADE
              </span>
            </div>
          </div>
        </div>
        <div className="family-copy">
          <div className="eyebrow">A family trade. A personal standard.</div>
          <h2>
            Our name is
            <br />
            <span className="cyan">on the work.</span>
          </h2>
          <p className="family-intro">
            Preferred Plumbing Solutions is a father-son shop run by Ron and
            Hunter Norris out of Spirit Lake. You get owners on the tools for
            new construction, radiant heat, remodels, and everyday repairs.
          </p>
          <div className="family-principles">
            <div>
              <Icon name="users" />
              <div>
                <h3>Direct conversation.</h3>
                <p>Talk with the people doing the work from start to finish.</p>
              </div>
            </div>
            <div>
              <Icon name="wrench" />
              <div>
                <h3>Care in the details.</h3>
                <p>
                  Good materials, thoughtful layouts, and lasting connections.
                </p>
              </div>
            </div>
            <div>
              <Icon name="pin" />
              <div>
                <h3>Rooted right here.</h3>
                <p>Local experience for North Idaho homes and winters.</p>
              </div>
            </div>
          </div>
          <div className="family-credentials">
            <span>✓ Owner-operated</span>
            <span>✓ Licensed &amp; insured</span>
            <span>✓ Local to Spirit Lake</span>
          </div>
          <div className="family-footer">
            <div className="signature">Ron &amp; Hunter Norris</div>
            <a href="/contact/" className="btn dark">
              Talk with our team <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ContactPreparation() {
  return (
    <section className="depth-showcase depth-water">
      <div className="wrap depth-grid">
        <div className="depth-copy">
          <div className="eyebrow">A good place to start</div>
          <h2>
            A few details.
            <br />A better conversation.
          </h2>
          <p>
            You do not need to diagnose the plumbing yourself. Tell us what you
            notice and what you want to change.
          </p>
          <div className="scenario-list">
            <div>
              <Icon name="pin" />
              <span>The property address and how to reach you</span>
            </div>
            <div>
              <Icon name="camera" />
              <span>A photo of the fixture, equipment, or project plans</span>
            </div>
            <div>
              <Icon name="clock" />
              <span>When it started and what timing you have in mind</span>
            </div>
          </div>
          <p className="small-note">
            Urgent issue? Call during business hours: Sunday–Friday, 7am–5pm.
            Saturday closed.
          </p>
        </div>
        <div className="depth-art">
          <div className="orb" />
          <img
            src="/assets/repairs-realistic.webp"
            alt="Photorealistic plumbing repair tools and fittings"
            loading="lazy"
            width={1536}
            height={1024}
          />
          <div className="art-label">
            <Icon name="chat" />
            <span>
              No need for all the answers.
              <br />
              <b>Just start with the call.</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ProjectStory() {
  return (
    <section className="project-story">
      <div className="wrap">
        <div className="sectionhead">
          <div>
            <div className="eyebrow cyan">
              The work behind the finished space
            </div>
            <h2>
              Rough-in.
              <br />
              Connections. Finish.
            </h2>
          </div>
          <p>
            A finished bathroom is only part of the story. The gallery also
            shows the pipe routes, mechanical rooms, and in-progress work behind
            the walls.
          </p>
        </div>
        <div className="project-story-grid">
          {[
            [
              "/assets/real-new-construction-rough-in-1.webp",
              "home",
              "Start with the structure.",
              "Pipe routes, layout, and coordination while the walls are open.",
            ],
            [
              "/assets/real-boiler-mechanical-room-1.webp",
              "heat",
              "Make the systems work.",
              "Water, heat, and controls brought together for the property.",
            ],
            [
              "/assets/real-modern-bathroom-fixtures-1.webp",
              "spark",
              "Finish the everyday details.",
              "Fixtures and trim you use from the first morning onward.",
            ],
          ].map(([src, ic, h, p]) => (
            <article key={h}>
              <img src={src} alt={h} loading="lazy" />
              <div>
                <Icon name={ic as "home" | "heat" | "spark"} />
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function GuidePlanning({ topic }: { topic: string }) {
  const heating = /heat|driveway|radiant/i.test(topic);
  return (
    <section className="guide-planning">
      <div className="wrap depth-grid">
        <div className="depth-art">
          <div className="orb" />
          <img
            src={
              heating
                ? "/assets/snowmelt.webp"
                : "/assets/repairs-realistic.webp"
            }
            alt="Plumbing project planning illustration"
            loading="lazy"
          />
        </div>
        <div className="depth-copy">
          <div className="eyebrow">Turn your ideas into a plan</div>
          <h2>
            Your home.
            <br />
            Your next step.
          </h2>
          <p>
            Service information can help you compare options. A conversation
            about your property puts those options in context.
          </p>
          <div className="scenario-list">
            <div>
              <Icon name="home" />
              <span>Describe your existing system or project.</span>
            </div>
            <div>
              <Icon name="camera" />
              <span>Share plans, photos, or an equipment label.</span>
            </div>
            <div>
              <Icon name="chat" />
              <span>Ask which options fit your home and priorities.</span>
            </div>
          </div>
          <a className="btn dark" href="/contact/">
            Ask Preferred <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
