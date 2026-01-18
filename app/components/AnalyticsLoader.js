"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_consent_v1";

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function readSavedConsent() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    const hasChoice =
      typeof parsed?.analytics === "boolean" || typeof parsed?.ads === "boolean";
    if (!hasChoice) return null;
    return { analytics: !!parsed.analytics, ads: !!parsed.ads };
  } catch {
    return null;
  }
}

function injectGTM(gtmId) {
  if (!gtmId) return;

  if (document.querySelector(`script[data-gtm-id="${gtmId}"]`)) return;

  window.dataLayer = window.dataLayer || [];

  // 1) Default denied
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  // 2) If consent was previously saved, apply it NOW (before gtm.js)
  const saved = readSavedConsent();
  if (saved) {
    gtag("consent", "update", {
      analytics_storage: saved.analytics ? "granted" : "denied",
      ad_storage: saved.ads ? "granted" : "denied",
      ad_user_data: saved.ads ? "granted" : "denied",
      ad_personalization: saved.ads ? "granted" : "denied",
    });
  }

  // 3) Now fire gtm.js and load GTM
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

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

export default function AnalyticsLoader() {
  useEffect(() => {
    injectGTM(process.env.NEXT_PUBLIC_GTM_ID);
  }, []);

  return null;
}
