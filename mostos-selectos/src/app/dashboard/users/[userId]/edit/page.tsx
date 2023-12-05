import { UpdateUserForm } from "@/components/forms/user-form/edit-form"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface UpdateUserPageProps {
    params: {
      storeId: string
    }
}

export default async function UpdateUserPage({params,}: UpdateUserPageProps){
    const storeId = Number(params.storeId)

    return (
        <Shell variant="sidebar">
            <Card>
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between space-x-2">
                    <CardTitle as="h2" className="text-2xl">
                        Actualizar Usuario
                    </CardTitle>
                    </div>
                    <CardDescription>
                        Actualizar la información del usuario 
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UpdateUserForm />
                </CardContent>
            </Card>
        </Shell>
    )
}