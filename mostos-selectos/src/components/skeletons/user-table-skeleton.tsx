export function TableRowSkeleton() {
return (
    <tr
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
    >

            {/* ID */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-4 w-6 rounded bg-gray-100"></div>
            </td>
            {/* Nombre */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Apellido */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Email */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Celular */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Rol */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Esatdo */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Actions */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    {/* <div className="h-[38px] w-[38px] rounded bg-gray-100"></div> */}
                </div>
            </td>
    </tr>
  );
}

export function UsersMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center">
                    <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                </div>
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </div>
            <div className="flex w-full items-center justify-between pt-4">
                <div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                    <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
                </div>
                <div className="flex justify-end gap-2">
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                </div>
            </div>
        </div>
    );
}

export function UsersTableSkeleton() {
return (
<div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg  p-2 md:pt-0">
            <div className="md:hidden">
                <UsersMobileSkeleton />
                <UsersMobileSkeleton />
                <UsersMobileSkeleton />
                <UsersMobileSkeleton />
            </div>
            <table className="hidden min-w-full md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Nombre
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Apellido
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            E-mail
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Celular
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Rol
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Estado
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                            {/* <span className="sr-only">Edit</span> */}
                        </th>

                    </tr>
                </thead>
                <tbody className="bg-white">
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                </tbody>
            </table>
        </div>
    </div>
</div>
);
}
