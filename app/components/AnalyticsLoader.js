"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_analytics_consent";

export default function AnalyticsLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (consent !== "accepted") return;

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (!gtmId) return;

    // Prevent duplicates
    if (document.querySelector(`script[data-gtm-id="${gtmId}"]`)) return;

    // Define dataLayer before GTM loads (good practice)
    window.dataLayer = window.dataLayer || [];

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.dataset.gtmId = gtmId;
    document.head.appendChild(script);
  }, []);

  return null;
}
