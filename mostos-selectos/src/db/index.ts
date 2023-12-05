import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: "postgresql://postgres:125julio_2023*@localhost:5432/moto_selector?schema=public",
});


export const db = drizzle(pool, { schema: schema });