import { slugify } from "@/lib/utils"
import { productCategories } from "./products"
import { MainNavItem } from "@/types/nav"

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
    mainNav: [
      {
        title: "Tienda",
        items: [
          {
            title: "Products",
            href: "/search",
            description: "All the products we have to offer.",
            items: [],
          },
          {
            title: "Blog",
            href: "/blog",
            description: "Read our latest blog posts.",
            items: [],
          },
        ],
      },
      ...productCategories.map((category) => ({
        title: category.title,
        items: [
          {
            title: "All",
            href: `/categories/${slugify(category.title)}`,
            // description: `All ${category.title}.`,
            items: [],
          },
          ...category.subcategories.map((subcategory) => ({
            title: subcategory.title,
            href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
            // description: subcategory.description,
            items: [],
          })),
        ],
      })),
    ] satisfies MainNavItem[],
    
  }
  
  export type SiteConfig = typeof siteConfig