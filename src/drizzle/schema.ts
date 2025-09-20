import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { uniqueIndex } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        email: text('name').unique().notNull(),
        passport: text('passport').notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    },
    (users) => ({
        uniqueIdx: uniqueIndex('unique_idx').on(users.email)
    })
)

export type NewUser = InferInsertModel<typeof users>;
export type Users = InferSelectModel<typeof users>;