'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();///dashboard/invoices?page=1&query=pending
  const pathname = usePathname();//Ruta actual "/dashboard/invoices"
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-max-[550px] w-full lg:w-80 xl:w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        placeholder={placeholder}
        onChange={(e) => {handleSearch(e.target.value)}}
        defaultValue={searchParams.get('query')?.toString()} 
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </div>
  );
}
