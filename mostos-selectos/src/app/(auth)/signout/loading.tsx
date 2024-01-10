import { Skeleton } from "@/components/ui/skeleton"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"

export default function SignOutLoading() {
  return (
    <Shell className="max-w-lg">
      <PageHeader className="text-center">
        <PageHeaderHeading size="sm">Desconectar</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          ¿Estás seguro/a de que quieres cerrar sesión?
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex w-full items-center justify-center space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </Shell>
  )
}
