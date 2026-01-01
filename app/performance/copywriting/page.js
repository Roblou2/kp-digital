
import LandingLayout from "@/app/components/landing-layout";
import Benefits from "@/app/components/Benefits";
import CopywritingServices from "@/app/components/copywriting-services"
import AboutSection from "@/app/components/about-section"
import Testimonials from "@/app/components/testimonials"
import CaseStudies from "@/app/components/case-studies"
import ClientChallenges from "@/app/components/client-challenges"
import Pricing from "@/app/components/Pricing"
import Contact from "@/app/components/Contact"


export const metadata = {
    title: "Copywriting Services | Killer Performance Digital",
    description: "We offer a unique set of copywriting services whcih we can tailor make for your needs",
  
    openGraph: {
      title: "Copywriting Services",
      description: "We offer a unique set of copywriting services whcih we can tailor make for your needs",
      url: "https://killerperformancedigital.com/copywriting-services",
      siteName: "Killer Performance Digital",
      images: [
        {
          url: "/images/killer-logo-black-bg-250.png",
          width: 600,
          height: 300,
          alt: "Services OG image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Services",
      description: "We offer a unique set of copywriting services whcih we can tailor make for your needs",
      images: ["/images/killer-logo-black-bg-250.png"],
    },

    robots: {
    index: false,
    follow: true,
  },
  };

const CopywritingServicesPage = () => {

    return (
        <>
        <LandingLayout>
         <Benefits/>
            <CopywritingServices/>
         <ClientChallenges/>
<Testimonials/>
<Pricing/>
         <CaseStudies/>
         <Contact/>
         <AboutSection/>
        </LandingLayout>
        </>
    )
}


  export default CopywritingServicesPage