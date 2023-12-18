import Link from "next/link";
import { Icons } from "../../icons";
import { Shell } from "@/components/shells/shell"
import { cn } from "@/lib/utils";
export function SiteFooter() {
    return(
        <>
            <footer className="w-full border-t bg-background ">
            <Shell>
                <section
                id="footer-content"
                aria-labelledby="footer-content-heading"
                className="flex flex-col gap-10 lg:flex-row lg:gap-20"
                >
                    <div className="flex items-center space-x-1">
            
            
          </div>
                </section>
            </Shell>
            </footer>
            <p className="text-center text-sm text-gray-500 my-10">2023</p>
        </>
    )
}