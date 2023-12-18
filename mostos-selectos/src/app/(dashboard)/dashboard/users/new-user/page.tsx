import { AddUserForm } from "@/components/forms/user-form/create-form";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchRoles } from "@/lib/data/userData";

export default async function newUserPage() {
    const roles = await fetchRoles();
    return (
        <Shell variant="sidebar">
           <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Crear Usuario</CardTitle>
                    <CardDescription>Agregar un nuevo usuario</CardDescription>
                </CardHeader>
                <CardContent>
                    <AddUserForm roles={roles}/>
                </CardContent>
            </Card>
        </Shell>
    )
}