'use client'
import React from "react";
import { checkEmailSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

type Inputs = z.infer<typeof checkEmailSchema>

export function ResetPasswordForm() {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()

    const form = useForm<Inputs>({
        resolver: zodResolver(checkEmailSchema),
        defaultValues: {
          email: "",
        },
    })

    function onSubmit(data: Inputs) {
    }

    return (
        <Form {...form}>
            <form
                className="grid gap-4"
                onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="rodneymullen180@gmail.com" {...field} />
                        </FormControl>
                    </FormItem>
                  )}
                />

                <Button disabled={isPending}>
                    {isPending && (
                        <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                        />
                    )}
                    Continue
                    <span className="sr-only">
                        Continue to reset password verification
                    </span>
                </Button>
            </form>
        </Form>
    )
}