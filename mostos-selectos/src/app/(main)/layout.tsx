import { SiteFooter } from "@/components/layouts/site-layout/site-footer"
import { SiteHeader } from "@/components/layouts/site-layout/site-header"
export default async function MainLayout({ children }: React.PropsWithChildren ) {
    return (
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader/>
          <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    )
  }