"use client"

import * as React from "react"
import { useRouter } from "next/navigation"


import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"


export function LogOutButtons() {
    const router = useRouter()
    const mounted = useMounted()
    const [isPending, startTransition] = React.useTransition()
  
    return (
      <div className="flex w-full items-center space-x-2">
        
      </div>
    )
  }
  