import type { Metadata, Viewport } from "next"
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import "@/styles/globals.css"
import { Toaster } from '@/components/ui/toaster'
import { fontHeading, fontMono, fontSans } from '@/lib/fonts'
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Analytics } from "@/components/analytics"
import { Providers } from "./Providers";
import { siteConfig } from "@/config/site"
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(baseUrl),
  description: siteConfig.description,
   robots: {
    follow: true,
    index: true
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <html lang="en" suppressHydrationWarning>
        <body  
          className={cn("min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable,
            fontHeading.variable
        )}>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <TailwindIndicator />
              <Analytics />
            </ThemeProvider>
          <Toaster />
          </Providers>
        </body>
      </html>
  )
}
