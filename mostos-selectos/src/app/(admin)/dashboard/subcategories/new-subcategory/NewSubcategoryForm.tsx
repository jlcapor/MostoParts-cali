"use client";


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CategoryField } from '@/types';
import validation, { CategoryErrors } from '@/helpers/validation';
import { toast } from 'sonner';
import { createSubcategory } from '@/lib/actions/subcategory';

interface NewSubcategoryFormProps {
  categories: CategoryField[];
  createSubcategory: typeof createSubcategory
}


const NewSubcategoryForm: React.FC<NewSubcategoryFormProps> = ({categories, createSubcategory}) => {
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState ({
    title: '',
    categoryId: ''
  })

  const [errors, setErrors] = useState <CategoryErrors | any>({
    title: 'El nombre de la subcategoria es requerido.',
    categoryId: 'Seleccione una categoría.'
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const diseableHandler = () =>{
		let diseable
		for (let error in errors) {
		 if(errors[error] === ""){
			diseable=false;
		 }else{
			diseable=true;
			break
		 }
		}
		return diseable
	}


  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await createSubcategory(input);
      toast.success("Subcategoria agregada exitosamente.")
    } catch (error) {
      
    }
  }

  const categoriesOptions = categories.map((category) => (
		<option key={category.id} value={category.id}>{category.title}</option>
	))
  return (
    <div className="grid w-full  gap-5">
       <form className="flex flex-col gap-6 col-span-1"  onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nombre subcategoria</Label>
            <Input
              className="mt-2"
              id="subcategory-name"
              name="title"
              value={input.title}
              onChange={handleChange}
              placeholder="Escriba el nombre de la subcategoria."
            />
            <div className="text-red-500 text-sm mt-1 mx-2">
							{errors.title && <p>{errors.title}</p>}
						</div>
          </div>

          <div>
            <Label htmlFor="category-name">Categoria</Label>
            <div className="mt-2">
              <select
                id="category-name"
                name="categoryId"
                value={input.categoryId}
                onChange={handleChange}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              >
                <option value="">Selecione una categoria</option>
                {categoriesOptions}
              </select>
              <div className="text-red-500 text-sm mt-1 mx-2">
							  {errors.categoryId && <p>{errors.categoryId}</p>}
						  </div>
            </div>
          </div>

          <div className="flex space-x-2">
            {diseableHandler() ? (
              <>
                <Button
                  type="submit"
                  disabled={diseableHandler()}
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
              </>
            ) : (
              <>
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
              </>
            )}
           
        </div>
       </form>
    </div>
  )
}

export default NewSubcategoryForm
