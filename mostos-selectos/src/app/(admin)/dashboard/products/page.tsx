import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shell"
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";


export default async function ProductsPage({searchParams}: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {

    return (
      <Shell variant="sidebar">
        <div className="flex items-start justify-between">
          <PageHeader>
            <PageHeaderHeading size="sm">
              Productos
            </PageHeaderHeading>
          </PageHeader>
          <Link
            aria-label="Create store"
            href={'/dashboard/products/new-product'}
            className={cn(
              buttonVariants({
                size: "sm",
              })
            )}
          >
            <span className="hidden md:block"> Crear Producto</span>{' '}
            <Plus size={18} className="h-5 md:ml-4" />
          </Link>
        </div>
        <div className="pt-4">
            dfgdfgdfgdfgdfgdfgdfg
        </div>
      </Shell>
    )
}