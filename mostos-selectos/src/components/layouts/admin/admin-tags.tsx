"use client"
import { useRouter, useSelectedLayoutSegment } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"




export function AdminTags() {
  const router = useRouter()
  const segment = useSelectedLayoutSegment()

  const tabs = [
    {
      title: "Analytics",
      href: '/dashboard/analytics',
      isActive: segment === 'analytics',
    },
    {
      title: "Categorias",
      href: '/dashboard/categories',
      isActive: segment === 'categories',
    },
   
    {
      title: "Subcategorias",
      href: '/dashboard/subcategories',
      isActive: segment === 'subcategories',
    },
   
    {
      title: "Productos",
      href: '/dashboard/products',
      isActive: segment === 'products',
    },
    {
      title: "Pedidos",
      href: '/dashboard/orders',
      isActive: segment === 'orders',
    },
   
  ]
  return (
    <Tabs
      defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
      className="sticky top-0 z-30 w-full overflow-auto bg-background px-1"
      onValueChange={(value) => router.push(value)}
    >
      <TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
        {tabs.map((tab) => (
          <div
            role="none" 
            key={tab.href}
            className={cn(
              "border-b-2 border-transparent py-1.5",
              tab.isActive && "border-foreground"
            )}
          >
            <TabsTrigger
              value={tab.href}
              className={cn(
                "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-lg font-semibold text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                tab.isActive && "text-foreground"
              )}
            >
              {tab.title}
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
      <Separator />
    </Tabs>
  )
}
