interface ProductsPageProps {
    searchParams: {
      [key: string]: string | string[] | undefined
    }
  }

export default async function ProductsPage({
    searchParams,
  }: ProductsPageProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Productos</h2>
            </div>
        </div>
    )
}