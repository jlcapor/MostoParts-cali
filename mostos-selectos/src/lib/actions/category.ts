"use server";
import prisma from "@/lib/prismadb";



export async function createCategory(categoryTitle: string) {
    try {
        const existingCategory = await prisma.category.findMany({
            where: { 
                name: categoryTitle
            },
        });

        if (existingCategory.length > 0) {
            const res = {
                error: true,
                message: "Lo sentimos, ya existe una categoria con ese nombre.",
                action: "Inténtalo de nuevo.",
            };
            return res;
        }

        await prisma.category.create({
            data: {
                name: categoryTitle as string
            }
          })
          const res = {
            error: false,
            message: "Categoria creada",
            action: "Éxito, la categoria ha sido creada.",
          };
        return res;
    } catch (error) {
        console.log(error);
        const res = {
            error: true,
            message: "Lo sentimos, ocurrió un error al crear la categoria. ",
            action: "Inténtalo de nuevo.",
        };
        return res;
    }

}