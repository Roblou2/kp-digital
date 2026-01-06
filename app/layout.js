
import React from 'react'
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import CookieBanner from "./components/CookieBanner";
import AnalyticsLoader from "./components/AnalyticsLoader";

export default function RootLayout({ children, metadata }) {


  return (
    <html lang="en">
 <head>
 <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

 </head>
      <body className="">
        {children}
      {/* Load GTM/GA only AFTER user accepts analytics */}
        <AnalyticsLoader />

            {/* Show cookie banner until user chooses */}
        <CookieBanner />
      </body>
    </html>
  );
}
