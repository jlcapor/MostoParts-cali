
export default function AuthLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="mt-8">
            <main className="container absolute mt-2 top-1/2 col-span-1 flex -translate-y-1/3 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
                {children}
            </main>
        </div>
    )
}