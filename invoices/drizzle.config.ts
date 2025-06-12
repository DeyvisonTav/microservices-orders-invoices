import { defineConfig } from "drizzle-kit";


export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schema: "./src/db/schemas/invoices.ts",
  out: "./src/db/migrations",
  casing: "snake_case",
});