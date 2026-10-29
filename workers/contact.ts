type RateLimiter = {
  limit(options: { key: string }): Promise<{ success: boolean }>;
};

type Env = {
  EMAIL?: {
    send(message: {
      to: string | string[];
      from: { email: string; name: string };
      subject: string;
      html: string;
      text: string;
      replyTo?: string;
    }): Promise<unknown>;
  };
  CONTACT_RATE_LIMITER: RateLimiter;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  TURNSTILE_SECRET?: string;
};

type Lead = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
  referral: string;
};

const SITE_ORIGIN = "https://www.callpreferredplumbing.com";
const MAX_BODY_BYTES = 16_384;
const json = (body: object, status = 200, headers: HeadersInit = {}) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const verifyTurnstile = async (
  token: string,
  secret: string,
  remoteip: string,
) => {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip }),
    },
  );
  if (!response.ok) return false;
  const result = (await response.json()) as {
    success?: boolean;
    hostname?: string;
  };
  return (
    result.success === true &&
    result.hostname === "www.callpreferredplumbing.com"
  );
};

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (
      url.hostname !== "www.callpreferredplumbing.com" ||
      url.pathname !== "/api/contact"
    ) {
      return json({ success: false, error: "Not found." }, 404);
    }
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed." }, 405, {
        Allow: "POST",
      });
    }
    if (request.headers.get("Origin") !== SITE_ORIGIN) {
      return json({ success: false, error: "Invalid request origin." }, 403);
    }
    if (
      !request.headers
        .get("Content-Type")
        ?.toLowerCase()
        .startsWith("application/json")
    ) {
      return json(
        { success: false, error: "Content type must be application/json." },
        415,
      );
    }
    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return json({ success: false, error: "Request body is too large." }, 413);
    }

    const rateLimitKey = request.headers.get("CF-Connecting-IP") || "unknown";
    const { success: withinLimit } = await env.CONTACT_RATE_LIMITER.limit({
      key: rateLimitKey,
    });
    if (!withinLimit) {
      return json(
        {
          success: false,
          error: "Too many requests. Please wait a minute and try again.",
        },
        429,
        { "Retry-After": "60" },
      );
    }

    let raw: Record<string, unknown>;
    try {
      const body = await request.text();
      if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
        return json(
          { success: false, error: "Request body is too large." },
          413,
        );
      }
      raw = JSON.parse(body) as Record<string, unknown>;
    } catch {
      return json({ success: false, error: "Invalid request body." }, 400);
    }

    if (text(raw._honey)) return json({ success: true });
    const lead: Lead = {
      name: text(raw.name),
      phone: text(raw.phone),
      email: text(raw.email),
      city: text(raw.city),
      service: text(raw.service),
      message: text(raw.message),
      referral: text(raw.referral),
    };

    if (lead.name.length < 2)
      return json(
        { success: false, error: "Please enter your full name." },
        400,
      );
    if (lead.phone.replace(/\D/g, "").length < 10)
      return json(
        { success: false, error: "Please enter a valid phone number." },
        400,
      );
    if (lead.city.length < 2)
      return json(
        { success: false, error: "Please enter your city or ZIP." },
        400,
      );
    if (!lead.service)
      return json({ success: false, error: "Please select a service." }, 400);
    if (lead.message.length < 10)
      return json(
        { success: false, error: "Please describe your project briefly." },
        400,
      );
    if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return json(
        { success: false, error: "Please enter a valid email address." },
        400,
      );
    }
    const turnstileToken = text(raw.turnstileToken);
    if (!turnstileToken || !env.TURNSTILE_SECRET) {
      return json(
        { success: false, error: "Please complete the security check." },
        400,
      );
    }
    if (
      !(await verifyTurnstile(
        turnstileToken,
        env.TURNSTILE_SECRET,
        rateLimitKey,
      ))
    ) {
      return json(
        { success: false, error: "Security check failed. Please try again." },
        403,
      );
    }
    if (!env.EMAIL) {
      return json(
        { success: false, error: "Contact delivery is not configured yet." },
        503,
      );
    }

    const recipients = (
      env.CONTACT_TO_EMAIL ||
      "preferredhnorris@gmail.com,preferredrnorris@gmail.com,coltondwehr@icloud.com"
    )
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);
    const rows: [string, string][] = [
      ["Name", lead.name],
      ["Phone", lead.phone],
      ["Email", lead.email || "Not provided"],
      ["City / ZIP", lead.city],
      ["Service", lead.service],
      ["Referral", lead.referral || "Not provided"],
      ["Job details", lead.message],
    ];
    const html = `<h2>New Quote Request</h2><table style="border-collapse:collapse">${rows.map(([label, value]) => `<tr><th style="padding:8px;border:1px solid #ddd;text-align:left">${escapeHtml(label)}</th><td style="padding:8px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`).join("")}</table>`;
    const plain = [
      "New Quote Request",
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");

    try {
      await env.EMAIL.send({
        to: recipients.length === 1 ? recipients[0] : recipients,
        from: {
          email: env.CONTACT_FROM_EMAIL || "quotes@callpreferredplumbing.com",
          name: "Preferred Plumbing Solutions",
        },
        subject: `New Quote Request - ${lead.name} (${lead.service})`,
        html,
        text: plain,
        ...(lead.email ? { replyTo: lead.email } : {}),
      });
      return json({ success: true });
    } catch {
      return json(
        { success: false, error: "Unable to send your request right now." },
        502,
      );
    }
  },
};
