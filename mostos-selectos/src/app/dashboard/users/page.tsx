import { AddUserForm } from '@/components/forms/user-form/create-form'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Shell } from "@/components/shells/shell"
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default async function UsersPage({}) {
  return (
    <Shell variant="sidebar">
       <PageHeader>
        <div className="flex space-x-4">
          <PageHeaderHeading size="sm" className="flex-1">
             Usuarios
          </PageHeaderHeading>
          <Link
            aria-label="Create store"
            href="/dashboard/users/new-user"
            className={cn(
              buttonVariants({
                size: "sm",
              })
            )}
          >
            Create Usuario
          </Link>
        </div>
      </PageHeader>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
      </section>
    </Shell>
  )
}
