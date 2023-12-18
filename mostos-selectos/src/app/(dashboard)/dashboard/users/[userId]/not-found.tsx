
import { ErrorCard } from "@/components/cards/error-card"
import { Shell } from "@/components/shells/shell"

export default function StoreNotFound() {
  return (
    <Shell variant="sidebar">
      <ErrorCard
        title="User not found"
        description="Could not find the requested user"
        retryLink="/dashboard/users"
        retryLinkText="Go to Users"
      />
    </Shell>
  )
}
