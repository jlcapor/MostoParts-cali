'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, UncontrolledFormMessage } from "@/components/ui/form";
import {  useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { productSchema } from "@/lib/validations/product.schema";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { catchError } from "@/lib/utils";

type Inputs = z.infer<typeof productSchema>

export function AddProductForm() {
    const [isPending, startTransition] = useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "",
            stock: NaN,
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
              className="grid w-full max-w-2xl gap-5"
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

                <div className="flex flex-col items-start gap-6 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                            <Input
                                placeholder="Type product price here."
                                value={field.value}
                                onChange={field.onChange}
                            />
                            </FormControl>
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
                      Add Product
                      <span className="sr-only">Add Product</span>
                    </Button>
            </form>
        </Form>
    )
}