import { drizzle } from "drizzle-orm/node-postgres";

export const client = drizzle(process.env.DATABASE_URL!,{
  casing: "snake_case",
});