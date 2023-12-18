import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
export default async function NewStorePage() {
return (
    <Shell variant="sidebar">
        <PageHeader id="new-store-page-header" aria-labelledby="new-store-page-header-heading">
            <PageHeaderHeading size="sm">Nueva Tienda</PageHeaderHeading>
        </PageHeader>
    </Shell>
  )
}
