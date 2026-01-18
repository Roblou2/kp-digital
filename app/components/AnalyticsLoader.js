"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_consent_v1";

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function injectGTM(gtmId) {
  if (!gtmId) return;

  // Prevent duplicates
  if (document.querySelector(`script[data-gtm-id="${gtmId}"]`)) return;

  // Define dataLayer BEFORE loading GTM
  window.dataLayer = window.dataLayer || [];

  // ✅ Proper Consent Mode default (DENIED) BEFORE GTM loads
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  // GTM start event
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  // Preserve GTM preview params if present
  const qs = new URLSearchParams(window.location.search);
  const gtmPreview = qs.get("gtm_preview");
  const gtmAuth = qs.get("gtm_auth");
  const gtmCookiesWin = qs.get("gtm_cookies_win");

  const url = new URL("https://www.googletagmanager.com/gtm.js");
  url.searchParams.set("id", gtmId);
  if (gtmPreview) url.searchParams.set("gtm_preview", gtmPreview);
  if (gtmAuth) url.searchParams.set("gtm_auth", gtmAuth);
  if (gtmCookiesWin) url.searchParams.set("gtm_cookies_win", gtmCookiesWin);

  const script = document.createElement("script");
  script.async = true;
  script.src = url.toString();
  script.dataset.gtmId = gtmId;
  document.head.appendChild(script);
}

function applySavedConsentIfAny() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  let consent;
  try {
    consent = JSON.parse(raw);
  } catch {
    return;
  }

  const analytics = !!consent.analytics;
  const ads = !!consent.ads;

  // ✅ Proper Consent Mode update
  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: ads ? "granted" : "denied",
  });
}

export default function AnalyticsLoader() {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    // Always inject GTM (with default denied)
    injectGTM(gtmId);

    // If the user already chose previously, apply it immediately
    applySavedConsentIfAny();
  }, []);

  return null;
}
