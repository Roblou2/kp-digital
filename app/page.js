import Services from './components/services.js'
import ServicesHome from "./components/services-home.js"
import ContactUs from "./components/contact-home.js"
import Layout from './components/layout.js'

import Head from 'next/head';

export const metadata = {
  title: "Performance marketing agency | SDD",
  description: "We are the first choice digital marketing agency. Learn how our digital marketing services can grow your business",

  openGraph: {
    title: "Performance marketing agency | SDD",
    description: "We are the first choice digital marketing agency. Learn how our digital marketing services can grow your business",
    url: "https://sleekdigitaldesigns.com/",
    siteName: "Sleek Digital Designs",
    images: [
      {
        url: "https://sleek-digital-logo-black-250.png",
        width: 600,
        height: 300,
        alt: "Sleek Digital Designs OG image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Performance marketing agency | SDD",
    description: "We are the first choice digital marketing agency. Learn how our digital marketing services can grow your business",
    images: ["https://sleek-digital-logo-black-250.png"],
  },
};

export default async function Home() {


  return (
   <>
     <Head>
        <title>Web Design Agency London | Sleek Digital</title>
        <meta name="description" content="We create memorable digital experiences for your brand. 
  Contact us today to learn more."/>
        <meta name="keywords" content="marketing agency, Google Ads help, data analytics setup, digital marketing agency" />
      </Head>
      <Layout>
   <Services/>
<ServicesHome 
serviceOne = "Web Design & Development"
serviceTwo = "Copywriting & Branding"
serviceThree = "WordPress Websites, Optimisation & Support"
serviceFour = "High-converting Landing Pages"
serviceFive = "PPC Campaigns"
serviceSix = "Conversion Tracking & Analytics Setup"

serviceOneTxt = "Using cutting-edge tech and programming, we make websites which deliver memorable digital experiences at lightning-fast speed."

serviceTwoTxt = "Grab your customers' attention and implant your brand's signature sound into the minds of your customers with copy crafted by experts."
serviceThreeTxt = "Modern, reliable WordPress development that improves speed, structure, usability, and overall performance — giving your business a stronger, more effective online presence."
serviceFourTxt = "Purpose-built landing pages crafted to persuade, convert, and support your marketing campaigns using clear messaging, clean design, and data-driven optimisation."
serviceFiveTxt = "Entry-level Google Ads campaigns tailored for small budgets, focused on relevant traffic, measurable impact, and building a predictable flow of leads."
serviceSixTxt = "Accurate tracking and analytics implementation that gives you clarity on performance, helps avoid wasted spend, and reveals exactly what drives your results."
/>
<ContactUs/>
</Layout>
   </>
  );
}
