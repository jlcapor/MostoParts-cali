import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shells/shell"


export default async function ProductsPage({searchParams}: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {

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