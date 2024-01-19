"use client"
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types/nav";
import { cn } from "@/lib/utils"
import { StoreSidebarNavItems } from "./store-sidebar-nav-Items";


export interface StoreSidebarNavProps {
    items: SidebarNavItem[]
}

export function StoreSidebarNav({ items }: StoreSidebarNavProps) {
    const pathname = usePathname()

    return items.length ? (
        <div className="w-full">
          <h2 className="my-4 text-2xl font-bold uppercase">Categorias</h2>
          {items.map((item, index) => (
            <div key={index} className={cn("pb-4")}>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-bold uppercase">
                {item.title}
              </h4>
              {item?.items?.length && (
                 <StoreSidebarNavItems items={item.items} pathname={pathname} />
              )}
            </div>
          ))}
        </div>
      ) : null
    }

  