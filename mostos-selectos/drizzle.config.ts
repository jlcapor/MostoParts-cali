import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema.ts",
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgresql://postgres:125julio_2023*@localhost:5432/moto_selector?schema=public",
  }
} satisfies Config;