import { AdminTags } from '@/components/layouts/admin/admin-tags'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { Shell } from '@/components/shell'
import React from 'react'

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Shell className="container">
      <div className="flex flex-col gap-4 pr-1 xxs:flex-row">
        <PageHeader className="flex-1">
          <PageHeaderHeading size="sm">Dashboard</PageHeaderHeading>
        </PageHeader>
      </div>
      <AdminTags/>
      {/* min-h-screen w-full flex flex-col */}
      <div className="space-y-8 overflow-auto">
        {children}
    </div>
  </Shell>
)
}


export default AdminLayout
