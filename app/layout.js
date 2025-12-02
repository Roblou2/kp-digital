
import React from 'react'
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function RootLayout({ children, metadata }) {


  return (
    <html lang="en">
 <head>

 </head>
      <body className="">
        {children}
     
      </body>
    </html>
  );
}
