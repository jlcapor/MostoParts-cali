import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Categorias",
    description: "",
}
export default async function CategoriesPage(){
    return (
        <div className="container">
            <h1>Categorias</h1>
        </div>
    )
}
