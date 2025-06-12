import { pgTable, text, timestamp } from "drizzle-orm/pg-core";


export const invoices = pgTable("invoices", {
  id: text("id").primaryKey(),
  orderId: text("order_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});