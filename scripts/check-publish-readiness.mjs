#!/usr/bin/env node
/**
 * Lists business details that still need to be supplied before AERO CLEAN goes live.
 * Usage:  npm run check:publish
 * Exits with code 1 while required items are missing (useful in CI before deploying).
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const cfg = readFileSync(resolve(root, "src/config/site.ts"), "utf8");

const isNull = (key) => new RegExp(`\\b${key}:\\s*null`).test(cfg);

const env = { ...process.env };
for (const f of [".env.production.local", ".env.local", ".env.production", ".env"]) {
  const p = resolve(root, f);
  if (existsSync(p)) {
    for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !env[m[1]]) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

const required = [
  ["Production domain (NEXT_PUBLIC_SITE_URL or PRODUCTION_URL in site.ts)", !env.NEXT_PUBLIC_SITE_URL && !/PRODUCTION_URL = "https:\/\//.test(cfg)],
  ["contact.phoneDisplay + contact.phoneE164 (or email)", isNull("phoneE164") && isNull("email")],
  ["contact.email", isNull("email")],
  ["contact.serviceArea", isNull("serviceArea")],
  ["legal.legalEntityName", isNull("legalEntityName")],
  ["legal.governingLawJurisdiction", isNull("governingLawJurisdiction")],
  ["legal.disputeVenue", isNull("disputeVenue")],
  ["legal.hostingProvider", isNull("hostingProvider")],
  ["legal.paymentMethods", isNull("paymentMethods")],
  ["legal.cancellationNotice", isNull("cancellationNotice")],
  ["legal.showReviewNotes set to false (after legal review)", /showReviewNotes:\s*true/.test(cfg)],
];

const optional = [
  ["contact.hours", isNull("hours")],
  ["contact.address (only if customers can visit or mail)", isNull("address")],
  ["legal.entityDescription", isNull("entityDescription")],
  ["legal.lateCancellationFee (or state none is charged)", isNull("lateCancellationFee")],
  ["legal.privacyContactEmail (falls back to contact.email)", isNull("privacyContactEmail")],
];

const missing = required.filter(([, m]) => m);
const missingOpt = optional.filter(([, m]) => m);

console.log("\nAERO CLEAN — publish readiness\n");
if (!missing.length) console.log("✔ All required business details are set.");
else {
  console.log("✖ Required before publishing:");
  for (const [k] of missing) console.log(`   • ${k}`);
}
if (missingOpt.length) {
  console.log("\n• Optional / recommended:");
  for (const [k] of missingOpt) console.log(`   • ${k}`);
}
console.log("\nAlso search the legal pages for amber [placeholders] and review notes. See BUSINESS-DETAILS-CHECKLIST.md.\n");
process.exit(missing.length ? 1 : 0);
