"use client";

import { useState } from "react";

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

export default function CookieBanner() {
  const [showModal, setShowModal] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  let visible = false;

  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const alreadyChosen = saved === "accepted" || saved === "rejected";
    visible = !dismissed && !alreadyChosen;
  }

  const applyConsent = (value) => {
    if (typeof window === "undefined") return;

    // store choice
    window.localStorage.setItem(STORAGE_KEY, value);

    // load GTM immediately if accepted
    if (value === "accepted") {
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      injectGTM(gtmId);
    }
  };

  const handleReject = () => {
    applyConsent("rejected");
    setDismissed(true);
  };

  const handleAccept = () => {
    applyConsent("accepted");
    setDismissed(true);
  };

  const handleSavePreferences = () => {
    applyConsent(analyticsToggle ? "accepted" : "rejected");
    setShowModal(false);
    setDismissed(true);
  };

  return (
    <div suppressHydrationWarning>
      {!visible ? null : (
        <>
          {/* Main banner */}
          <div className="fixed inset-x-0 bottom-0 z-40">
            <div className="mx-auto mb-4 max-w-5xl rounded-2xl border border-slate-800 bg-slate-950/95 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                {/* Text */}
                <div className="text-sm text-slate-200 md:text-[15px]">
                  <p className="font-semibold text-slate-50">
                    Cookies & analytics
                  </p>
                  <p className="mt-1 text-slate-300">
                    We use essential cookies to make the site work, and optional
                    analytics cookies to understand how the site is used and
                    improve it. Analytics only run if you choose to allow them.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col flex-col-reverse gap-2 md:flex-row md:items-center">
                  <button
                    onClick={handleReject}
                    className="
                      w-full rounded-md border border-slate-500
                      px-4 py-2 text-sm font-medium text-slate-100
                      hover:bg-slate-800 md:w-auto
                    "
                  >
                    Continue without analytics
                  </button>

                  <button
                    onClick={() => setShowModal(true)}
                    className="
                      w-full rounded-md border border-slate-500
                      px-4 py-2 text-sm font-medium text-slate-100
                      hover:bg-slate-800 md:w-auto
                    "
                  >
                    Customize cookies
                  </button>

                  <button
                    onClick={handleAccept}
                    className="
                      w-full rounded-md bg-red-600
                      px-4 py-2 text-sm font-semibold text-white
                      shadow-sm hover:bg-red-500 md:w-auto
                    "
                  >
                    Allow analytics cookies
                  </button>
                </div>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                You can change your choice at any time by clearing cookies in
                your browser. For full details, see the{" "}
                <a
                  href="/cookies-policy"
                  className="underline underline-offset-2 hover:text-slate-200"
                >
                  Cookies Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Customize modal (overlay, not another banner) */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
              <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-950 px-6 py-6 shadow-xl">
                <h2 className="text-xl font-semibold text-white">
                  Cookie preferences
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Choose which types of cookies you want to allow. You can change
                  this anytime in your browser settings.
                </p>

                {/* Essential */}
                <div className="mt-6 flex items-start justify-between rounded-xl border border-slate-700 bg-slate-900 px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Essential cookies
                    </p>
                    <p className="text-sm text-slate-400">
                      Required for basic site functionality. These cannot be
                      disabled.
                    </p>
                  </div>

                  <span className="rounded-md bg-slate-700 px-3 py-1 text-xs text-slate-300">
                    Always on
                  </span>
                </div>

                {/* Analytics */}
                <div className="mt-4 flex items-start justify-between rounded-xl border border-slate-700 bg-slate-900 px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Analytics cookies
                    </p>
                    <p className="text-sm text-slate-400">
                      Help us understand how the site is used so we can improve
                      it.
                    </p>
                  </div>

                  <label className="inline-flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={analyticsToggle}
                      onChange={(e) =>
                        setAnalyticsToggle(e.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-500 text-red-600 focus:ring-red-500"
                    />
                    <span className="text-sm text-slate-200">Allow</span>
                  </label>
                </div>

                {/* Modal buttons */}
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSavePreferences}
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Save preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
