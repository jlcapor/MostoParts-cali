import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

interface ProductsPageProps {
    searchParams: {
      [key: string]: string | string[] | undefined
    }
}

export default async function ProductsPage({searchParams}: ProductsPageProps) {

    return (
        <Shell variant="sidebar">
            <PageHeader
              id="dashboard-products-header"
              aria-labelledby="dashboard-products-header-heading"
            >
                <PageHeaderHeading size="sm">Productos</PageHeaderHeading>
            </PageHeader>
        </Shell>
    )
}