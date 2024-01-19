import { slugify } from "@/lib/utils"
import { productCategories } from "./products"
import { MainNavItem } from "@/types/nav"

const links = {
  linkedin: "https://www.linkedin.com/in/jose-luis-capote/",
  github: "https://github.com/jlcapor/MostoParts-cali",
}

export const siteConfig = {
    name: "Digital Store",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    links,
    mainNav: [
      {
        title: "Categorias",
        href: "/docs",
      },
      {
        title: "Todos los Productos",
        href: "/docs/components/accordion",
      },
      {
        title: "Contacto",
        href: "/themes",
      },
      {
        title: "Blog",
        href: "/examples",
      },
      
    ] satisfies MainNavItem[],
    
  }
  
  export type SiteConfig = typeof siteConfig