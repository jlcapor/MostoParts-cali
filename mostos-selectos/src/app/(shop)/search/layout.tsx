import { ScrollArea } from "@/components/ui/scroll-area"
import { StoreSidebarNav } from "@/components/layouts/store/store-sidebar-nav"
import { storeConfig } from "@/config/store"
import getCurrentUser from "../../_actions/getCurrentUser";

export default async function SearchLayout({
  children,
}: React.PropsWithChildren) {
  const currentUser = await getCurrentUser();
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <StoreSidebarNav items={storeConfig.sidebarNav}/>
          </ScrollArea>
        </aside>
          <div className="flex w-full  flex-col overflow-hidden mt-8">
            {children}
          </div>
      </div>
    </div>
  )
}