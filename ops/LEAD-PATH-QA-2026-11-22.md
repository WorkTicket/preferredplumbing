# Lead path QA — heating tags

## Code verification (done)

- Contact form reads `?service=` on load and selects a matching `services` slug (`EstimateForm.tsx`).
- Valid tags: `radiant-heat`, `heated-driveways`, `new-construction` (and other service slugs).
- POST `/api/contact` sends the **service title** string (e.g. “Hydronic Radiant Floor Heating”), not the slug.
- Origin must be `https://www.callpreferredplumbing.com`; Turnstile required.

## Live QA checklist (office)

Run after production deploy. Label every test clearly so it is excluded from the lead log.

1. Mobile: open `/contact/?service=radiant-heat` — confirm dropdown shows Hydronic Radiant Floor Heating.
2. Submit one form titled **QA — radiant heat tag test — do not quote** with city Spirit Lake.
3. Confirm email/CRM shows the radiant service title and message.
4. Repeat for `heated-driveways` and `new-construction`.
5. Optional: one consented click-to-call check of public number during business hours — do not count as a lead.
6. Record pass/fail below.

| Test | Date | Pass? | Inbox evidence | Notes |
| --- | --- | --- | --- | --- |
| radiant-heat prefill + submit | | | | |
| heated-driveways prefill + submit | | | | |
| new-construction prefill + submit | | | | |
| click-to-call (optional) | | | | |

## Why automated submit was not fired from this agent session

Turnstile + production origin checks intentionally block headless POSTs. Office completes the three labeled submits after deploy.
