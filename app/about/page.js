
import LayoutBlank from "../components/layout-blank.js"
import ComingSoon from "../components/coming-soon.js"

export const metadata = {
    title: "About us | Sleek Digital Designs",
    description: "Learn where our roots come from and what makes us unique",
  
    openGraph: {
      title: "About us",
      description: "Learn where our roots come from and what makes us unique",
      url: "https://sleekdigitaldesigns.com/about",
      siteName: "Sleek Digital Designs",
      images: [
        {
          url: "https://sleek-digital-logo-black-250.png",
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
      images: ["https://sleek-digital-logo-black-250.png"],
    },
  };

const AboutPage = () => {

    return (
        <>
            <LayoutBlank>
            <ComingSoon />
        </LayoutBlank>
        </>
    )
}

export default AboutPage