"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_analytics_consent";

function injectGTM(gtmId) {
  if (!gtmId) return;

  // Prevent duplicates
  if (document.querySelector(`script[data-gtm-id="${gtmId}"]`)) return;

  // Always define dataLayer before GTM loads (best practice)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  // Preserve GTM preview params if present (Tag Assistant)
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
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (consent !== "accepted") return;

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    injectGTM(gtmId);
  }, []);

  return null;
}
