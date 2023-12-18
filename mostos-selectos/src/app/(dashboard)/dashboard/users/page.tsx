import prisma from "@/db/prismadb";
import { UsersTableShell } from "@/components/shells/user-table-shell";
import { User } from "@prisma/client";
import { Shell } from "@/components/shells/shell";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { usersSearchParamsSchema } from "@/lib/validations/params";
import Search from "@/components/search";

interface UsersPageProps {
  params: {
    storeId: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}


export default async function UsersPage({
  searchParams,
}: UsersPageProps) {
 
  const { page, per_page, sort, email } = usersSearchParamsSchema.parse(searchParams)
  const pageAsNumber = Number(page)
  const fallbackPage = isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber
  const perPageAsNumber = Number(per_page)
  const limit = isNaN(perPageAsNumber) ? 10 : perPageAsNumber
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0
 
  const [column, order] = (sort?.split(".") as [
    keyof User | undefined,
    "asc" | "desc" | undefined,
  ]) ?? ["createdAt", "desc"]
  
  const result = await prisma.$transaction(async (tx) => {
    const items = await prisma.user.findMany({
      where: {
        AND: [
          {
            email: {
              contains: email,
              mode: "insensitive",
            },
          },
        ],
      },

      select: {
        id: true,
        name: true,
        surnames: true,
        email: true,
        phone: true,
        role: {
          select: {
            name: true,
          }
        },
        state:true,
      },
     
      orderBy: {
        [column && column in prisma.user ? column : 'createdAt']: order === "asc" ? 'asc' : 'desc',
      },
      take: limit,
      skip: offset,
    });
  
    const count = await prisma.user.count({
      where: {
        email: {
          contains: email,
        }
      }
    });
    return {
      items,
      count,
    };
  });
  
  const { items, count } = result;
  const pageCount = Math.ceil(count / limit)
  
  return (
    <Shell variant="sidebar">
      <PageHeader
         id="dashboard-users-header"
         aria-labelledby="dashboard-users-header-heading"
      >
        <PageHeaderHeading size="sm">Usuarios</PageHeaderHeading>
      </PageHeader>
      <Search placeholder="Search invoices..." />
      <UsersTableShell
        data={items}
        pageCount={pageCount}
      /> 
    </Shell>
  )
}
