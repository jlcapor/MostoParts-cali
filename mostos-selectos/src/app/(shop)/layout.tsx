import { SiteHeader } from "@/components/layouts/SiteHeader";
import getCurrentUser from "../_actions/getCurrentUser";
import { SiteFooter } from "@/components/layouts/SiteFooter";

export default async function MainLayout({ children }: React.PropsWithChildren ) {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen w-full flex flex-col">
      <SiteHeader currentUser={currentUser}/>
       <main className="h-full flex-1 mb-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
