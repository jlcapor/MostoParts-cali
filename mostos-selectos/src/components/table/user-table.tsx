import { fetchFilteredUsers } from "@/lib/data/userData";
import Status from "../status";
import Link from "next/link";
import { PencilIcon, EyeIcon } from "@heroicons/react/24/outline";

export default async function UsersTable({ query, currentPage}: {query: string; currentPage: number}) {
    
const users = await fetchFilteredUsers(query, currentPage);
    
return (
    <div className="mt-6 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                <div className="md:hidden"></div>
                <table className="hidden min-w-full border-collapse border border-slate-400  md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Nombre
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Apellido
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            E-mail
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Celular
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Rol
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Estado
                        </th>
                        <th scope="col" className="px-4 py-5 border border-slate-300 sm:pl-6">
                            Acciones
                        </th>
                    </tr>
                </thead>
                    <tbody className="bg-white">
                    {users?.map((user) => (
                        
                        <tr
                          key={user.id}
                          className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.id}
                            </td>

                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.name}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.surnames}
                            </td>

                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.email}
                            </td>

                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.phone}
                            </td>

                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                {user.role.name}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <Status status={user.state} />
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <Link
                                        href={`/dashboard/users/${user.id}/edit`}
                                        className="rounded-md border p-2 hover:bg-gray-100"
                                    >
                                        <PencilIcon className="w-5" />
                                    </Link>

                                    <Link
                                        href={`/dashboard/users/${user.id}/edit`}
                                        className="rounded-md border p-2 hover:bg-gray-100"
                                    >
                                        <EyeIcon className="w-5" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}


export function UpdateUser(userId:number) {
    return (
      <Link
      href={`/dashboard/users/${userId}/edit`}
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Create Invoice</span>{' '}
        <PencilIcon className="w-5" />
      </Link>
    );
  }
  
  export function UpdateInvoice({ id }: { id: string }) {
    return (
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }
