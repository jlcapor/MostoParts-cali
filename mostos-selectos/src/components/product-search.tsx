"use client"
import React, { useState, useEffect, useTransition } from 'react'
import { Button } from './ui/button';
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from './ui/command';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/use-debounce';
import { cn } from '@/lib/utils';
import { ProductImages } from '@/types';
import { getProductsBySearchTerm } from '@/lib/data/product-search';
import { LoadingSkeleton } from './ui/LoadingSkeleton';
import { Skeleton } from './ui/skeleton';
import Link from 'next/link';
import { ProductImage } from './product-image';
import { currencyFormatter } from '@/lib/currency';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const ProductSearch = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  
  const debouncedQuery = useDebounce(query, 300)
  const [isPending, startTransition] = useTransition();

  const [results, setResults] = useState<(Pick<Product, "id" | "name" | "price"> & { images: ProductImages[] })[]>([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [confirmedHasNoResults, setConfirmedHasNoResults] = useState(false);


  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (searchTerm === "") return setResults([]);
    const getData = setTimeout(async () => {
      if (searchTerm === "") return;
      setIsLoadingResults(true);
      setConfirmedHasNoResults(false);
    //   setResults(
    //     await getProductsBySearchTerm(searchTerm)
    //       .then((res) => {
    //         if (!res.length) setConfirmedHasNoResults(true);
    //         return res as unknown as (Pick<Product, "id" | "name" | "price"> & {
    //           images: ProductImages[];
    //         })[];
    //       })
    //       .finally(() => setIsLoadingResults(false))
    //   );
    }, 500);
    return () => clearTimeout(getData);
  }, [searchTerm]);
  
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          className="relative h-10 w-10 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => setOpen(true)}
        >
            <MagnifyingGlassIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
            <span className="hidden xl:inline-flex">Search products...</span>
            <span className="sr-only">Search products</span>
            <p className="text-sm text-muted-foreground hidden md:block">
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </p>
        </Button>
      </div>
      <CommandDialog position="top" open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
            <CommandEmpty
                className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
            >
                No products found.
            </CommandEmpty>
                <div className="flex flex-col gap-2 items-start justify-start">
                {isLoadingResults ? (
                    <div className="space-y-1 overflow-hidden px-1 py-2">
                     <Skeleton className="h-4 w-10 rounded" />
                     <Skeleton className="h-8 rounded-sm" />
                     <Skeleton className="h-8 rounded-sm" />
                    </div>
                ) : (
                    results.map((product) => (
                        <Link
                            href={`/product/${product.id}`}
                            onClick={() => setOpen(false)}
                            key={product.id}
                            className="w-full bg-secondary p-2 rounded-md"
                        >
                            <div className="flex items-center justify-start gap-2">
                                <ProductImage
                                  src={product.images[0]?.url}
                                  alt={product.images[0]?.alt}
                                  sizes="50px"
                                  height="h-12"
                                  width="w-14"
                                />
                                <div className="flex items-center justify-between w-full pr-4">
                                    <Button
                                        variant="link"
                                        className="flex items-center justify-start w-full text-left"
                                    >
                                        {product.name}
                                    </Button>
                                    <p className="text-muted-foreground text-sm">
                                        {currencyFormatter(Number(product.price))}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
                
            </div>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default ProductSearch
