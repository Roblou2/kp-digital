import LayoutBlankMe from "@/app/components/layout-blank-me";
import Head from 'next/head';
import CookiesPage from "@/app/components/cookies"

export const metadata = {
  title: "Privacy Policy | A1 Webs",
  description: "",

  openGraph: {
    title: "Privacy Policy | KP Digital",
    description: "",
    url: "https://killerperformancedigital.com/privacy-policy",
    siteName: "A1 Webs",
    images: [
      {
        url: "/images/killer-logo-black-bg-250.jpg",
        width: 600,
        height: 300,
        alt: "A1 Webs OG image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | A1 Webs",
    description: "",
    images: ["/images/killer-logo-black-bg-250.jpg"],
  },
};

export default async function Cookies() {


  return (
   <>
     <Head>
        <title>Cookies Policy| KP{} Digital</title>
        <meta name="description" content="We create memorable digital experiences for your brand. 
  Contact us today to learn more."/>
        <meta name="keywords" content="marketing agency, Google Ads help, data analytics setup, digital marketing agency" />
      </Head>
      <LayoutBlankMe>
 <CookiesPage/>
</LayoutBlankMe>
   </>
  );
}
