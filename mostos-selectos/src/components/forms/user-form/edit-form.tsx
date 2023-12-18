"use client"
import React from "react";
import { useRouter } from "next/navigation"
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, UncontrolledFormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { userUpdateSchema } from "@/lib/validations/user";
import { RoleField } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import { Icons } from "@/components/icons";
import { deleteUserAction, updateUserAction } from "@/lib/actions/user";
import { catchError } from "@/lib/utils";



type Inputs = z.infer<typeof userUpdateSchema>
export function UpdateUserForm({user, roles,}: {user: User, roles: RoleField[]}) {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(userUpdateSchema),
        defaultValues: {
            name: user.name,
            surnames: user.surnames,
            email: user.email,
            phone: user.phone,
            password: "",
            roleId: user.roleId.toString(),
            state: user.state
        },
      })


    function onSubmit(data: Inputs) {
        startTransition(async () => {
           try {
                await updateUserAction({
                    ...data,
                    id: user.id
                })
           } catch (error) {
            catchError(error)
           }
        })
    }
    return (
        <Form {...form}>
            <form 
               className="grid w-full max-w-2xl gap-5"
               onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input
                            aria-invalid={!!form.formState.errors.name}
                            placeholder="Type product name here."
                            {...form.register("name")}
                            defaultValue={user.name}
                        />
                    </FormControl>
                    <UncontrolledFormMessage
                        message={form.formState.errors.name?.message}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl>
                        <Input
                           aria-invalid={!!form.formState.errors.surnames}
                           {...form.register("surnames")}
                           defaultValue={user.surnames ?? ""}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                            aria-invalid={!!form.formState.errors.email}
                            {...form.register("email")}
                            defaultValue={user.email ?? ""}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                        <Input
                            aria-invalid={!!form.formState.errors.phone}
                            {...form.register("phone")}
                            defaultValue={user.phone ?? ""}
                        />
                    </FormControl>
                </FormItem>
                <div className="flex flex-col items-start gap-6 sm:flex-row">
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

                <div className="flex space-x-2">
                    <Button disabled={isPending}>
                        {isPending && (
                        <Icons.spinner
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                        />
                        )}
                        Actualizar Usuario
                        <span className="sr-only">Update product</span>
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => {
                        startTransition(async () => {
                            await deleteUserAction({
                                id: user.id,
                            })
                        })
                        router.push(`/dashboard/users`)
                        }}
                        disabled={isPending}
                    >
                        {isPending && (
                        <Icons.spinner
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                        />
                        )}
                        Eliminar Usuario
                        <span className="sr-only">Delete product</span>
                    </Button>
                </div>
            </form>
        </Form>
    )
}