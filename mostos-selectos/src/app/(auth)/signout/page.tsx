import { LogOutButtons } from "@/components/auth/logout-buttons";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";

export default function SignOutPage() {
    return (
        <Shell className="max-w-lg">
          <PageHeader
            id="sign-out-page-header"
            aria-labelledby="sign-out-page-header-heading"
            className="text-center"
          >
            <PageHeaderHeading size="sm">Desconectar</PageHeaderHeading>
            <PageHeaderDescription size="sm">
                ¿Estás seguro/a de que quieres cerrar sesión?
            </PageHeaderDescription>
          </PageHeader>
          <LogOutButtons />
        </Shell>
      )
    }