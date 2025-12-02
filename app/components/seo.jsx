import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children, data}) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, og, image } = useSiteMetadata()

  const SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    ogImage: `${siteUrl}${og.image}`
  }

  return (
    <>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="image" content={SEO.image}/>
      <meta property="og:image" content={SEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {children}
    </>
  )
}