export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  )
}
