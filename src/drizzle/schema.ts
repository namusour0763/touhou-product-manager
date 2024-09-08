import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const products = pgTable("product", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  character: varchar("character", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  price: integer("price").notNull(),
});
