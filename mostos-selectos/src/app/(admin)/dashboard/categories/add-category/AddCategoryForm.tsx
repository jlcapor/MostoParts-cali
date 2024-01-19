"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { createCategory } from "@/lib/actions/category"


const AddCategoryForm = (props: { createCategory: typeof createCategory }) => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    props.createCategory(categoryName)
    .then((res) => {
      setIsLoading(false);
      if (!res?.error) {
        setCategoryName("");
        router.refresh();
      }
    });
    
  };

  return (
    <div className="grid w-full  gap-5">
      <form className="flex flex-col gap-6 col-span-1" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="category-name">Nombre categoria</Label>
          <Input
            className="mt-2"
            id="category-name"
            name="name"
            type="text"
            placeholder="Escriba el nombre de la categoria."
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
            required
          />
        </div>
        <div className="flex space-x-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex gap-2 items-center justify-center"
            >
              {!!isLoading && <Loader2 size={18} className="animate-spin"/>}
              Crear
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              disabled={isLoading}
              className="flex gap-2 items-center justify-center"
              onClick={()=>router.push('/dashboard/categories')}
            >
             {!!isLoading && <Loader2 size={18} className="animate-spin"/>}
              Cancelar
            </Button>
        </div>
      </form>
    </div>
  )
}

export default AddCategoryForm
