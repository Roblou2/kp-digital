"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kp_analytics_consent";

export default function AnalyticsLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(STORAGE_KEY);

    // GTM requires dataLayer defined EARLY
   window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "default_consent",
  consent: {
    analytics_storage: "denied",
    ad_storage: "denied",
  },
});


    // If previously accepted → allow analytics now
    if (consent === "accepted") {
  window.dataLayer.push({
  event: "consent_update",
  consent: {
    analytics_storage: "granted",
  },
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
