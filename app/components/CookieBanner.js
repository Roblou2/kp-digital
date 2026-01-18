"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kp_consent_v1";

function getSavedConsent() {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.analytics === "boolean" ||
      typeof parsed?.ads === "boolean"
    ) {
      return { analytics: !!parsed.analytics, ads: !!parsed.ads };
    }
    return null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(true);
  const [adsToggle, setAdsToggle] = useState(false);

  // Only flips once; acceptable effect use
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Read consent only after hydration
  const savedConsent = useMemo(() => {
    if (!hydrated) return null;
    return getSavedConsent();
  }, [hydrated]);

  const visible = hydrated && !dismissed && !savedConsent;

  function updateConsent({ analytics, ads }) {
    // store choices
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, ads }));

    // update Google consent signals
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: ads ? "granted" : "denied",
      ad_user_data: ads ? "granted" : "denied",
      ad_personalization: ads ? "granted" : "denied",
    });
  }

  const handleReject = () => {
    updateConsent({ analytics: false, ads: false });
    setDismissed(true);
  };

  const handleAccept = () => {
    updateConsent({ analytics: true, ads: false });
    setDismissed(true);
  };

  const handleSavePreferences = () => {
    updateConsent({ analytics: analyticsToggle, ads: adsToggle });
    setShowModal(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div suppressHydrationWarning>
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
                  className="w-full rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:w-auto"
                >
                  Continue without analytics
                </button>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:w-auto"
                >
                  Customize cookies
                </button>

                <button
                  onClick={handleAccept}
                  className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 md:w-auto"
                >
                  Allow analytics cookies
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              You can change your choice at any time by clearing cookies in your
              browser. For full details, see the{" "}
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

        {/* Customize modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
            <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-950 px-6 py-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white">
                Cookie preferences
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Choose which types of cookies you want to allow.
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
                    onChange={(e) => setAnalyticsToggle(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-500 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-slate-200">Allow</span>
                </label>
              </div>

              {/* Marketing */}
              <div className="mt-4 flex items-start justify-between rounded-xl border border-slate-700 bg-slate-900 px-4 py-4">
                <div>
                  <p className="font-semibold text-slate-50">
                    Marketing cookies
                  </p>
                  <p className="text-sm text-slate-400">
                    Used for measuring and improving ads (Google Ads).
                  </p>
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={adsToggle}
                    onChange={(e) => setAdsToggle(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-500 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-slate-200">Allow</span>
                </label>
              </div>

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
    </div>
  );
}
