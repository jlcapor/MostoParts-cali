
export default function AuthLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="mt-8">
            <div className="flex h-auto min-h-screen w-full items-center justify-center">
                {children}
            </div>
        </div>
    )
}