import Container from '@/components/Container'
import FormWrap from '@/components/FormWrap'
import React from 'react'
import RegisterForm from './RegisterForm'
import { Shell } from '@/components/shells/shell'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const page = () => {
  return (
    <Shell className="max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center uppercase">Crear una cuenta</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <RegisterForm/>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta? {" "}
            <Link
              aria-label="Sign in"
              href="/signin"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Iniciar sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}

export default page
