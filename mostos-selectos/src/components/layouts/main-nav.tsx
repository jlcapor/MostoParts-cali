import { MainNavItem } from "@/types";
import Link from "next/link";
import { Icons } from "../icons";

interface MainNavProps {
    items?: MainNavItem[]
}

export function MainNav() {
    return (
        <div className="hidden gap-6 lg:flex">
            <Link href="/" className="hidden items-center space-x-2 lg:flex">
                <span className="hidden text-lg font-bold lg:inline-block">
                    Mostos Selectos
                </span>
                <span className="sr-only">Home</span>
            </Link>
        </div>
    )
}