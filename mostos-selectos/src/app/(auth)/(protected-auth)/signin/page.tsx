import React from 'react'
import LoginForm from './LoginForm'
import { Shell } from '@/components/shells/shell'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { OAuthSignIn } from '@/components/auth/oauth-signin'

const LoginPage = () => {
  return ( 
     <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center uppercase">Autenticacion</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn/>
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
