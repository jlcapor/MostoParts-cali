"use client"
import * as React from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem, SidebarNavItem } from "@/types/nav"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ViewVerticalIcon } from "@radix-ui/react-icons"
import Link, { LinkProps } from "next/link"
import { Icons } from "../icons"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Accordion } from "../ui/accordion"

interface MobileNavProps {
    mainNavItems?: MainNavItem[]
    sidebarNavItems: SidebarNavItem[]
  }
export function MobileNav({ mainNavItems, sidebarNavItems }: MobileNavProps) {
    const segment = useSelectedLayoutSegment()
    const [isOpen, setIsOpen] = React.useState(false)
    const navItems = React.useMemo(() => {
        const items = mainNavItems ?? []
        return items
    }, [mainNavItems, sidebarNavItems])

    const [open, setOpen] = React.useState(false)

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <ViewVerticalIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {/* <Icons.logo className="mr-2 h-4 w-4" aria-hidden="true" /> */}
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>
          
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="pl-1 pr-7">
            <Accordion
              type="multiple"
              className="w-full"
            >
              
            </Accordion>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    )
  }
  
  interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
  }
  
  function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
  }: MobileLinkProps) {
    const router = useRouter()
    return (
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString())
          onOpenChange?.(false)
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
    )
  }