import prisma from "@/lib/prismadb";
const ITEMS_PER_PAGE = 6;

export async function fetchFilteredUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const words = query.split(' ');
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        state: true,
        role: true
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            AND: words.map(word => ({
              OR: [
                {
                  name: {
                    contains: word,
                    mode: 'insensitive',
                  },
                },
                {
                  surnames: {
                    contains: word,
                    mode: 'insensitive',
                  },
                },
              ],
            })),
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: [{ id: "desc" }],
      take: ITEMS_PER_PAGE,
      skip: offset,
    });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fetchUsersPagesAction(query: string) {
  
  try {
    const count = await prisma.user.count({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function fetchUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}


export async function fetchRoles() {
  try {
    // const roles = await prisma.role.findMany({
    //   select: {
    //     id: true,
    //     name: true,
    //   },
    // });
    return null;
  } catch (err) {
    throw new Error("Failed to fetch all roles.");
  }
}