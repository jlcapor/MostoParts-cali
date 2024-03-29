import prisma from "@/lib/prismadb";

export async function fetchCategories() {
   try {
    const categories = await prisma.category.findMany({
        select: { 
            id: true, 
            name: true 
        },
    })
    return categories;
   } catch (error: any) {
        throw new Error(error);
   }
}