import { Shell } from '@/components/shells/shell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { VerifyEmailForm } from './verify-email-form'

const VerifyEmailPage = () => {
  return (
    <Shell className="max-w-lg">
        <Card>
            <CardHeader className="space-y-1">
             <CardTitle className="text-2xl">Verify email</CardTitle>
             <CardDescription>
                Verifique su dirección de correo electrónico para completar la creación de su cuenta
             </CardDescription>
            </CardHeader>
            <CardContent  className="w-full flex flex-col gap-4">
                <VerifyEmailForm/>
            </CardContent>
        </Card>
    </Shell>
  )
}

export default VerifyEmailPage
