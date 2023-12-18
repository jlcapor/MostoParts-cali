import { UpdateUserForm } from "@/components/forms/user-form/edit-form"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchRoles, fetchUserById } from "@/lib/data/userData"
import { notFound } from "next/navigation"

interface UpdateUserPageProps {
    params: {
        userId: string
    }
}

export default async function UpdateUserPage({params,}: UpdateUserPageProps){
    const userId = Number(params.userId)
    const [user, roles] = await Promise.all([
        fetchUserById(userId),
        fetchRoles(),
    ]);

    if (!user) {
        notFound();
    }
    
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
                    <UpdateUserForm user={user} roles={roles}/>
                </CardContent>
            </Card>
        </Shell>
    )
}