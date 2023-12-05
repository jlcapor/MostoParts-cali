import { dashboardConfig } from "@/config/dashboard";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ModeToggle } from "@/components/layouts/mode-toggle"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"

export function SiteHeader() {
return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav/>
          <MobileNav
            sidebarNavItems={dashboardConfig.sidebarNav}
          />
            <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-1">
                  <ModeToggle />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        className="relative h-8 w-8 rounded-full"
                      >
                        
                      </Button>
                    </DropdownMenuTrigger>
                  
                  </DropdownMenu>
                </nav>
            </div>
        </div>
    </header>
  )
}
