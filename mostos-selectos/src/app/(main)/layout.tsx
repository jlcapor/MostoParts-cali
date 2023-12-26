import { SiteFooter } from "@/components/layouts/site-layout/site-footer"
import { SiteHeader } from "@/components/layouts/site-layout/site-header"
import getCurrentUser from "@/app/actions/getCurrentUser";
export default async function MainLayout({ children }: React.PropsWithChildren ) {
  const currentUser = await getCurrentUser();
  console.log("user <<<<<", currentUser)
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader currentUser={currentUser} />
        <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}