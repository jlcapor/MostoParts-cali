'use client'
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { verifyEmailSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

type Inputs = z.infer<typeof verifyEmailSchema>
export function VerifyEmailForm() {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(verifyEmailSchema),
        defaultValues: {
        code: "",
        },
    })

    function onSubmit(data: Inputs) {
        router.push(`${window.location.origin}/`)
    }

       return (
            <Form {...form}>
                <form className="grid gap-4" onSubmit={(...args)=> void form.handleSubmit(onSubmit)(...args)}>
                    <FormField control={form.control} name="code" render={({ field })=> (
                        <FormItem>
                            <FormLabel>Verification Code</FormLabel>
                            <FormControl>
                                <Input placeholder="169420" {...field} onChange={(e)=> {
                                e.target.value = e.target.value.trim()
                                field.onChange(e)
                                }}
                                />
                            </FormControl>
                        </FormItem>
                        )}
                        />
                        <Button disabled={isPending}>
                            {isPending && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                            )}
                            Create account
                            <span className="sr-only">Create account</span>
                        </Button>
                </form>
            </Form>
        )
    }
