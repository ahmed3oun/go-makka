import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { NewUser, Users, users } from "./schema";

export const db = drizzle(sql, { schema });

export const insertUser = async (user: NewUser) => (await db.insert(users).values(user).returning())
export const selectUsers = async () => (await db.select().from(users))