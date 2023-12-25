import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shell } from "@/components/shells/shell";
import { ResetPasswordStep2Form } from "./reset-password-form-step2";

export default function ResetPasswordStep2Page() {
    return (
        <Shell className="max-w-2xl">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Reset password</CardTitle>
              <CardDescription>
                Ingresa tu dirección de correo electrónico y te enviaremos un código de verificación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResetPasswordStep2Form />
            </CardContent>
          </Card>
        </Shell>
      )
}