'use client'
import React from 'react'
import { signIn } from 'next-auth/react';
import { authSchema } from '@/lib/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { toast } from 'sonner';

type Inputs = z.infer<typeof authSchema>
const LoginForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    signIn('credentials', { 
      email: data.email,
      password: data.password,
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  
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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
               <PasswordInput placeholder="**********" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button disabled={isLoading}>
          {isLoading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin uppercase"
              aria-hidden="true"
            />
          )}
          Iniciar sesion
          <span className="sr-only">Continue to email verification page</span>
        </Button>
      </form>
      
    </Form>
  )
}

export default LoginForm

