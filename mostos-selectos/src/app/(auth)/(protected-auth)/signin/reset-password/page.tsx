import { Shell } from '@/components/shells/shell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ResetPasswordForm } from './reset-password-form';

const page = () => {
  return (
    <Shell className="max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Reset password</CardTitle>
            <CardDescription>
            Ingresa tu dirección de correo electrónico y te enviaremos un código de verificación.
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
