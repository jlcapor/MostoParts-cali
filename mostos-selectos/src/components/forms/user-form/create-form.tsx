'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { userSchema } from '@/lib/validations/user'
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { RoleField } from '@/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { catchError } from '@/lib/utils'
import { addUserAction } from '@/lib/actions/user'
import { toast } from 'sonner'




type Inputs = z.infer<typeof userSchema>

    export function AddUserForm({ roles }: { roles: RoleField[] }) {
    const [isPending, startTransition] = React.useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(userSchema),
            defaultValues: {
                id: '',
                name: '',
                surnames: '',
                email: '',
                phone: '',
                password: '',
                roleId: '',
                state: undefined,
            },
        })

        async function onSubmit(data: Inputs) {
            startTransition(async () => {
                try {
                    await addUserAction(data);
                    toast.success("User added successfully.")
                    form.reset()
                } catch (error) {
                    catchError(error)
                }
            })

        }
            return (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="p-4 md:p-6">
                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                    <FormField control={form.control} name="name" render={({ field })=> (
                                        <FormItem>
                                            <FormLabel>Nombre</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Ingrese el nombre." {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                        />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                    <FormField control={form.control} name="surnames" render={({ field })=> (
                                        <FormItem>
                                            <FormLabel>Apellidos</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Ingrese los apellidos." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                        />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                    <FormField control={form.control} name="email" render={({ field })=> (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Ingrese el email." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                        />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                    <FormField control={form.control} name="phone" render={({ field })=> (
                                        <FormItem>
                                            <FormLabel>Celular</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Ingrese el numero de celular."
                                                    onChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                        />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                    <FormField control={form.control} name="roleId" render={({ field })=> (
                                        <FormItem className="w-full">
                                            <FormLabel>Rol de usuario</FormLabel>
                                            <Select value={field.value} onValueChange={(value: typeof field.value) =>
                                                field.onChange(value)
                                            }>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Seleccione un rol" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {roles && roles.map((item, index) => (
                                                        <SelectItem key={index} value={item.id.toString()}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                        )}/>
                                </div>
                            </div>
                            <div className="rounded-md border px-[14px] py-3">
                                <div className="flex gap-4">
                                    <div className="flex items-center">
                                        <FormField control={form.control} name="state" render={({ field })=> (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Estado</FormLabel>
                                                <FormControl>
                                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}
                                                        className="flex flex-col space-y-1">
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="ACTIVO" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Activo
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="INACTIVO" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Inactivo
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="mb-4">
                                <div className="relative mt-2 rounded-md">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput placeholder="**********" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:p-6 flex justify-end gap-4">
                            <Button className="w-fit" disabled={isPending}>
                                {isPending && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                                )}
                                Crear Usuario
                                <span className="sr-only">Crear Usuario</span>
                            </Button>
                        </div>
                    </form>
                </Form>
            )
        }
