import { redirect } from "next/navigation"
import { SiteHeader } from "@/components/layouts/site-header"
import { SiteFooter } from "@/components/layouts/site-footer"
import getCurrentUser from "@/app/_actions/getCurrentUser"

export default async function AdminLayout({
  children,
}: React.PropsWithChildren) {
  
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/signin")
  }
  return (
    <div className="min-h-screen w-full flex flex-col">
      <SiteHeader currentUser={currentUser} />
      {/* <div className="relative flex min-h-screen flex-col"> */}
      <main className="min-h-[calc(100vh-14rem)] flex-1 space-y-4 p-8 pt-6">{children}</main>
      {/* </div> */}
      <SiteFooter />
    </div>
  )
}
