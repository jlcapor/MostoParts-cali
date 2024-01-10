'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, UncontrolledFormMessage } from "@/components/ui/form";
import {  useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { productSchema } from "@/lib/validations/product.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { catchError } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select";

type Inputs = z.infer<typeof productSchema>

export function AddProductForm() {
    const [isPending, startTransition] = useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "",
            stock: undefined,
            inStock: true,
            categoryId: '',
            subcategoryId: ''
        }
    })

    function onSubmit(data: Inputs) {
       
        startTransition(async () => {
           try {
           
           } catch (error) {
                catchError(error as Error);
           }
        })
    }

    return (
        <Form {...form}>
            <form
              className="col-span-2 grid items-start gap-6 lg:col-span-1"
              onSubmit={form.handleSubmit(onSubmit)}
            >
                 <FormField
                   control={form.control}
                   name="name"
                   render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Escriba el nombre del producto aqui.." {...field} />
                            </FormControl>
                        </FormItem>
                   )}
                 />

                <FormField
                   control={form.control}
                   name="description"
                   render={({ field }) => ( 
                    <FormItem>
                        <FormLabel>descripcion</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Escriba la descripcion del producto aqui." {...field} rows={6}/>
                        </FormControl>
                    </FormItem>
                   )}
                />

                
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Precio</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Escriba el precio del producto aqui."
                            value={field.value}
                            onChange={field.onChange}
                          />
                          </FormControl>
                        </FormItem>
                      )}
                  />
                
                  <FormField
                      control={form.control}
                      name="stock"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Stock</FormLabel>
                          <FormControl>
                          <Input placeholder="Escriba el inventario del producto aqui." {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                  /> 
                  <div className="flex flex-col items-start gap-6 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="categoryId"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Categoria</FormLabel>
                          <Select 
                            value={field.value}
                            onValueChange={(value: typeof field.value) =>
                              field.onChange(value)
                            }
                          >
                            <FormControl>
                              <SelectTrigger className="capitalize">
                                <SelectValue placeholder="Selecciona una categoria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             <SelectGroup>

                             </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subcategoryId"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Subcategoría</FormLabel>
                          <Select
                           value={field.value?.toString()}
                           onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                              <SelectValue placeholder="Selecciona una subcategoria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             <SelectGroup></SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  

                  <Button
                    className="w-fit"
                    disabled={isPending}
                  >
                    {isPending && (
                      <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                        />
                      )}
                      Crear
                      <span className="sr-only">Add Product</span>
                  </Button>
            </form>
        </Form>
    )
}