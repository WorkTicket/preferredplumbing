"use client";
import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { Icon } from "./Icon";

declare global {
  interface Window {
    turnstile?: {
      render(
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ): string;
      remove(widgetId: string): void;
      reset(widgetId: string): void;
    };
  }
}

const TURNSTILE_SITE_KEY = "0x4AAAAAAFoontrgAeyZ2g5v";

export function EstimateForm() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileElement = useRef<HTMLDivElement>(null);
  const turnstileWidget = useRef<string | null>(null);
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("service");
    if (selected && services.some((item) => item.slug === selected))
      setService(selected);
  }, []);
  useEffect(() => {
    if (!turnstileReady || !window.turnstile || !turnstileElement.current)
      return;
    turnstileWidget.current = window.turnstile.render(
      turnstileElement.current,
      {
        sitekey: TURNSTILE_SITE_KEY,
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      },
    );
    return () => {
      if (turnstileWidget.current && window.turnstile) {
        window.turnstile.remove(turnstileWidget.current);
      }
      turnstileWidget.current = null;
    };
  }, [turnstileReady]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("");
    setError("");
    setSubmitting(true);
    const form = new FormData(formElement);
    const serviceName =
      services.find((item) => item.slug === service)?.title ||
      "Other / Not sure";
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          email: form.get("email"),
          city: form.get("city"),
          service: serviceName,
          message: form.get("details"),
          referral: form.get("referral"),
          _honey: form.get("_honey"),
          turnstileToken,
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;
      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error || "Unable to send your request right now.",
        );
      }
      formElement.reset();
      setService("");
      setStatus(
        "Thanks — your request was sent. We’ll get back to you within one business day.",
      );
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Unable to send your request. Please call 208-290-3889.",
      );
    } finally {
      setSubmitting(false);
      setTurnstileToken("");
      if (turnstileWidget.current && window.turnstile) {
        window.turnstile.reset(turnstileWidget.current);
      }
    }
  }
  return (
    <form className="form contact-form" id="estimate" onSubmit={submit}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
      />
      <input
        name="_honey"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px" }}
      />
      <h3>Request your free estimate.</h3>
      <div className="fields">
        <label>
          Your name
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="208-XXX-XXXX"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          City / ZIP
          <input
            name="city"
            required
            autoComplete="address-level2"
            placeholder="Spirit Lake, ID"
          />
        </label>
        <label className="full">
          What can we help with?
          <select
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option value={item.slug} key={item.slug}>
                {item.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </label>
        <label className="full">
          How did you hear about us?
          <select name="referral" defaultValue="">
            <option value="">Select an option</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="TikTok">TikTok</option>
            <option value="Friend / Referral">Friend / referral</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="full">
          Tell us a little about the job
          <textarea
            name="details"
            required
            placeholder="What’s happening, or what are you planning?"
          />
        </label>
      </div>
      <div ref={turnstileElement} className="mt-3" />
      <button
        className="btn"
        type="submit"
        disabled={submitting || !turnstileToken}
      >
        {submitting ? "Sending…" : "Get my free estimate"} <Icon name="arrow" />
      </button>
      <small>No spam. We’ll respond within one business day.</small>
      <p role="status" className="mt-3 text-xs" style={{ color: "#176b3a" }}>
        {status}
      </p>
      {error && (
        <p role="alert" className="mt-3 text-xs" style={{ color: "#b42318" }}>
          {error} <a href="tel:2082903889">Call 208-290-3889 instead.</a>
        </p>
      )}
    </form>
  );
}
