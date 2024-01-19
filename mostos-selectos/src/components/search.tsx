'use client';
import { createUrl } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div></div>
  )
}