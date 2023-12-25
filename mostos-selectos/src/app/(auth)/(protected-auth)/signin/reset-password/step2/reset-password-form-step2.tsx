"use client"
import React from "react";
import { resetPasswordSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PasswordInput } from "@/components/password-input";
import { Input } from "@/components/ui/input";

type Inputs = z.infer<typeof resetPasswordSchema>

export function ResetPasswordStep2Form() {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
          password: "",
          confirmPassword: "",
          code: "",
        },
    })

    function onSubmit(data: Inputs) {}
    return (
        <Form {...form}>
            <form
                className="grid gap-4"
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <PasswordInput placeholder="*********" {...field} />
                        </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <PasswordInput placeholder="*********" {...field} />
                        </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Code</FormLabel>
                        <FormControl>
                            <Input
                            placeholder="169420"
                            {...field}
                            onChange={(e) => {
                                e.target.value = e.target.value.trim()
                                field.onChange(e)
                            }}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}