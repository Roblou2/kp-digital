
import ServicesLayout from "@/app/components/services-layout";
import Benefits from "@/app/components/Benefits";
import CopywritingServices from "@/app/components/copywriting-services"
import AboutSection from "@/app/components/about-section"
import Testimonials from "@/app/components/testimonials"
import CaseStudies from "@/app/components/case-studies"
import ClientChallenges from "@/app/components/client-challenges"
import Pricing from "@/app/components/Pricing"


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
  };

const CopywritingServicesPage = () => {

    return (
        <>
        <ServicesLayout
        heroTitle="High-Converting copywriting for SMEs"
service1="Landing pages"
service2="Emails"
service3="Performance creative"
subHeadline="Get clear, persuasive copy that helps your 
business attract more leads, book more sales, and grow with confidence 
— without the confusing jargon or long turnaround times"
cta="Book a free strategy call"
perk1="Fast delivery options"
perk2="Conversion-focused frameworks"
perk3="1:1 collaboration with a highly experienced copywriter"
        >
         <Benefits/>
            <CopywritingServices/>
         <ClientChallenges/>
<Testimonials/>
<Pricing/>
         <CaseStudies/>
         <AboutSection/>
        </ServicesLayout>
        </>
    )
}


  export default CopywritingServicesPage