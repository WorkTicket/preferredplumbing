"use client";

import { useEffect, useState } from "react";

type SafeEmailProps = {
  user: string;
  domain: string;
  className?: string;
};

/** Assemble the address in the browser so Cloudflare email obfuscation never
 * rewrites it to /cdn-cgi/l/email-protection (Ahrefs 404 / broken-link noise). */
export function SafeEmail({ user, domain, className }: SafeEmailProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return (
      <span className={className} aria-hidden="true">
        {"\u00a0"}
      </span>
    );
  }

  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
}
