"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_analytics_consent";

export default function AnalyticsLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(STORAGE_KEY);

    // GTM requires dataLayer defined EARLY
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }

    // Default (before consent)
    gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied"
    });

    // If previously accepted → allow analytics now
    if (consent === "accepted") {
      gtag("consent", "update", {
        analytics_storage: "granted"
      });

      loadGTM();
    }

    function loadGTM() {
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      if (!gtmId) return;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
