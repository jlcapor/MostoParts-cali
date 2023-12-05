import { db } from '@/db';

export async function fetchRoles() {
  try {
    const roles = await db.query.roles.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
   return roles;
  } catch (err) {
    throw new Error("Failed to fetch all roles.");
  }
}