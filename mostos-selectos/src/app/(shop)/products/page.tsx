import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Productos",
    description: "",
}
export default async function ProductsPage() {
    return (
        <div className="products-page">
            <h1>Products</h1>
        </div>
    )
}