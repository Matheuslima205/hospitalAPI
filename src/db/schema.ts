import { pgTable, integer, text, varchar} from "drizzle-orm/pg-core";

export const doctors = pgTable("doctors", {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    crm: varchar('crm', {length:9}).unique().notNull(),
    department: text('department').notNull(),
});

export const nurses = pgTable("Nurses", {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    coren: varchar('crm', {length:9}).unique().notNull(),
    department: text('department').notNull(),
})