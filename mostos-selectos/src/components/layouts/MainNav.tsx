"use client"
import { MainNavItem } from "@/types/nav";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { siteConfig } from "@/config/site";
import { MenuItems } from "./MenuItems";
import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";

interface MainNavProps {
    items?: MainNavItem[]
}

export function MainNav() {
  const pathname = usePathname()
    return (
      <div className="hidden gap-6 lg:flex">
          <Link href="/" className="hidden items-center space-x-2 lg:flex">
            {/* <Icons.logo className="h-6 w-6" aria-hidden="true" /> */}
            <span className="hidden font-bold lg:inline-block scroll-m-20 text-2xl md:text-3xl  tracking-tight transition-colors first:mt-0">
              {siteConfig.name}
            </span>
            <span className="sr-only">Home</span>
          </Link>
      </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
