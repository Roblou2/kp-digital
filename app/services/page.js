
import LayoutBlank from "../components/layout-blank.js"
import ComingSoon from "../components/coming-soon.js"

export const metadata = {
    title: "Services | Killer performance digital",
    description: "We offer a unique set of digital marketing services whcih we can tailor make for your needs",
  
    openGraph: {
      title: "Services",
      description: "We offer a unique set of digital marketing services whcih we can tailor make for your needs",
      url: "https://killerperformancedigital.com/services",
      siteName: "Sleek Digital Designs",
      images: [
        {
          url: "/images/killer-logo-black-bg-250.jpg",
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
      description: "We offer a unique set of digital marketing services whcih we can tailor make for your needs",
      images: ["/images/killer-logo-black-bg-250.jpg"],
    },
  };

const ServicesPage = () => {

    return (
        <>
        <LayoutBlank>
            <ComingSoon />
        </LayoutBlank>
        </>
    )
}


  export default ServicesPage