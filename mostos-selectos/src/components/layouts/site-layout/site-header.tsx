import Link from "next/link"
// import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons"
import { SafeUser } from '../../../types/index';

import { dashboardConfig } from "@/config/dashboard"
// import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingBasket } from "../../checkout/shopping-basket"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"
import { CommandMenu } from "@/components/command-menu"
import { ModeToggle } from "../mode-toggle"
import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons"

interface SiteHeaderProps {
  currentUser?:SafeUser | null;
}

export async function SiteHeader({ currentUser }: SiteHeaderProps) {
  const initials = `${currentUser?.name?.charAt(0) ?? ""} ${
    currentUser?.name?.charAt(0) ?? ""
  }`
return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <MainNav/>
            <MobileNav
              sidebarNavItems={dashboardConfig.sidebarNav}
            />
              <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-2">
                    <ModeToggle />
                    <CommandMenu />
                    <ShoppingBasket/>
                    {currentUser ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="secondary"
                            className="relative h-8 w-8 rounded-full"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={currentUser?.image ?? ""}
                                alt={currentUser.name ?? ""}
                              />
                              <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                          <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {currentUser?.name}
                              </p>
                              <p className="text-xs leading-none text-muted-foreground">
                                {currentUser?.email}
                              </p>
                            </div>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                              <Link href="/dashboard">
                                <DashboardIcon
                                  className="mr-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                                Dashboard
                                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/dashboard/billing">
                                <Icons.dollarSign
                                  className="mr-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/dashboard/account">
                                <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href="/signout">
                              <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                              Log out
                              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href="/signin"
                        className={buttonVariants({
                          size: "sm",
                        })}
                      >
                        Sign In
                        <span className="sr-only">Sign In</span>
                      </Link>
                    )}
                  </nav>
              </div>
          </div>
    </header>
  )
}
