import Container from '@/components/Container'
import FormWrap from '@/components/FormWrap'
import React from 'react'
import LoginForm from './LoginForm'
import { Shell } from '@/components/shells/shell'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const LoginPage = () => {
  return ( 
    <Shell className="max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center uppercase">Autenticacion</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
         <LoginForm/>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              ¿No tienes una cuenta?
            </span>
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Registrate
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Restablecer la contraseña
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  )
}

export default LoginPage
