import { AddProductForm } from "@/components/forms/product-form/add-product-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default  function NewProductPage() {
    return (
       <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Crear Producto</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <AddProductForm />
            </CardContent>
        </Card>
      
        
    )
}