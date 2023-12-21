import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "New Store",
    description: "Add a new store",
}
export default async function NewStorePage() {
    
    return (
        <Shell variant="sidebar">
             <PageHeader>
                <div className="flex space-x-4">
                    <PageHeaderHeading size="sm" className="flex-1">
                        Tiendas
                    </PageHeaderHeading>
                    <Link
                        aria-label="Create store"
                        href={'/dashboard/stores/new-store'}
                        className={cn(
                            buttonVariants({
                                size: "sm",
                            })
                        )}
                    >
                        Crear tienda
                    </Link>
                </div>
             </PageHeader>
             <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
               
             </section>
        </Shell>
    )
}