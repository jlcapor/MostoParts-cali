import prisma from "@/lib/prismadb";

export async function getProductCategories() {
    try {
        const productCategories = await prisma.category.findMany({
            select: { 
                id: true, 
                name: true,
                subcategories : {
                    select:{
                        id:true,
                        name:true,
                        
                    }
                }
            },

        });
        return productCategories;
    } catch (error) {
        console.log(error);
    }
}