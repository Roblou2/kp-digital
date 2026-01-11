
import LayoutBlank from "../components/layout-blank.js"
import AboutContact from "../components/about-contact.js";
import AboutSection from "../components/home-about.js";

export const metadata = {
    title: "About us | Killer performance digital",
    description: "Learn where our roots come from and what makes us unique",
  
    openGraph: {
      title: "About us",
      description: "Learn where our roots come from and what makes us unique",
      url: "https://killerperformancedigital.com/about",
      siteName: "Sleek Digital Designs",
      images: [
        {
          url: "/images/killer-logo-black-bg-250.jpg",
          width: 600,
          height: 300,
          alt: "About us OG image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  
    twitter: {
      card: "summary_large_image",
      title: "About us",
      description: "Learn where our roots come from and what makes us unique",
      images: ["/images/killer-logo-black-bg-250.jpg"],
    },
  };

const AboutPage = () => {

    return (
        <>
            <LayoutBlank>
            <AboutSection />
            <AboutContact/>
        </LayoutBlank>
        </>
    )
}

export default AboutPage