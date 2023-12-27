import { redirect } from "next/navigation"

import getCurrentUser from "@/app/actions/getCurrentUser"
import { SiteHeader } from '@/components/layouts/site-layout/site-header';


export default async function CartLayout({ children }: React.PropsWithChildren) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader currentUser={currentUser} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
