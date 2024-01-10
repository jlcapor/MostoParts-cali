import { type SidebarNavItem } from "@/types/nav"

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "avatar",
      items: [
        
      ],
    },
    {
      title: "Productos",
      href: "/dashboard/products",
      icon: "product",
      items: [],
    },
    
  ],
}
