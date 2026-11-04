"use client";
import { useState } from "react";
import { locations } from "@/data/locations";
import { baseTown, countyOrder, mapPoints } from "@/data/location-map";
import { Icon } from "./Icon";
import { ServiceAreaMap } from "./ServiceAreaMap";

export function LocationsDirectory() {
  const [active, setActive] = useState<string | null>(null);
  const groups = countyOrder
    .map((county) => ({
      county,
      towns: mapPoints
        .filter((p) => p.county === county)
        .map((p) => locations.find((l) => l.slug === p.slug))
        .filter((l): l is (typeof locations)[number] => Boolean(l))
        .sort((a, b) => a.city.localeCompare(b.city)),
    }))
    .filter((g) => g.towns.length);

  return (
    <section className="section hub-area" id="service-area">
      <div className="wrap">
        <div className="sectionhead">
          <div>
            <div className="eyebrow">Service area</div>
            <h2>
              Find your town.
              <br />
              We’ll plan the trip.
            </h2>
          </div>
          <p>
            {locations.length} communities across North Idaho and Eastern
            Washington, all served from our Spirit Lake shop. Check the map and
            coverage list, then call us to confirm your address.
          </p>
        </div>
        <div className="hub-summary" aria-label="Service area summary">
          <span>
            <b>{locations.length}</b> communities
          </span>
          <span>
            <b>{countyOrder.length}</b> county areas
          </span>
          <span>
            <b>2</b> states
          </span>
        </div>
        <div className="hub-layout">
          <ServiceAreaMap active={active} onActive={setActive} />
          <div className="hub-directory-head">
            <div>
              <div className="eyebrow">Coverage by county</div>
              <h3>Communities we serve</h3>
            </div>
            <p>Hover a community to locate it on the map.</p>
          </div>
          <div className="hub-groups">
            {groups.map((group) => (
              <div key={group.county} className="hub-group">
                <h3>{group.county}</h3>
                <ul>
                  {group.towns.map((town) => (
                    <li
                      key={town.slug}
                      data-active={active === town.slug || undefined}
                      onMouseEnter={() => setActive(town.slug)}
                      onMouseLeave={() => setActive(null)}
                      tabIndex={0}
                      onFocus={() => setActive(town.slug)}
                      onBlur={() => setActive(null)}
                    >
                      <Icon name="pin" />
                      <span>
                        <a href={`/locations/${town.slug}/`}>{town.city}</a>
                        <small>
                          {town.state}
                          {town.slug === baseTown ? " · Our shop" : ""}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="hub-notlisted">
              <span>
                <b>Not on the list?</b> We may still be able to help.
              </span>
              <a href="tel:2082903889">Call 208-290-3889</a>
              <small>Share your address and we’ll confirm the trip.</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
