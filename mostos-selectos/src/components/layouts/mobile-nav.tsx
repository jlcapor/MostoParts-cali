"use client"
import * as React from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem, SidebarNavItem } from "@/types"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ViewVerticalIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Icons } from "../icons"

interface MobileNavProps {
    mainNavItems?: MainNavItem[]
    sidebarNavItems: SidebarNavItem[]
  }
export function MobileNav({ mainNavItems, sidebarNavItems }: MobileNavProps) {
    const segment = useSelectedLayoutSegment()
    const [isOpen, setIsOpen] = React.useState(false)
    const navItems = React.useMemo(() => {
        const items = mainNavItems ?? []
        const myAccountItem = {
          title: "My Account",
          items: sidebarNavItems,
        }
        const myAccountIndex = items.findIndex(
          (item) => item.title === "My Account"
        )
        if (myAccountIndex !== -1) {
          items.splice(myAccountIndex, 1)
        }
        items.splice(1, 0, myAccountItem)
        return items
    }, [mainNavItems, sidebarNavItems])

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
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
                        <Icons.logo className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                    </Link>
                </div>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="pl-1 pr-7">
                       
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}