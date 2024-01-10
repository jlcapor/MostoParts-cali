import { Shell } from '@/components/shell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ResetPasswordForm } from './reset-password-form';

const page = () => {
  return (
    <Shell className="max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl uppercase">¿Olvidaste tu contraseña?</CardTitle>
            <CardDescription>
              Escribe el correo electrónico con el cuál te registraste y te enviaremos las instrucciones de restablecimiento.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ResetPasswordForm/>
        </CardContent>
      </Card>
    </Shell>
  )
}

export default page
