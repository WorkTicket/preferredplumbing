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
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_API_URL?: string;
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

const json = (body: object, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!env.EMAIL && env.CONTACT_API_URL) {
    return fetch(env.CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await request.text(),
    });
  }
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
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

  if (lead.name.length < 2) return json({ success: false, error: "Please enter your full name." }, 400);
  if (lead.phone.replace(/\D/g, "").length < 10) return json({ success: false, error: "Please enter a valid phone number." }, 400);
  if (lead.city.length < 2) return json({ success: false, error: "Please enter your city or ZIP." }, 400);
  if (!lead.service) return json({ success: false, error: "Please select a service." }, 400);
  if (lead.message.length < 10) return json({ success: false, error: "Please describe your project briefly." }, 400);
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return json({ success: false, error: "Please enter a valid email address." }, 400);
  }
  if (!env.EMAIL) return json({ success: false, error: "Contact delivery is not configured yet." }, 503);

  const recipients = (env.CONTACT_TO_EMAIL || "preferredhnorris@gmail.com,preferredrnorris@gmail.com")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const rows: [string, string][] = [
    ["Name", lead.name], ["Phone", lead.phone], ["Email", lead.email || "Not provided"],
    ["City / ZIP", lead.city], ["Service", lead.service], ["Referral", lead.referral || "Not provided"],
    ["Job details", lead.message],
  ];
  const html = `<h2>New Quote Request</h2><table style="border-collapse:collapse">${rows.map(([label, value]) => `<tr><th style="padding:8px;border:1px solid #ddd;text-align:left">${escapeHtml(label)}</th><td style="padding:8px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`).join("")}</table>`;
  const plain = ["New Quote Request", "", ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");

  try {
    await env.EMAIL.send({
      to: recipients.length === 1 ? recipients[0] : recipients,
      from: { email: env.CONTACT_FROM_EMAIL || "quotes@callpreferredplumbing.com", name: "Preferred Plumbing Solutions" },
      subject: `New Quote Request - ${lead.name} (${lead.service})`,
      html,
      text: plain,
      ...(lead.email ? { replyTo: lead.email } : {}),
    });
    return json({ success: true });
  } catch {
    return json({ success: false, error: "Unable to send your request right now." }, 502);
  }
};
