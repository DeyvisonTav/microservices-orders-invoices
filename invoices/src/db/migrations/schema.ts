import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const invoices = pgTable("invoices", {
	id: text().primaryKey().notNull(),
	orderId: text("order_id").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});
