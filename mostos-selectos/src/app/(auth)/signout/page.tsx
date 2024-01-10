import { LogOutButtons } from "@/components/auth/logout-buttons";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shell";

export default function SignOutPage() {
    return (
        <Shell className="max-w-lg mt-8">
          <PageHeader
            id="sign-out-page-header"
            aria-labelledby="sign-out-page-header-heading"
            className="text-center"
          >
            <PageHeaderHeading className="text-sm">Desconectar</PageHeaderHeading>
            <PageHeaderDescription>
                ¿Estás seguro/a de que quieres cerrar sesión?
            </PageHeaderDescription>
          </PageHeader>
          <LogOutButtons />
        </Shell>
      )
    }