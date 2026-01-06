import LayoutBlank from "@/app/components/layout-blank";
import Head from 'next/head';
import CookiesPage from "@/app/components/cookies"

export const metadata = {
  title: "Cookies Policy | KP Digital",
  description: "",

  openGraph: {
    title: "Cookies Policy | KP Digital",
    description: "",
    url: "https://killerperformancedigital.com/cookies-policy",
    siteName: "Killer Performance Digital",
    images: [
      {
        url: "/images/killer-logo-black-bg-250.png",
        width: 600,
        height: 300,
        alt: "Killer Performance Digital OG image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | KP Digital",
    description: "",
    images: ["/images/killer-logo-black-bg-250.png"],
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
      <LayoutBlank>
 <CookiesPage/>
</LayoutBlank>
   </>
  );
}
