"use client"
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { MainNavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
///R0jas!da
interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export  function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [isPending, startTransition] = React.useTransition();



  return (
    <div className="hidden gap-6 md:gap-10 lg:flex">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <span className="hidden font-bold lg:inline-block scroll-m-20 text-2xl md:text-3xl  tracking-tight transition-colors first:mt-0">
            {siteConfig.name}
          </span>
          <span className="sr-only">Home</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/categories"
          className={cn(
            "transition-colors hover:text-foreground/80  font-semibold",
            pathname === "/categories" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Categorias
        </Link>

        <Link
          href="/products"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Todos los Productos
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contacto
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
      </nav>
      {/* <div className="flex items-center space-x-2 mx-1">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
              <Button 
                size="sm" 
                variant="outline" 
                disabled={isPending}
              >
                <Menu className="mr-2 h-6 w-6" />
                <span className="text-sm font-semibold">Categorias</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader  className="px-1">
              <SheetTitle className="text-center text-2xl font-semibold">Categorias</SheetTitle>
            </SheetHeader>
            <Separator />
            <ScrollArea className="min-h-[300px] max-h-screen px-2">
              <div className="space-y-1 p-2">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value="">
                    <AccordionTrigger
                     className={buttonVariants({
                      size: "sm",
                      align: "flexBetween",
                      className: "text-sm font-semibold capitalize hover:no-underline"
                    })} 
                    
                    >
                      Accesorios para Computadoras
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div> */}
    </div>
  )
}
