import { productCategories } from "./products"

const links = {
  linkedin: "https://www.linkedin.com/in/jose-luis-capote/",
  github: "https://github.com/jlcapor/MostoParts-cali",
}

export const siteConfig = {
    name: "Digital Store",
    url: "https://ui.shadcn.com",
    ogImage: "https://ui.shadcn.com/og.jpg",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    links,
    
  }
  
  export type SiteConfig = typeof siteConfig