"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createSubcategory(args: {
    name: string | null;
    categoryId: string | null
}) {
    const inputSchema = z.object({
        name: z.string(),
        categoryId: z.string(),
    });
    try {
        if (!inputSchema.parse(args)) {
            throw new Error("invalid input");
        }
        await prisma.subcategory.create({
            data: {
                name: args.name as string,
                categoryId: args.categoryId as string
            }
        })
    } catch (error) {
        
    }

    revalidatePath("/dashboard/subcategories");
    redirect("/dashboard/subcategories");
}