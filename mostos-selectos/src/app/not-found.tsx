import { ErrorCard } from "@/components/cards/error-card"
import { Shell } from "@/components/shell"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <Shell variant="centered" className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      
      <ErrorCard
         title="Page not found"
         description="The page you tried to access does not exist."
         retryLink="/"
      />
      
    </Shell>
  )
}