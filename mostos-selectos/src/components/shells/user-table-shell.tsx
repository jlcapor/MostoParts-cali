"use client"

import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { toast } from "sonner"
import { deleteUserAction } from "@/lib/actions/user"
import { catchError, cn } from "@/lib/utils"
import clsx from "clsx"


interface User {
  id: string
  name: string | null
  surnames: string | null
  email: string | null
  phone: string | null
  role: {
    name: string
  } | null,
  state: string | null
}

interface UsersTableShellProps {
    data: User[]
    pageCount: number
}

export function UsersTableShell({data, pageCount}: UsersTableShellProps){
    const [isPending, startTransition] = React.useTransition()
    const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([])
   
    const columns = React.useMemo<ColumnDef<User, unknown>[]>(
        () => [
            {
                id: "select",
                header: ({ table }) => (
                  <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => {
                      table.toggleAllPageRowsSelected(!!value)
                      setSelectedRowIds((prev) =>
                        prev.length === data.length ? [] : data.map((row) => row.id)
                      )
                    }}
                    aria-label="Select all"
                    className="translate-y-[2px]"
                  />
                ),
                cell: ({ row }) => (
                  <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => {
                      row.toggleSelected(!!value)
                      setSelectedRowIds((prev) =>
                        value
                          ? [...prev, row.original.id]
                          : prev.filter((id) => id !== row.original.id)
                      )
                    }}
                    aria-label="Select row"
                    className="translate-y-[2px]"
                  />
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "name",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Nombre" />
                )
            },
            {
                accessorKey: "surnames",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Apellido" />
                )
            },
            {
                accessorKey: "email",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="E-mail" />
                )
            },
            {
                accessorKey: "phone",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Celular" />
                ),
               
            },
            {
                accessorKey: "role.name",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Rol"/>
                ),
            },
            {
                accessorKey: "state",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Estado" />
                ),
                cell: ({ cell }) => {
                  const status = cell.getValue()
                  return (
                    <span
                      className={clsx(
                        'inline-flex items-center rounded-full px-2 py-1 text-sm',
                        {
                          'bg-green-500 text-gray-100': status === 'ACTIVO',
                          'bg-red-400 text-white': status === 'INACTIVO',
                        },
                      )}
                      >
                      {status === 'INACTIVO' ? (
                        <>
                          Inactivo
                        </>
                      ) : null}
                      {status === 'ACTIVO' ? (
                        <>
                          Activo
                        </>
                      ) : null}
                    </span>
                  )
                }
            },
            {
               id: "actions",
                cell: ({ row }) => (
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button 
                       aria-label="Open menu"
                       variant="ghost"
                       className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                          <DotsHorizontalIcon className="h-4 w-4" aria-hidden="true" />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent  align="end" className="w-[160px]">
                      <DropdownMenuItem asChild>
                          <Link
                              href={`/dashboard/users/${row.original.id}`}
                          >
                              Edit
                          </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                          <Link href={`/product/${row.original.id}`}>View</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                          onClick={() => {
                            startTransition(() => {
                              row.toggleSelected(false)
          
                              toast.promise(
                                deleteUserAction({
                                  id: row.original.id,
                                }),
                                {
                                  loading: "Deleting...",
                                  success: () => "Product deleted successfully.",
                                  error: (err: unknown) => catchError(err),
                                }
                              )
                            })
                          }}
                          disabled={isPending}
                      >
                          Delete
                          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                      </DropdownMenuItem>
                  </DropdownMenuContent>
                  </DropdownMenu>
                )
            }
        ],
    [data, isPending])

    function deleteSelectedRows() {
        toast.promise(
            Promise.all(
              selectedRowIds.map((id) =>
                deleteUserAction({
                  id,
                })
              )
            ),
            {
              loading: "Deleting...",
              success: () => {
                setSelectedRowIds([])
                return "Users deleted successfully."
              },
              error: (err: unknown) => {
                setSelectedRowIds([])
                return catchError(err)
              },
            }
          )
    }

    return (
        <DataTable
            columns={columns}
            data={data}
            pageCount={pageCount}
            searchableColumns={[
              {
                id: "email",
                title: "emails",
              },
            ]}
           
            newRowLink={`/dashboard/users/new-user`}
            deleteRowsAction={() => void deleteSelectedRows()}
        />
    )
}
