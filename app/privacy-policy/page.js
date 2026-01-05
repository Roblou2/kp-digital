import LayoutBlank from "@/app/components/layout-blank";
import Head from 'next/head';
import PrivacyPage from "@/app/components/privacy"

export const metadata = {
  title: "Privacy Policy | KP Digital",
  description: "",

  openGraph: {
    title: "Privacy Policy | KP Digital",
    description: "",
    url: "https://killerperformancedigital.com/privacy-policy",
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
    title: "Privacy Policy | KP Digital",
    description: "",
    images: ["/images/killer-logo-black-bg-250.png"],
  },
};

export default async function Privacy() {


  return (
   <>
     <Head>
        <title>Privacy Policy| KP{} Digital</title>
        <meta name="description" content="We create memorable digital experiences for your brand. 
  Contact us today to learn more."/>
        <meta name="keywords" content="marketing agency, Google Ads help, data analytics setup, digital marketing agency" />
      </Head>
      <LayoutBlank>
 <PrivacyPage/>
</LayoutBlank>
   </>
  );
}
