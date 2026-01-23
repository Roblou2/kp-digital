
import React from 'react'
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import CookieBanner from "./components/CookieBanner";
import AnalyticsLoader from "./components/AnalyticsLoader";
import Script from "next/script";

export default function RootLayout({ children, metadata }) {


  return (
    <html lang="en">
 <head>
 <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
 <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

 </head>
      <body className="">
              {/* Load GTM/GA only AFTER user accepts analytics */}
              <AnalyticsLoader />
        {children}

            {/* Show cookie banner until user chooses */}
        <CookieBanner />
      </body>
    </html>
  );
}
