"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CategoryField } from '@/types';
import validation, { CategoryErrors } from '@/helpers/validation';



const NewSubcategoryForm = ({categories}:{categories: CategoryField[]}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState ({
    name: '',
    categoryId: ''
  })

  const [errors, setErrors] = useState <CategoryErrors>({
    name: 'El nombre de la subcategoria es requerido.',
  })

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault ();
		setInput ( {
			...input,
			[event.target.name]: event.target.value
		})

		setErrors(
			validation({
        ...input,
        [event.target.name]: event.target.value,
      })
		);
	}
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const categoriesOptions = categories.map((category) => (
		<option key={category.id} value={category.id}>{category.name}</option>
	))
  return (
    <div className="grid w-full  gap-5">
       <form className="flex flex-col gap-6 col-span-1">
          <div>
            <Label htmlFor="name">Nombre subcategoria</Label>
            <Input
              className="mt-2"
              id="subcategory-name"
              name="name"
              value={input.name}
              onChange={handlerChange}
              placeholder="Escriba el nombre de la subcategoria."
            />
            <div className="text-red-500 text-sm mt-1 mx-2">
							{errors.name && <p>{errors.name}</p>}
						</div>
          </div>

          <div>
            <Label htmlFor="category-name">Categoria</Label>
            <div className="mt-2">
              <select
                id="category-name"
                name="categoryId"
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              >
                <option value="">Selecione una categoria</option>
                {categoriesOptions}
              </select>
            </div>
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
              onClick={()=>router.push('/dashboard/subcategories')}
            >
             {!!isLoading && <Loader2 size={18} className="animate-spin"/>}
              Cancelar
            </Button>
        </div>
       </form>
    </div>
  )
}

export default NewSubcategoryForm
